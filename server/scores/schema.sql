-- Table for the finished games of Yacht Dice, for Oracle Database 12c or later (IS JSON needs 12c).
-- Not connected to the site yet. See README.md in this folder.
--
-- The numbers in the CHECK constraints are the limits of the game (src/tools/yacht/controller.ts):
--   323 = the best possible total, 105 = the best possible total of the upper section, 35 = the upper bonus.
-- src/tools/yacht/schema.test.ts fails if these drift away from the code.

CREATE TABLE YACHT_SCORE (
    ID          VARCHAR2(64)             NOT NULL,   -- chosen by the browser, so that sending a game twice saves it once
    PLAYED_AT   TIMESTAMP WITH TIME ZONE NOT NULL,   -- when the player finished, as the browser reports it
    TOTAL       NUMBER(3)                NOT NULL,   -- the final score, bonus included
    UPPER_SUM   NUMBER(3)                NOT NULL,   -- Aces to Sixes added up
    BONUS       NUMBER(2)                NOT NULL,   -- 35 when UPPER_SUM is 63 or more, else 0
    TURNS_JSON  CLOB                     NOT NULL,   -- the 12 turns: [{"dice":[..5 faces..],"category":".."}, ...]
    CREATED_AT  TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,   -- when the server saved it
    CONSTRAINT PK_YACHT_SCORE PRIMARY KEY (ID),
    CONSTRAINT CK_YACHT_TOTAL CHECK (TOTAL BETWEEN 0 AND 323),
    CONSTRAINT CK_YACHT_UPPER_SUM CHECK (UPPER_SUM BETWEEN 0 AND 105),
    CONSTRAINT CK_YACHT_BONUS CHECK (BONUS IN (0, 35)),
    CONSTRAINT CK_YACHT_TURNS_JSON CHECK (TURNS_JSON IS JSON)
);

-- "Top scores": highest first, the newest first among equal scores.
CREATE INDEX IX_YACHT_SCORE_RANK ON YACHT_SCORE (TOTAL DESC, PLAYED_AT DESC);

-- "Recent games".
CREATE INDEX IX_YACHT_SCORE_RECENT ON YACHT_SCORE (PLAYED_AT DESC);
