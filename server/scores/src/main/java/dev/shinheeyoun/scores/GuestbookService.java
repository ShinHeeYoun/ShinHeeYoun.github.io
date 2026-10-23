package dev.shinheeyoun.scores;

import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.time.Clock;
import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;

/**
 * Everything the guestbook does with a request, with no servlet and no database in it (like ScoreService).
 *
 * Requests (all under /api, JSON):
 *   GET  /guestbook                   comments, newest first   ?limit=1..50 (default 20) &amp;before=ID (the next page)
 *   POST /guestbook                   write a comment, or a reply when "parentId" is given
 *   GET  /guestbook/{id}/replies      the replies to a comment, oldest first
 *   POST /guestbook/{id}/delete       delete with {"password": "..."}, or with the admin's GitHub token as
 *                                     "Authorization: Bearer ..." (no password needed)
 *
 * Replies go one level deep: a reply answers a comment, never another reply.
 */
final class GuestbookService {
    static final int MAX_BODY_BYTES = 4 * 1024;
    static final int MAX_TEXT = 300; // characters (code points) in a comment
    static final int MIN_PASSWORD = 4;
    static final int MAX_PASSWORD = 32;
    static final int DEFAULT_PAGE = 20;
    static final int MAX_PAGE = 50;
    static final int MAX_REPLIES = 200;
    static final int MAX_USER_AGENT = 300;

    // Per address: writes, and delete attempts. Per comment: password attempts, so a password cannot be guessed.
    static final int WRITES_PER_WINDOW = 5;
    static final long WRITE_WINDOW_MILLIS = Duration.ofMinutes(10).toMillis();
    static final int DELETES_PER_WINDOW = 30;
    static final long DELETE_WINDOW_MILLIS = Duration.ofMinutes(10).toMillis();
    static final int GUESSES_PER_ENTRY = 10;
    static final long GUESS_WINDOW_MILLIS = Duration.ofHours(1).toMillis();

    private final GuestbookRepository repository;
    private final AdminVerifier admins;
    private final RateLimiter writes;
    private final RateLimiter deletes;
    private final RateLimiter guesses;
    private final Clock clock;
    private final Consumer<String> log;

    GuestbookService(GuestbookRepository repository, AdminVerifier admins, Clock clock, Consumer<String> log) {
        this.repository = repository;
        this.admins = admins;
        this.writes = new RateLimiter(WRITES_PER_WINDOW, WRITE_WINDOW_MILLIS);
        this.deletes = new RateLimiter(DELETES_PER_WINDOW, DELETE_WINDOW_MILLIS);
        this.guesses = new RateLimiter(GUESSES_PER_ENTRY, GUESS_WINDOW_MILLIS);
        this.clock = clock;
        this.log = log;
    }

    Response handle(
            String method,
            String path,
            String query,
            String contentType,
            byte[] body,
            String client,
            String authorization,
            String userAgent) {
        String route = path == null ? "" : path.endsWith("/") ? path.substring(0, path.length() - 1) : path;
        if (route.equals("/guestbook")) {
            if (method.equals("GET")) return list(query);
            if (method.equals("POST")) return write(contentType, body, client, userAgent);
            return Response.notAllowed("GET, POST");
        }
        String[] parts = route.split("/", -1); // "", "guestbook", id, action
        if (parts.length == 4 && parts[1].equals("guestbook") && parseId(parts[2]) != null) {
            long id = parseId(parts[2]);
            if (parts[3].equals("replies")) return method.equals("GET") ? replies(id) : Response.notAllowed("GET");
            if (parts[3].equals("delete")) {
                return method.equals("POST") ? delete(id, contentType, body, client, authorization) : Response.notAllowed("POST");
            }
        }
        return Response.error(404, "not found");
    }

    // --- Writing ---

    private Response write(String contentType, byte[] body, String client, String userAgent) {
        long now = clock.millis();
        // Every attempt counts, good or bad.
        if (!writes.tryAcquire(client, now)) return Response.tooMany(writes, client, now);
        Response refused = checkBody(contentType, body);
        if (refused != null) return refused;

        Map<?, ?> request = parseObject(body);
        if (request == null) return Response.error(400, "the request must be a JSON object");

        String author = request.get("author") instanceof String text ? Nickname.normalize(text) : null;
        if (author == null) return Response.error(400, "invalid author");

        String password = request.get("password") instanceof String text ? text : null;
        if (!validPassword(password)) return Response.error(400, "invalid password");

        String text = request.get("body") instanceof String raw ? cleanText(raw) : null;
        if (text == null) return Response.error(400, "invalid body");

        Long parentId = null;
        if (request.containsKey("parentId") && request.get("parentId") != null) {
            if (!(request.get("parentId") instanceof Long id) || id < 1) return Response.error(400, "invalid parentId");
            parentId = id;
        }

        GuestbookRepository.NewEntry entry = new GuestbookRepository.NewEntry(
                parentId,
                author,
                PasswordHasher.hash(password),
                text,
                clock.instant().truncatedTo(ChronoUnit.MILLIS),
                client,
                cleanUserAgent(userAgent));
        try {
            Optional<GuestbookRepository.Entry> saved = repository.add(entry);
            if (saved.isEmpty()) return Response.error(404, "there is no such comment to answer");
            return Response.json(201, entryJson(saved.get()), "no-store");
        } catch (SQLException | RuntimeException e) {
            return unavailable("write", e);
        }
    }

    // --- Reading ---

    private Response list(String query) {
        int limit = (int) readNumber(query, "limit", DEFAULT_PAGE, 1, MAX_PAGE);
        long before = readNumber(query, "before", Long.MAX_VALUE, 1, Long.MAX_VALUE);
        try {
            List<GuestbookRepository.Entry> rows = repository.comments(before, limit + 1); // one more tells if there is a next page
            boolean more = rows.size() > limit;
            List<GuestbookRepository.Entry> page = more ? rows.subList(0, limit) : rows;
            return Response.json(200, "{\"comments\":" + entriesJson(page) + ",\"hasMore\":" + more + "}", "no-store");
        } catch (SQLException | RuntimeException e) {
            return unavailable("list", e);
        }
    }

    private Response replies(long parentId) {
        try {
            return Response.json(200, "{\"replies\":" + entriesJson(repository.replies(parentId, MAX_REPLIES)) + "}", "no-store");
        } catch (SQLException | RuntimeException e) {
            return unavailable("replies", e);
        }
    }

    // --- Deleting ---

    private Response delete(long id, String contentType, byte[] body, String client, String authorization) {
        long now = clock.millis();
        if (!deletes.tryAcquire(client, now)) return Response.tooMany(deletes, client, now);
        Response refused = checkBody(contentType, body);
        if (refused != null) return refused;
        Map<?, ?> request = parseObject(body);
        if (request == null) return Response.error(400, "the request must be a JSON object");

        boolean bearer = authorization != null && authorization.regionMatches(true, 0, "Bearer ", 0, 7);
        if (bearer && admins.isAdmin(authorization.substring(7).trim())) {
            try {
                return repository.delete(id) ? deleted() : Response.error(404, "there is no such comment");
            } catch (SQLException | RuntimeException e) {
                return unavailable("delete", e);
            }
        }

        String password = request.get("password") instanceof String text ? text : null;
        if (password == null || password.isEmpty()) {
            return bearer ? Response.error(403, "this login is not the admin's") : Response.error(400, "the password is needed");
        }
        // Only so many guesses at one comment's password, whoever makes them.
        String key = "entry:" + id;
        if (!guesses.tryAcquire(key, now)) return Response.tooMany(guesses, key, now);

        try {
            Optional<String> stored = repository.passwordHash(id);
            if (stored.isEmpty()) return Response.error(404, "there is no such comment");
            if (!PasswordHasher.matches(stored.get(), password)) return Response.error(403, "wrong password");
            return repository.delete(id) ? deleted() : Response.error(404, "there is no such comment");
        } catch (SQLException | RuntimeException e) {
            return unavailable("delete", e);
        }
    }

    private static Response deleted() {
        return Response.json(200, "{\"status\":\"deleted\"}", "no-store");
    }

    // --- Checking what was sent ---

    private static Response checkBody(String contentType, byte[] body) {
        if (body.length > MAX_BODY_BYTES) return Response.error(413, "the request is too large");
        if (contentType == null || !contentType.toLowerCase().startsWith("application/json")) {
            return Response.error(415, "send application/json");
        }
        return null;
    }

    private static Map<?, ?> parseObject(byte[] body) {
        try {
            return Json.parse(new String(body, StandardCharsets.UTF_8)) instanceof Map<?, ?> map ? map : null;
        } catch (Json.JsonException e) {
            return null;
        }
    }

    private static boolean validPassword(String password) {
        if (password == null) return false;
        int length = password.codePointCount(0, password.length());
        return length >= MIN_PASSWORD && length <= MAX_PASSWORD && !hasProblemCharacters(password, false);
    }

    /**
     * The comment as it will be kept: line ends made "\n", and no blank space at either end. Null if it is empty, longer
     * than 300 characters, or holds a character that cannot be shown (a control character other than a line break or a
     * tab, or half of a surrogate pair).
     */
    static String cleanText(String raw) {
        String text = raw.replace("\r\n", "\n").replace('\r', '\n').strip();
        if (text.isEmpty() || text.codePointCount(0, text.length()) > MAX_TEXT) return null;
        return hasProblemCharacters(text, true) ? null : text;
    }

    private static boolean hasProblemCharacters(String text, boolean allowLineBreaks) {
        for (int i = 0; i < text.length(); ) {
            int c = text.codePointAt(i);
            boolean control = c < 0x20 || (c >= 0x7f && c <= 0x9f);
            boolean allowed = allowLineBreaks && (c == '\n' || c == '\t');
            if ((control && !allowed) || (c >= 0xD800 && c <= 0xDFFF)) return true;
            i += Character.charCount(c);
        }
        return false;
    }

    /** The browser's name for itself, kept to find out what a writer used: no control characters, at most 300. */
    static String cleanUserAgent(String userAgent) {
        if (userAgent == null) return null;
        StringBuilder out = new StringBuilder();
        for (int i = 0; i < userAgent.length() && out.codePointCount(0, out.length()) < MAX_USER_AGENT; ) {
            int c = userAgent.codePointAt(i);
            if (c >= 0x20 && c != 0x7f && !(c >= 0xD800 && c <= 0xDFFF)) out.appendCodePoint(c);
            i += Character.charCount(c);
        }
        String result = out.toString().strip();
        return result.isEmpty() ? null : result;
    }

    private static Long parseId(String text) {
        if (text.isEmpty() || text.length() > 18) return null;
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) < '0' || text.charAt(i) > '9') return null;
        }
        long id = Long.parseLong(text);
        return id >= 1 ? id : null;
    }

    private static long readNumber(String query, String name, long fallback, long min, long max) {
        if (query == null) return fallback;
        for (String pair : query.split("&")) {
            if (!pair.startsWith(name + "=")) continue;
            Long value = parseId(pair.substring(name.length() + 1));
            return value != null && value >= min && value <= max ? value : fallback;
        }
        return fallback;
    }

    // --- Answers ---

    private static String entriesJson(List<GuestbookRepository.Entry> entries) {
        StringBuilder out = new StringBuilder("[");
        for (int i = 0; i < entries.size(); i++) {
            if (i > 0) out.append(',');
            out.append(entryJson(entries.get(i)));
        }
        return out.append(']').toString();
    }

    private static String entryJson(GuestbookRepository.Entry entry) {
        StringBuilder out = new StringBuilder("{\"id\":").append(entry.id());
        if (entry.parentId() != null) out.append(",\"parentId\":").append(entry.parentId());
        return out.append(",\"author\":").append(Json.quote(entry.author()))
                .append(",\"body\":").append(Json.quote(entry.body()))
                .append(",\"createdAt\":").append(Json.quote(entry.createdAt().toString()))
                .append(",\"replyCount\":").append(entry.replyCount())
                .append('}')
                .toString();
    }

    private Response unavailable(String what, Exception e) {
        log.accept("guestbook: " + what + " failed: " + e);
        return e instanceof SQLException
                ? Response.error(503, "the database is not available")
                : Response.error(500, "internal error");
    }
}
