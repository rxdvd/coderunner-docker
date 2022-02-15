DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    pid serial PRIMARY KEY,
    title varchar(50) NOT NULL,
    message varchar(420) NOT NULL,
    giphy text,
    tags text,
    timestamp bigint NOT NULL
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments(
    cid serial PRIMARY KEY,
    comment varchar(420) NOT NULL,
    timestamp bigint NOT NULL,
    pid int REFERENCES posts(pid)
);

DROP TABLE IF EXISTS emojis;

CREATE TABLE emojis(
    eid serial PRIMARY KEY,
    name text NOT NULL
);

DROP TABLE IF EXISTS reactions;

CREATE TABLE reactions(
    rid serial PRIMARY KEY,
    eid int REFERENCES emojis(eid),
    pid int REFERENCES posts(pid),
    uid varchar(10) NOT NULL
);
