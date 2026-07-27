"""Idempotent PostgreSQL schema initialization for user libraries."""
import psycopg


def load_db_props(path: str = "db.properties") -> dict[str, str]:
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


SCHEMA = """
CREATE TABLE IF NOT EXISTS app_users (
    id           BIGSERIAL PRIMARY KEY,
    sso_id       TEXT        NOT NULL UNIQUE,
    email        TEXT        NOT NULL DEFAULT '',
    display_name TEXT        NOT NULL,
    avatar_url   TEXT        NOT NULL DEFAULT '',
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS favorites (
    owner_id    TEXT        NOT NULL,
    resource_id TEXT        NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (owner_id, resource_id)
);
CREATE INDEX IF NOT EXISTS idx_favorites_owner_created
ON favorites (owner_id, created_at DESC);

CREATE TABLE IF NOT EXISTS publications (
    id          BIGSERIAL PRIMARY KEY,
    owner_id    TEXT        NOT NULL,
    resource_id TEXT        NOT NULL,
    title       TEXT        NOT NULL,
    category    TEXT        NOT NULL DEFAULT '',
    summary     TEXT        NOT NULL DEFAULT '',
    url         TEXT        NOT NULL,
    cover_image TEXT        NOT NULL DEFAULT '',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (owner_id, resource_id)
);
CREATE INDEX IF NOT EXISTS idx_publications_owner_created
ON publications (owner_id, created_at DESC);

CREATE TABLE IF NOT EXISTS comments (
    id          BIGSERIAL PRIMARY KEY,
    resource_id TEXT        NOT NULL,
    owner_id    TEXT        NOT NULL,
    parent_id   BIGINT      REFERENCES comments(id) ON DELETE CASCADE,
    content     TEXT        NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_comments_resource_created
ON comments (resource_id, created_at ASC);
CREATE INDEX IF NOT EXISTS idx_comments_parent
ON comments (parent_id);
"""


def main() -> None:
    props = load_db_props()
    if not props.get("db.host"):
        print("[init_db] db.properties 未找到或为空 - 跳过")
        return

    with psycopg.connect(
        host=props["db.host"],
        port=int(props["db.port"]),
        dbname=props["db.database"],
        user=props["db.username"],
        password=props["db.password"],
    ) as conn:
        conn.execute(SCHEMA)
        conn.commit()
    print("[init_db] done")


if __name__ == "__main__":
    main()
