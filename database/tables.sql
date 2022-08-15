

CREATE TABLE IF NOT EXISTS usages (
    id uuid PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS app_users (
    id uuid PRIMARY KEY,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    age INT NOT NULL,
    refresh_token TEXT,
    usage_id uuid REFERENCES usages(id)
);

CREATE TABLE IF NOT EXISTS boards (
    id uuid PRIMARY KEY,
    name TEXT NOT NULL,
    user_id uuid REFERENCES app_users(id)
);

CREATE TABLE IF NOT EXISTS tasks (
    id uuid PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    board_id uuid REFERENCES boards(id)
);