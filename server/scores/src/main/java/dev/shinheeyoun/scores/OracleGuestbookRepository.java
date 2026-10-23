package dev.shinheeyoun.scores;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Keeps the guestbook in the GUESTBOOK table (server/scores/guestbook-schema.sql). Every statement below is a constant
 * and every value reaches it as a bind variable (?), never joined into the text, so nothing a visitor writes can change
 * what a statement does.
 */
final class OracleGuestbookRepository implements GuestbookRepository {
    private static final int PARENT_MISSING = 2291; // ORA-02291: integrity constraint violated, parent key not found

    private static final String INSERT =
            "INSERT INTO GUESTBOOK (PARENT_ID, AUTHOR, PASSWORD_HASH, BODY, CREATED_AT, CLIENT_IP, USER_AGENT)"
                    + " VALUES (?, ?, ?, ?, ?, ?, ?)";
    private static final String PARENT_EXISTS = "SELECT 1 FROM GUESTBOOK WHERE ID = ? AND PARENT_ID IS NULL";
    private static final String COMMENTS =
            "SELECT g.ID, g.AUTHOR, g.BODY, g.CREATED_AT,"
                    + " (SELECT COUNT(*) FROM GUESTBOOK r WHERE r.PARENT_ID = g.ID) AS REPLY_COUNT"
                    + " FROM GUESTBOOK g WHERE g.PARENT_ID IS NULL AND g.ID < ?"
                    + " ORDER BY g.ID DESC FETCH FIRST ? ROWS ONLY";
    private static final String REPLIES =
            "SELECT ID, AUTHOR, BODY, CREATED_AT FROM GUESTBOOK WHERE PARENT_ID = ?"
                    + " ORDER BY ID ASC FETCH FIRST ? ROWS ONLY";
    private static final String PASSWORD_HASH = "SELECT PASSWORD_HASH FROM GUESTBOOK WHERE ID = ?";
    private static final String DELETE = "DELETE FROM GUESTBOOK WHERE ID = ?";

    private final Connections pool;

    OracleGuestbookRepository(Connections pool) {
        this.pool = pool;
    }

    @Override
    public Optional<Entry> add(NewEntry entry) throws SQLException {
        try (Connection connection = pool.borrow()) {
            if (entry.parentId() != null) {
                try (PreparedStatement check = connection.prepareStatement(PARENT_EXISTS)) {
                    check.setLong(1, entry.parentId());
                    try (ResultSet found = check.executeQuery()) {
                        if (!found.next()) return Optional.empty();
                    }
                }
            }
            try (PreparedStatement insert = connection.prepareStatement(INSERT, new String[] {"ID"})) {
                if (entry.parentId() == null) insert.setNull(1, Types.NUMERIC);
                else insert.setLong(1, entry.parentId());
                insert.setString(2, entry.author());
                insert.setString(3, entry.passwordHash());
                insert.setString(4, entry.body());
                insert.setObject(5, entry.createdAt().atOffset(ZoneOffset.UTC));
                insert.setString(6, entry.clientIp());
                if (entry.userAgent() == null) insert.setNull(7, Types.VARCHAR);
                else insert.setString(7, entry.userAgent());
                insert.executeUpdate();
                try (ResultSet keys = insert.getGeneratedKeys()) {
                    if (!keys.next()) throw new SQLException("the database did not say which id the comment got");
                    return Optional.of(new Entry(
                            keys.getLong(1), entry.parentId(), entry.author(), entry.body(), entry.createdAt(), 0));
                }
            }
        } catch (SQLException e) {
            // The comment answered was deleted between the check and the insert.
            if (e.getErrorCode() == PARENT_MISSING) return Optional.empty();
            throw e;
        }
    }

    @Override
    public List<Entry> comments(long beforeId, int limit) throws SQLException {
        try (Connection connection = pool.borrow();
                PreparedStatement statement = connection.prepareStatement(COMMENTS)) {
            statement.setLong(1, beforeId);
            statement.setInt(2, limit);
            try (ResultSet rows = statement.executeQuery()) {
                List<Entry> result = new ArrayList<>();
                while (rows.next()) {
                    result.add(new Entry(
                            rows.getLong("ID"),
                            null,
                            rows.getString("AUTHOR"),
                            rows.getString("BODY"),
                            rows.getObject("CREATED_AT", OffsetDateTime.class).toInstant(),
                            rows.getInt("REPLY_COUNT")));
                }
                return result;
            }
        }
    }

    @Override
    public List<Entry> replies(long parentId, int limit) throws SQLException {
        try (Connection connection = pool.borrow();
                PreparedStatement statement = connection.prepareStatement(REPLIES)) {
            statement.setLong(1, parentId);
            statement.setInt(2, limit);
            try (ResultSet rows = statement.executeQuery()) {
                List<Entry> result = new ArrayList<>();
                while (rows.next()) {
                    result.add(new Entry(
                            rows.getLong("ID"),
                            parentId,
                            rows.getString("AUTHOR"),
                            rows.getString("BODY"),
                            rows.getObject("CREATED_AT", OffsetDateTime.class).toInstant(),
                            0));
                }
                return result;
            }
        }
    }

    @Override
    public Optional<String> passwordHash(long id) throws SQLException {
        try (Connection connection = pool.borrow();
                PreparedStatement statement = connection.prepareStatement(PASSWORD_HASH)) {
            statement.setLong(1, id);
            try (ResultSet row = statement.executeQuery()) {
                return row.next() ? Optional.of(row.getString(1)) : Optional.empty();
            }
        }
    }

    @Override
    public boolean delete(long id) throws SQLException {
        try (Connection connection = pool.borrow();
                PreparedStatement statement = connection.prepareStatement(DELETE)) {
            statement.setLong(1, id);
            return statement.executeUpdate() > 0;
        }
    }
}
