"""Company design resource library with Cowork SSO and PostgreSQL persistence."""
from __future__ import annotations

import json
from pathlib import Path
from typing import Optional

import psycopg
from fastapi import FastAPI, Header, HTTPException
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from psycopg.rows import dict_row


BASE_DIR = Path(__file__).resolve().parent


def _load_props(path: str) -> dict[str, str]:
    props: dict[str, str] = {}
    try:
        with open(path) as file:
            for line in file:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                key, _, value = line.partition("=")
                props[key.strip()] = value.strip()
    except FileNotFoundError:
        pass
    return props


def _get_db_conn() -> psycopg.Connection:
    props = _load_props("db.properties")
    if not props.get("db.host"):
        raise HTTPException(status_code=503, detail="db.properties 未配置")
    return psycopg.connect(
        host=props["db.host"],
        port=int(props["db.port"]),
        dbname=props["db.database"],
        user=props["db.username"],
        password=props["db.password"],
        row_factory=dict_row,
    )


def _parse_sso_user(decrypted_userinfo: Optional[str]) -> Optional[dict]:
    if not decrypted_userinfo:
        return None
    try:
        fixed = decrypted_userinfo.encode("latin-1").decode("utf-8")
        data = json.loads(fixed)
    except (UnicodeEncodeError, UnicodeDecodeError, json.JSONDecodeError):
        return None

    user_id = data.get("userId")
    display_name = data.get("displayName") or data.get("name")
    if not user_id or not display_name:
        return None

    return {
        "userId": str(user_id),
        "displayName": display_name,
        "avatar": data.get("avatar") or "",
        "email": data.get("email") or "",
        "name": data.get("name") or "",
        "emailAlias": data.get("emailAlias") or "",
    }


def _require_user(decrypted_userinfo: Optional[str]) -> dict:
    user = _parse_sso_user(decrypted_userinfo)
    if not user:
        raise HTTPException(status_code=401, detail="unauthenticated")
    return user


def _upsert_user(conn: psycopg.Connection, user: dict) -> None:
    conn.execute(
        """
        INSERT INTO app_users (sso_id, email, display_name, avatar_url, updated_at)
        VALUES (%s, %s, %s, %s, NOW())
        ON CONFLICT (sso_id) DO UPDATE SET
          email = EXCLUDED.email,
          display_name = EXCLUDED.display_name,
          avatar_url = EXCLUDED.avatar_url,
          updated_at = NOW()
        """,
        (user["userId"], user["email"], user["displayName"], user["avatar"]),
    )


app = FastAPI(title="AI Design Resource Sharing")
app.mount("/assets", StaticFiles(directory=BASE_DIR / "assets"), name="assets")


@app.get("/health")
def health() -> dict:
    return {"ok": True}


@app.get("/")
def index(
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> FileResponse:
    _require_user(decrypted_userinfo)
    return FileResponse(BASE_DIR / "index.html")


@app.get("/styles.css")
def styles() -> FileResponse:
    return FileResponse(BASE_DIR / "styles.css", media_type="text/css")


@app.get("/app.js")
def javascript() -> FileResponse:
    return FileResponse(BASE_DIR / "app.js", media_type="application/javascript")


@app.get("/api/session/me")
def session_me(
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> JSONResponse:
    user = _require_user(decrypted_userinfo)
    with _get_db_conn() as conn:
        _upsert_user(conn, user)
        conn.commit()
    return JSONResponse(user)


@app.get("/api/favorites")
def list_favorites(
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> JSONResponse:
    user = _require_user(decrypted_userinfo)
    with _get_db_conn() as conn:
        _upsert_user(conn, user)
        rows = conn.execute(
            """
            SELECT resource_id
            FROM favorites
            WHERE owner_id = %s
            ORDER BY created_at DESC
            """,
            (user["userId"],),
        ).fetchall()
        conn.commit()
    return JSONResponse({"resourceIds": [row["resource_id"] for row in rows]})


@app.post("/api/favorites/{resource_id}", status_code=201)
def create_favorite(
    resource_id: str,
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> JSONResponse:
    user = _require_user(decrypted_userinfo)
    clean_resource_id = resource_id.strip()
    if not clean_resource_id or len(clean_resource_id) > 240:
        raise HTTPException(status_code=400, detail="invalid resource id")

    with _get_db_conn() as conn:
        _upsert_user(conn, user)
        conn.execute(
            """
            INSERT INTO favorites (owner_id, resource_id)
            VALUES (%s, %s)
            ON CONFLICT (owner_id, resource_id) DO NOTHING
            """,
            (user["userId"], clean_resource_id),
        )
        conn.commit()
    return JSONResponse({"resourceId": clean_resource_id, "saved": True}, status_code=201)


@app.delete("/api/favorites/{resource_id}", status_code=204)
def delete_favorite(
    resource_id: str,
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> None:
    user = _require_user(decrypted_userinfo)
    with _get_db_conn() as conn:
        conn.execute(
            "DELETE FROM favorites WHERE owner_id = %s AND resource_id = %s",
            (user["userId"], resource_id),
        )
        conn.commit()


@app.get("/api/publications")
def list_publications(
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> JSONResponse:
    user = _require_user(decrypted_userinfo)
    with _get_db_conn() as conn:
        _upsert_user(conn, user)
        rows = conn.execute(
            """
            SELECT resource_id, title, category, summary, url, cover_image, created_at
            FROM publications
            WHERE owner_id = %s
            ORDER BY created_at DESC
            """,
            (user["userId"],),
        ).fetchall()
        conn.commit()

    publications = [
        {
            "resourceId": row["resource_id"],
            "title": row["title"],
            "category": row["category"],
            "summary": row["summary"],
            "url": row["url"],
            "coverImage": row["cover_image"],
            "createdAt": row["created_at"].isoformat(),
        }
        for row in rows
    ]
    return JSONResponse({"publications": publications})
