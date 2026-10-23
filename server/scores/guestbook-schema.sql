-- Table for the guestbook (the Guestbook tab of the site), for Oracle Database 12c or later (identity columns need 12c).
-- Run as the shared homepage database user (HOMEPAGE_APP). See README.md in this folder.
--
-- A row is a comment (PARENT_ID empty) or a reply (PARENT_ID = the comment it answers). Replies go one level deep.
-- Deleting a comment deletes its replies with it (ON DELETE CASCADE).
--
-- The limits are the ones the server and the site check (GuestbookService.java, src/guestbook/rules.ts):
-- src/guestbook/schema.test.ts fails if they drift apart.

CREATE TABLE GUESTBOOK (
    ID             NUMBER GENERATED ALWAYS AS IDENTITY,                  -- counts up, so a bigger ID is a newer entry
    PARENT_ID      NUMBER,                                               -- the comment this one answers; empty for a comment
    AUTHOR         VARCHAR2(12 CHAR)        NOT NULL,                    -- the name the writer gave (letters, digits, _ - and spaces)
    PASSWORD_HASH  VARCHAR2(200)            NOT NULL,                    -- salted PBKDF2 of the delete password, never the password itself
    BODY           VARCHAR2(300 CHAR)       NOT NULL,                    -- the text, Markdown allowed, 1 to 300 characters
    CREATED_AT     TIMESTAMP WITH TIME ZONE DEFAULT SYSTIMESTAMP NOT NULL, -- when the server received it
    CLIENT_IP      VARCHAR2(64)             NOT NULL,                    -- the writer's address (never shown on the site)
    USER_AGENT     VARCHAR2(300),                                        -- the writer's browser, as it names itself (never shown)
    CONSTRAINT PK_GUESTBOOK PRIMARY KEY (ID),
    CONSTRAINT FK_GUESTBOOK_PARENT FOREIGN KEY (PARENT_ID) REFERENCES GUESTBOOK (ID) ON DELETE CASCADE,
    CONSTRAINT CK_GUESTBOOK_BODY CHECK (LENGTH(BODY) BETWEEN 1 AND 300)
);

-- "The replies to one comment".
CREATE INDEX IX_GUESTBOOK_PARENT ON GUESTBOOK (PARENT_ID, ID);
