-- The SQL the score server runs (OracleScoreRepository.java). Every value is a bind variable, never pasted into the
-- text, so that nothing a player sends can change what the statement does. The Java code uses ? where this file
-- writes :name; the statements are otherwise the same.

-- Save a finished game (after the server has checked it, see README.md). A game sent twice has the same ID, so the
-- second insert fails on the primary key (ORA-00001); the server answers 200 and does nothing, instead of saving it again.
INSERT INTO YACHT_SCORE (ID, PLAYED_AT, TOTAL, UPPER_SUM, BONUS, TURNS_JSON, NICKNAME)
VALUES (:id, :played_at, :total, :upper_sum, :bonus, :turns_json, :nickname);

-- Top scores. :limit is a whole number the server has already limited to 1..100.
SELECT ID, PLAYED_AT, TOTAL, UPPER_SUM, BONUS, NICKNAME
  FROM YACHT_SCORE
 ORDER BY TOTAL DESC, PLAYED_AT DESC
 FETCH FIRST :limit ROWS ONLY;

-- Most recent games.
SELECT ID, PLAYED_AT, TOTAL, UPPER_SUM, BONUS, NICKNAME
  FROM YACHT_SCORE
 ORDER BY PLAYED_AT DESC
 FETCH FIRST :limit ROWS ONLY;
