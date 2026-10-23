package dev.shinheeyoun.scores;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

/** Keeps the scores in the YACHT_SCORE table (server/scores/schema.sql). The SQL is in queries.sql too. */
final class OracleScoreRepository implements ScoreRepository {
    /** Oracle's error for a value that is already in a column that must be unique: here, a game saved twice. */
    private static final int UNIQUE_VIOLATION = 1;

    private static final String INSERT =
            "INSERT INTO YACHT_SCORE (ID, PLAYED_AT, TOTAL, UPPER_SUM, BONUS, TURNS_JSON, NICKNAME) VALUES (?, ?, ?, ?, ?, ?, ?)";
    private static final String TOP =
            "SELECT ID, PLAYED_AT, TOTAL, UPPER_SUM, BONUS, NICKNAME FROM YACHT_SCORE"
                    + " ORDER BY TOTAL DESC, PLAYED_AT DESC FETCH FIRST ? ROWS ONLY";
    private static final String RECENT =
            "SELECT ID, PLAYED_AT, TOTAL, UPPER_SUM, BONUS, NICKNAME FROM YACHT_SCORE"
                    + " ORDER BY PLAYED_AT DESC FETCH FIRST ? ROWS ONLY";

    private final ConnectionPool pool;

    OracleScoreRepository(ConnectionPool pool) {
        this.pool = pool;
    }

    @Override
    public SaveOutcome save(Submission game) throws SQLException {
        try (Connection connection = pool.borrow();
                PreparedStatement statement = connection.prepareStatement(INSERT)) {
            statement.setString(1, game.id());
            statement.setObject(2, game.playedAt().atOffset(java.time.ZoneOffset.UTC));
            statement.setInt(3, game.total());
            statement.setInt(4, game.upperSum());
            statement.setInt(5, game.bonus());
            statement.setString(6, game.turnsJson());
            statement.setString(7, game.nickname());
            statement.executeUpdate();
            return SaveOutcome.CREATED;
        } catch (SQLException e) {
            if (e.getErrorCode() == UNIQUE_VIOLATION) return SaveOutcome.DUPLICATE;
            throw e;
        }
    }

    @Override
    public List<Row> top(int limit) throws SQLException {
        return list(TOP, limit);
    }

    @Override
    public List<Row> recent(int limit) throws SQLException {
        return list(RECENT, limit);
    }

    private List<Row> list(String sql, int limit) throws SQLException {
        try (Connection connection = pool.borrow();
                PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, limit);
            try (ResultSet rows = statement.executeQuery()) {
                List<Row> result = new ArrayList<>();
                while (rows.next()) {
                    OffsetDateTime playedAt = rows.getObject("PLAYED_AT", OffsetDateTime.class);
                    result.add(new Row(
                            rows.getString("ID"),
                            playedAt.toInstant(),
                            rows.getInt("TOTAL"),
                            rows.getInt("UPPER_SUM"),
                            rows.getInt("BONUS"),
                            rows.getString("NICKNAME")));
                }
                return result;
            }
        }
    }
}
