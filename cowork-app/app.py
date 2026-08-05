"""Company design resource library with Cowork SSO and PostgreSQL persistence."""
from __future__ import annotations

import json
import re
import uuid
from pathlib import Path
from typing import Optional
from urllib.parse import quote, urlparse

import httpx
import psycopg
from fastapi import BackgroundTasks, FastAPI, Header, HTTPException, Response
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from psycopg.rows import dict_row


BASE_DIR = Path(__file__).resolve().parent


class CommentCreate(BaseModel):
    content: str
    parentId: Optional[int] = None
    positionX: Optional[float] = None
    positionY: Optional[float] = None


class PublicationCreate(BaseModel):
    categoryId: str
    url: str
    description: Optional[str] = None
    action: Optional[str] = None


PUBLICATION_CATEGORIES = {
    "product": "产品与体验",
    "visual": "视觉与内容",
    "motion": "动效与 3D",
    "delivery": "开发与交付",
    "workflow": "工作流与协作",
}


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
        data = json.loads(decrypted_userinfo)
    except json.JSONDecodeError:
        try:
            fixed = decrypted_userinfo.encode("latin-1").decode("utf-8")
            data = json.loads(fixed)
        except (UnicodeEncodeError, UnicodeDecodeError, json.JSONDecodeError):
            return None

    user_id = data.get("userId")
    email = data.get("email") or ""
    display_name = (
        data.get("displayName")
        or data.get("name")
        or data.get("username")
        or data.get("emailAlias")
        or (email.split("@", 1)[0] if email else "")
    )
    if not user_id or not display_name:
        return None

    return {
        "userId": str(user_id),
        "displayName": display_name,
        "avatar": data.get("avatar") or data.get("avatarUrl") or "",
        "email": email,
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


def _serialize_comment(row: dict, viewer_id: Optional[str] = None) -> dict:
    is_deleted = bool(row.get("is_deleted"))
    return {
        "id": row["id"],
        "resourceId": row["resource_id"],
        "parentId": row["parent_id"],
        "content": "该评论已删除" if is_deleted else row["content"],
        "displayName": "已删除评论" if is_deleted else row["display_name"],
        "avatar": "" if is_deleted else row["avatar_url"],
        "positionX": row.get("position_x"),
        "positionY": row.get("position_y"),
        "createdAt": row["created_at"].isoformat(),
        "isDeleted": is_deleted,
        "canDelete": bool(
            not is_deleted
            and viewer_id
            and str(row.get("owner_id") or "") == str(viewer_id)
        ),
    }


def _serialize_publication(row: dict) -> dict:
    return {
        "resourceId": row["resource_id"],
        "title": row["title"],
        "category": row["category"],
        "summary": row["summary"],
        "description": row.get("description") or "",
        "action": row.get("action") or "",
        "url": row["url"],
        "coverImage": row["cover_image"],
        "visualLabel": row.get("visual_label") or row["category"],
        "filterScopeId": row.get("filter_scope") or "",
        "status": row.get("status") or "READY",
        "createdAt": row["created_at"].isoformat(),
        "updatedAt": row.get("updated_at", row["created_at"]).isoformat(),
    }


def _publication_cover_url(url: str) -> str:
    return f"https://image.thum.io/get/width/1200/crop/760/noanimate/{quote(url, safe=':/?&=%')}"


def _fallback_publication_metadata(
    url: str,
    category: str,
    description: str,
    action: str,
) -> dict[str, str]:
    host = (urlparse(url).hostname or "新资源").removeprefix("www.")
    raw_name = host.split(".", 1)[0].replace("-", " ").replace("_", " ").strip()
    title = " ".join(part.capitalize() for part in raw_name.split()) or "新设计资源"
    return {
        "title": title[:80],
        "summary": f"一个值得进一步体验和拆解的{category}资源。",
        "description": description
        or f"该资源来自 {host}，可用于观察其核心能力、页面结构和典型使用流程，并与现有设计方案进行对照。",
        "action": action
        or "先用一个小范围真实任务体验核心流程，再记录可复用的方法、限制条件和仍需人工判断的环节。",
        "visualLabel": category,
    }


def _parse_ai_json(text: str) -> dict:
    cleaned = re.sub(r"^```(?:json)?\s*|\s*```$", "", text.strip(), flags=re.I)
    start = cleaned.find("{")
    end = cleaned.rfind("}")
    if start < 0 or end <= start:
        raise ValueError("AI response does not contain JSON")
    data = json.loads(cleaned[start : end + 1])
    if not isinstance(data, dict):
        raise ValueError("AI response is not an object")
    return data


def _generate_publication_metadata(
    publication_id: int,
    url: str,
    category: str,
    description: str,
    action: str,
) -> None:
    fallback = _fallback_publication_metadata(url, category, description, action)
    result = dict(fallback)
    error_message = ""

    try:
        ai_props = _load_props("ai.properties")
        ai_base_url = ai_props.get("ai.base_url", "").rstrip("/")
        ai_api_key = ai_props.get("ai.api_key", "")
        if ai_base_url and ai_api_key:
            prompt = f"""
你在整理一个面向产品设计师的中文设计资源库。请根据下面的信息生成案例卡片内容。
链接：{url}
大类：{category}
用户补充的案例解读：{description or "未填写"}
用户补充的“可以怎么用”：{action or "未填写"}

只返回 JSON 对象，不要 Markdown：
{{
  "title": "资源名称，尽量采用产品或项目的正式名称，最多 80 字",
  "summary": "一句话价值概括，最多 70 个中文字符",
  "description": "案例解读，说明它是什么、值得观察什么，100-180 个中文字符",
  "action": "可以怎么用，给出具体可执行的使用方式，60-120 个中文字符",
  "visualLabel": "2-4 个英文单词的视觉标签"
}}
用户已填写的字段必须保留原意并优先采用；不要虚构精确的发布时间、融资额或用户量。
""".strip()
            response = httpx.post(
                f"{ai_base_url}/bedrock_runtime/model/invoke",
                headers={
                    "token": ai_api_key,
                    "Content-Type": "application/json",
                },
                json={
                    "anthropic_version": "bedrock-2023-05-31",
                    "max_tokens": 1600,
                    "messages": [{"role": "user", "content": prompt}],
                },
                timeout=60,
            )
            response.raise_for_status()
            payload = response.json()
            if payload.get("Code") or payload.get("Error"):
                raise RuntimeError(f"AI call failed: {payload}")
            generated = _parse_ai_json(payload["content"][0]["text"])
            for key, limit in (
                ("title", 80),
                ("summary", 240),
                ("description", 1200),
                ("action", 800),
                ("visualLabel", 80),
            ):
                value = str(generated.get(key) or "").strip()
                if value:
                    result[key] = value[:limit]
            if description:
                result["description"] = description[:1200]
            if action:
                result["action"] = action[:800]
    except Exception as error:
        error_message = str(error)[:500]

    with _get_db_conn() as conn:
        conn.execute(
            """
            UPDATE publications
            SET
              title = %s,
              summary = %s,
              description = %s,
              action = %s,
              visual_label = %s,
              status = 'READY',
              error_message = %s,
              updated_at = NOW()
            WHERE id = %s
            """,
            (
                result["title"],
                result["summary"],
                result["description"],
                result["action"],
                result["visualLabel"],
                error_message,
                publication_id,
            ),
        )
        conn.commit()


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


@app.delete(
    "/api/favorites/{resource_id}",
    status_code=204,
    response_class=Response,
)
def delete_favorite(
    resource_id: str,
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> Response:
    user = _require_user(decrypted_userinfo)
    with _get_db_conn() as conn:
        conn.execute(
            "DELETE FROM favorites WHERE owner_id = %s AND resource_id = %s",
            (user["userId"], resource_id),
        )
        conn.commit()
    return Response(status_code=204)


@app.get("/api/publications")
def list_publications(
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> JSONResponse:
    user = _require_user(decrypted_userinfo)
    with _get_db_conn() as conn:
        _upsert_user(conn, user)
        rows = conn.execute(
            """
            SELECT
              resource_id,
              title,
              category,
              summary,
              description,
              action,
              url,
              cover_image,
              visual_label,
              filter_scope,
              status,
              created_at,
              updated_at
            FROM publications
            WHERE owner_id = %s
            ORDER BY created_at DESC
            """,
            (user["userId"],),
        ).fetchall()
        conn.commit()

    publications = [_serialize_publication(row) for row in rows]
    return JSONResponse({"publications": publications})


@app.post("/api/publications", status_code=202)
def create_publication(
    payload: PublicationCreate,
    background_tasks: BackgroundTasks,
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> JSONResponse:
    user = _require_user(decrypted_userinfo)
    category_id = payload.categoryId.strip()
    category = PUBLICATION_CATEGORIES.get(category_id)
    clean_url = payload.url.strip()
    description = (payload.description or "").strip()
    action = (payload.action or "").strip()

    parsed_url = urlparse(clean_url)
    if not category:
        raise HTTPException(status_code=400, detail="invalid category")
    if (
        parsed_url.scheme not in {"http", "https"}
        or not parsed_url.netloc
        or len(clean_url) > 2000
    ):
        raise HTTPException(status_code=400, detail="invalid url")
    if len(description) > 1200 or len(action) > 800:
        raise HTTPException(status_code=400, detail="content is too long")

    resource_id = f"publication-{uuid.uuid4().hex}"
    cover_image = _publication_cover_url(clean_url)
    with _get_db_conn() as conn:
        _upsert_user(conn, user)
        row = conn.execute(
            """
            INSERT INTO publications (
              owner_id,
              resource_id,
              title,
              category,
              summary,
              description,
              action,
              url,
              cover_image,
              visual_label,
              filter_scope,
              status,
              updated_at
            )
            VALUES (%s, %s, %s, %s, '', %s, %s, %s, %s, %s, %s, 'GENERATING', NOW())
            RETURNING
              id,
              resource_id,
              title,
              category,
              summary,
              description,
              action,
              url,
              cover_image,
              visual_label,
              filter_scope,
              status,
              created_at,
              updated_at
            """,
            (
                user["userId"],
                resource_id,
                "AI 正在生成中",
                category,
                description,
                action,
                clean_url,
                cover_image,
                category,
                category_id,
            ),
        ).fetchone()
        conn.commit()

    background_tasks.add_task(
        _generate_publication_metadata,
        row["id"],
        clean_url,
        category,
        description,
        action,
    )
    return JSONResponse(_serialize_publication(row), status_code=202)


@app.get("/api/comment-counts")
def list_comment_counts(
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> JSONResponse:
    user = _require_user(decrypted_userinfo)
    with _get_db_conn() as conn:
        _upsert_user(conn, user)
        rows = conn.execute(
            """
            SELECT resource_id, COUNT(*) AS comment_count
            FROM comments
            WHERE is_deleted = FALSE
            GROUP BY resource_id
            """
        ).fetchall()
        conn.commit()

    return JSONResponse(
        {"counts": {row["resource_id"]: row["comment_count"] for row in rows}}
    )


@app.get("/api/comments/{resource_id}")
def list_comments(
    resource_id: str,
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> JSONResponse:
    user = _require_user(decrypted_userinfo)
    clean_resource_id = resource_id.strip()
    if not clean_resource_id or len(clean_resource_id) > 240:
        raise HTTPException(status_code=400, detail="invalid resource id")

    with _get_db_conn() as conn:
        _upsert_user(conn, user)
        rows = conn.execute(
            """
            SELECT
              c.id,
              c.resource_id,
              c.owner_id,
              c.parent_id,
              c.content,
              c.position_x,
              c.position_y,
              c.is_deleted,
              c.created_at,
              u.display_name,
              u.avatar_url
            FROM comments AS c
            JOIN app_users AS u ON u.sso_id = c.owner_id
            WHERE c.resource_id = %s
            ORDER BY c.created_at ASC, c.id ASC
            """,
            (clean_resource_id,),
        ).fetchall()
        conn.commit()

    comments = [_serialize_comment(row, user["userId"]) for row in rows]
    count = sum(not comment["isDeleted"] for comment in comments)
    return JSONResponse({"comments": comments, "count": count})


@app.post("/api/comments/{resource_id}", status_code=201)
def create_comment(
    resource_id: str,
    payload: CommentCreate,
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> JSONResponse:
    user = _require_user(decrypted_userinfo)
    clean_resource_id = resource_id.strip()
    content = payload.content.strip()
    if not clean_resource_id or len(clean_resource_id) > 240:
        raise HTTPException(status_code=400, detail="invalid resource id")
    if not content or len(content) > 1000:
        raise HTTPException(status_code=400, detail="comment must be 1-1000 characters")
    position_x = payload.positionX
    position_y = payload.positionY
    if payload.parentId is None:
        has_x = position_x is not None
        has_y = position_y is not None
        if has_x != has_y:
            raise HTTPException(status_code=400, detail="comment position is incomplete")
        if has_x and not (0 <= position_x <= 1 and 0 <= position_y <= 1):
            raise HTTPException(status_code=400, detail="comment position is out of range")
    else:
        position_x = None
        position_y = None

    with _get_db_conn() as conn:
        _upsert_user(conn, user)
        if payload.parentId is not None:
            parent = conn.execute(
                "SELECT resource_id FROM comments WHERE id = %s",
                (payload.parentId,),
            ).fetchone()
            if not parent or parent["resource_id"] != clean_resource_id:
                raise HTTPException(status_code=400, detail="invalid parent comment")

        row = conn.execute(
            """
            INSERT INTO comments (
              resource_id,
              owner_id,
              parent_id,
              content,
              position_x,
              position_y
            )
            VALUES (%s, %s, %s, %s, %s, %s)
            RETURNING
              id,
              resource_id,
              owner_id,
              parent_id,
              content,
              position_x,
              position_y,
              is_deleted,
              created_at
            """,
            (
                clean_resource_id,
                user["userId"],
                payload.parentId,
                content,
                position_x,
                position_y,
            ),
        ).fetchone()
        conn.commit()

    row["display_name"] = user["displayName"]
    row["avatar_url"] = user["avatar"]
    return JSONResponse(
        _serialize_comment(row, user["userId"]),
        status_code=201,
    )


@app.delete("/api/comments/{resource_id}/{comment_id}")
def delete_comment(
    resource_id: str,
    comment_id: int,
    decrypted_userinfo: Optional[str] = Header(None, alias="Decrypted-Userinfo"),
) -> JSONResponse:
    user = _require_user(decrypted_userinfo)
    clean_resource_id = resource_id.strip()
    if not clean_resource_id or len(clean_resource_id) > 240:
        raise HTTPException(status_code=400, detail="invalid resource id")

    with _get_db_conn() as conn:
        _upsert_user(conn, user)
        comment = conn.execute(
            """
            SELECT
              c.id,
              c.resource_id,
              c.owner_id,
              c.is_deleted,
              EXISTS (
                SELECT 1
                FROM comments AS child
                WHERE child.parent_id = c.id
              ) AS has_replies
            FROM comments AS c
            WHERE c.id = %s AND c.resource_id = %s
            """,
            (comment_id, clean_resource_id),
        ).fetchone()

        if not comment:
            raise HTTPException(status_code=404, detail="comment not found")
        if str(comment["owner_id"]) != user["userId"]:
            raise HTTPException(status_code=403, detail="cannot delete another user's comment")

        retained_thread = bool(comment["has_replies"])
        if not comment["is_deleted"]:
            if retained_thread:
                conn.execute(
                    """
                    UPDATE comments
                    SET content = '', is_deleted = TRUE
                    WHERE id = %s AND owner_id = %s
                    """,
                    (comment_id, user["userId"]),
                )
            else:
                conn.execute(
                    "DELETE FROM comments WHERE id = %s AND owner_id = %s",
                    (comment_id, user["userId"]),
                )
        conn.commit()

    return JSONResponse(
        {
            "deleted": True,
            "commentId": comment_id,
            "retainedThread": retained_thread,
        }
    )
