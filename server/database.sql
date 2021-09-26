CREATE DATABASE jwt_auth;

/* uses the "uuid-ossp" extension, to install go to psql cli and type "create extension if not exists "uuid-ossp"" */
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_passwd VARCHAR(255) NOT NULL
);