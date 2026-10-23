-- Adds the NICKNAME column to a YACHT_SCORE table that was made before nicknames existed (an older schema.sql).
-- Run once, as the shared homepage database user. Games already in the table (there should be none) get the name
-- 'anonymous'; the default is then removed, so every new game has to bring its own nickname.

ALTER TABLE YACHT_SCORE ADD (NICKNAME VARCHAR2(12 CHAR) DEFAULT 'anonymous' NOT NULL);

ALTER TABLE YACHT_SCORE MODIFY (NICKNAME DEFAULT NULL);
