package dev.shinheeyoun.scores;

import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.format.DateTimeParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.regex.Pattern;

/**
 * Everything the score server does with a request, with no servlet and no database in it: it is given the method,
 * the path and the body, and gives back a status, headers and a body. ScoresServlet only carries the request in and
 * the answer out, so all of this can be tried without Tomcat (see src/test).
 *
 * Requests (all under /api, JSON):
 *   POST /yacht          save a finished game      201 saved, 200 saved before, 400, 413, 415, 429, 503
 *   GET  /yacht/top      highest scores            ?limit=1..100 (anything else: 10)
 *   GET  /yacht/recent   newest games              ?limit=1..100 (anything else: 10)
 */
final class ScoreService {
    static final int MAX_BODY_BYTES = 16 * 1024;
    static final int DEFAULT_LIMIT = 10;
    static final int MAX_LIMIT = 100;
    static final int SAVES_PER_WINDOW = 10;
    static final long WINDOW_MILLIS = Duration.ofHours(1).toMillis();
    static final long CACHE_MILLIS = 5000;

    private static final Pattern ID = Pattern.compile("[A-Za-z0-9-]{1,64}");
    private static final Duration FUTURE_ALLOWED = Duration.ofMinutes(5); // clocks differ a little
    private static final Duration MAX_AGE = Duration.ofDays(7);

    private record Cached(long expiresAt, String body) {}

    private final ScoreRepository repository;
    private final RateLimiter limiter;
    private final Clock clock;
    private final Consumer<String> log;
    private final Map<String, Cached> cache = new HashMap<>();

    ScoreService(ScoreRepository repository, RateLimiter limiter, Clock clock, Consumer<String> log) {
        this.repository = repository;
        this.limiter = limiter;
        this.clock = clock;
        this.log = log;
    }

    Response handle(String method, String path, String query, String contentType, byte[] body, String client) {
        String route = path == null ? "" : path.endsWith("/") ? path.substring(0, path.length() - 1) : path;
        switch (route) {
            case "/yacht":
                return method.equals("POST") ? save(contentType, body, client) : notAllowed("POST");
            case "/yacht/top":
                return method.equals("GET") ? list("top", query) : notAllowed("GET");
            case "/yacht/recent":
                return method.equals("GET") ? list("recent", query) : notAllowed("GET");
            default:
                return error(404, "not found");
        }
    }

    // --- Saving a game ---

    private Response save(String contentType, byte[] body, String client) {
        long now = clock.millis();
        // Every attempt counts, good or bad, so that guessing does not cost nothing.
        if (!limiter.tryAcquire(client, now)) {
            return Response.tooMany(limiter, client, now);
        }
        if (body.length > MAX_BODY_BYTES) return error(413, "the request is too large");
        if (contentType == null || !contentType.toLowerCase().startsWith("application/json")) {
            return error(415, "send application/json");
        }

        Object parsed;
        try {
            parsed = Json.parse(new String(body, StandardCharsets.UTF_8));
        } catch (Json.JsonException e) {
            return error(400, "the request is not valid JSON");
        }
        if (!(parsed instanceof Map<?, ?> map)) return error(400, "the request must be a JSON object");

        if (!(map.get("id") instanceof String id) || !ID.matcher(id).matches()) return error(400, "invalid id");

        Instant playedAt;
        try {
            playedAt = map.get("playedAt") instanceof String text ? OffsetDateTime.parse(text).toInstant() : null;
        } catch (DateTimeParseException e) {
            playedAt = null;
        }
        if (playedAt == null) return error(400, "invalid playedAt");
        Instant current = Instant.ofEpochMilli(now);
        if (playedAt.isAfter(current.plus(FUTURE_ALLOWED))) return error(400, "playedAt is in the future");
        if (playedAt.isBefore(current.minus(MAX_AGE))) return error(400, "playedAt is too old");

        String nickname = map.get("nickname") instanceof String text ? Nickname.normalize(text) : null;
        if (nickname == null) return error(400, "invalid nickname");

        YachtRules.Verdict verdict = YachtRules.verify(map);
        if (!verdict.valid()) return error(400, "not a real game: " + verdict.reason());

        ScoreRepository.Submission submission = new ScoreRepository.Submission(
                id,
                playedAt,
                verdict.total(),
                verdict.upperSum(),
                verdict.bonus(),
                YachtRules.turnsJson(verdict.turns()),
                nickname);
        try {
            ScoreRepository.SaveOutcome outcome = repository.save(submission);
            if (outcome == ScoreRepository.SaveOutcome.CREATED) {
                synchronized (cache) {
                    cache.clear(); // the lists have changed
                }
                return json(201, "{\"status\":\"saved\"}", "no-store");
            }
            return json(200, "{\"status\":\"duplicate\"}", "no-store");
        } catch (SQLException | RuntimeException e) {
            return unavailable("save", e);
        }
    }

    // --- Lists ---

    private Response list(String which, String query) {
        int limit = readLimit(query);
        String key = which + ":" + limit;
        long now = clock.millis();
        synchronized (cache) {
            Cached hit = cache.get(key);
            if (hit != null && hit.expiresAt() > now) return json(200, hit.body(), "public, max-age=5");
        }
        try {
            List<ScoreRepository.Row> rows = which.equals("top") ? repository.top(limit) : repository.recent(limit);
            String body = rowsJson(rows);
            synchronized (cache) {
                cache.put(key, new Cached(now + CACHE_MILLIS, body));
            }
            return json(200, body, "public, max-age=5");
        } catch (SQLException | RuntimeException e) {
            return unavailable(which, e);
        }
    }

    private static int readLimit(String query) {
        if (query == null) return DEFAULT_LIMIT;
        for (String pair : query.split("&")) {
            if (!pair.startsWith("limit=")) continue;
            String value = pair.substring("limit=".length());
            if (value.length() < 1 || value.length() > 3) return DEFAULT_LIMIT;
            for (int i = 0; i < value.length(); i++) {
                if (value.charAt(i) < '0' || value.charAt(i) > '9') return DEFAULT_LIMIT;
            }
            int limit = Integer.parseInt(value);
            return limit >= 1 && limit <= MAX_LIMIT ? limit : DEFAULT_LIMIT;
        }
        return DEFAULT_LIMIT;
    }

    private static String rowsJson(List<ScoreRepository.Row> rows) {
        StringBuilder out = new StringBuilder("[");
        for (int i = 0; i < rows.size(); i++) {
            if (i > 0) out.append(',');
            ScoreRepository.Row row = rows.get(i);
            out.append("{\"id\":").append(Json.quote(row.id()))
                    .append(",\"playedAt\":").append(Json.quote(row.playedAt().toString()))
                    .append(",\"total\":").append(row.total())
                    .append(",\"upperSum\":").append(row.upperSum())
                    .append(",\"bonus\":").append(row.bonus());
            if (row.nickname() != null) out.append(",\"nickname\":").append(Json.quote(row.nickname()));
            out.append('}');
        }
        return out.append(']').toString();
    }

    // --- Answers ---

    private static Response json(int status, String body, String cacheControl) {
        return Response.json(status, body, cacheControl);
    }

    private static Response error(int status, String message) {
        return Response.error(status, message);
    }

    private static Response notAllowed(String allowed) {
        return Response.notAllowed(allowed);
    }

    private Response unavailable(String what, Exception e) {
        log.accept("score server: " + what + " failed: " + e);
        return e instanceof SQLException
                ? error(503, "the database is not available")
                : error(500, "internal error");
    }
}
