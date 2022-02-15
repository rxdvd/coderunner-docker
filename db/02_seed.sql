-- posts
DROP TABLE IF EXISTS tmp;
CREATE TABLE tmp(
    json_data text
);

COPY tmp FROM '/json/posts.json';

INSERT INTO posts (pid, title, message, giphy, tags, timestamp)
SELECT p.* FROM tmp 
CROSS JOIN json_populate_recordset(NULL::posts, json_data::json) p;

SELECT setval('posts_pid_seq', (SELECT MAX(pid) FROM posts));

DROP TABLE tmp;

-- comments
DROP TABLE IF EXISTS tmp;
CREATE TABLE tmp(
    json_data text
);

COPY tmp FROM '/json/comments.json';

INSERT INTO comments (cid, comment, timestamp, pid)
SELECT p.* FROM tmp 
CROSS JOIN json_populate_recordset(NULL::comments, json_data::json) p;

SELECT setval('comments_cid_seq', (SELECT MAX(cid) FROM comments));

DROP TABLE tmp;

-- emojis
DROP TABLE IF EXISTS tmp;
CREATE TABLE tmp(
    json_data text
);

COPY tmp FROM '/json/emojis.json';

INSERT INTO emojis (eid, name)
SELECT p.* FROM tmp 
CROSS JOIN json_populate_recordset(NULL::emojis, json_data::json) p;

SELECT setval('emojis_eid_seq', (SELECT MAX(eid) FROM emojis));

DROP TABLE tmp;

-- reactions
DROP TABLE IF EXISTS tmp;
CREATE TABLE tmp(
    json_data text
);

COPY tmp FROM '/json/reactions.json';

INSERT INTO reactions (rid, eid, pid, uid)
SELECT p.* FROM tmp 
CROSS JOIN json_populate_recordset(NULL::reactions, json_data::json) p;

SELECT setval('reactions_rid_seq', (SELECT MAX(rid) FROM reactions));

DROP TABLE tmp;
