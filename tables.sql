CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
name TEXT,
password TEXT,
profile_img TEXT
);

CREATE TABLE IF NOT EXISTS experience (
id SERIAL PRIMARY KEY,
user_id INTEGER,
country TEXT,
experience TEXT,
testimony TEXT,
img TEXT
);

CREATE TABLE IF NOT EXISTS follow (
id SERIAL PRIMARY KEY,
following_user_id INTEGER,
followed_id INTEGER,
post_id INTEGER
);

CREATE TABLE IF NOT EXISTS comments (
id SERIAL PRIMARY KEY,
current_user_id INTEGER,
post_id INTEGER,
comments TEXT
);

CREATE TABLE IF NOT EXISTS favorites (
	id SERIAL PRIMARY KEY,
	favoriter_id INTEGER,
	favorited_id INTEGER,
	favorited_post_id INTEGER
);