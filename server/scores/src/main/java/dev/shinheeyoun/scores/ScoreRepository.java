package dev.shinheeyoun.scores;

import java.sql.SQLException;
import java.time.Instant;
import java.util.List;

/** Where the scores are kept. The service only knows this interface, so it can be tried without a database. */
interface ScoreRepository {
    enum SaveOutcome {
        CREATED,
        DUPLICATE
    }

    /** A game that has been checked and is ready to be kept. */
    record Submission(
            String id, Instant playedAt, int total, int upperSum, int bonus, String turnsJson, String nickname) {}

    /** One line of a list: a game without its turns. */
    record Row(String id, Instant playedAt, int total, int upperSum, int bonus, String nickname) {}

    /** Keeps the game, or reports that a game with this id is already kept (and keeps nothing more). */
    SaveOutcome save(Submission submission) throws SQLException;

    /** The highest scores first, and the newest first among equal scores. */
    List<Row> top(int limit) throws SQLException;

    /** The newest games first. */
    List<Row> recent(int limit) throws SQLException;
}
