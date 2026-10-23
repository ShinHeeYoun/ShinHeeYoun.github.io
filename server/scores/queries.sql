-- The SQL the score server runs. Every value is a bind variable (:name), never pasted into the text,
-- so that nothing a player sends can change what the statement does.

-- Save a finished game (after the server has checked it, see README.md). A game sent twice has the same ID, so the
-- second insert fails on the primary key; the server answers 200 and does nothing, instead of saving it again.
INSERT INTO YACHT_SCORE (ID, PLAYED_AT, TOTAL, UPPER_SUM, BONUS, TURNS_JSON)
VALUES (:id, TO_TIMESTAMP_TZ(:played_at, 'YYYY-MM-DD"T"HH24:MI:SS.FF3TZR'), :total, :upper_sum, :bonus, :turns_json);

-- Top scores. :limit is a whole number the server has already limited to 1..100.
SELECT ID, PLAYED_AT, TOTAL, UPPER_SUM, BONUS
  FROM YACHT_SCORE
 ORDER BY TOTAL DESC, PLAYED_AT DESC
 FETCH FIRST :limit ROWS ONLY;

-- Most recent games.
SELECT ID, PLAYED_AT, TOTAL, UPPER_SUM, BONUS
  FROM YACHT_SCORE
 ORDER BY PLAYED_AT DESC
 FETCH FIRST :limit ROWS ONLY;
