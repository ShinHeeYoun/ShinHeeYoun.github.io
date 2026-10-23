package dev.shinheeyoun.scores;

import java.sql.SQLException;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

/** Where the guestbook is kept. The service only knows this interface, so it can be tried without a database. */
interface GuestbookRepository {
    /** A comment (parentId null) or a reply (parentId = the comment it answers), checked and ready to be kept. */
    record NewEntry(
            Long parentId,
            String author,
            String passwordHash,
            String body,
            Instant createdAt,
            String clientIp,
            String userAgent) {}

    /** What is shown. Never includes the password or the writer's address. */
    record Entry(long id, Long parentId, String author, String body, Instant createdAt, int replyCount) {}

    /** Keeps the entry. Empty when it answers a comment that does not exist (any more). */
    Optional<Entry> add(NewEntry entry) throws SQLException;

    /** Comments (not replies) with an id below beforeId, newest first. */
    List<Entry> comments(long beforeId, int limit) throws SQLException;

    /** The replies to one comment, oldest first. */
    List<Entry> replies(long parentId, int limit) throws SQLException;

    /** The stored password hash of an entry, or empty if there is no such entry. */
    Optional<String> passwordHash(long id) throws SQLException;

    /** Deletes the entry and, with it, every reply to it. False if there was none. */
    boolean delete(long id) throws SQLException;
}
