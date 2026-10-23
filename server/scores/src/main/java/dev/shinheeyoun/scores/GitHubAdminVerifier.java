package dev.shinheeyoun.scores;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Duration;
import java.util.HashMap;
import java.util.HexFormat;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.LongSupplier;

/**
 * The site's admin is whoever holds a GitHub token that may push to the site's repository (the admin login on the
 * site checks the same thing). The server asks GitHub the same question with the token it is given. It never keeps the
 * token: a yes is remembered for a few minutes under a SHA-256 of the token, only to spare GitHub repeated questions.
 */
final class GitHubAdminVerifier implements AdminVerifier {
    /** What GitHub said about a token. */
    record Answer(int status, String body) {}

    /** Asks GitHub about the repository with this token. Replaced in tests. */
    interface Asker {
        Answer ask(String token) throws IOException, InterruptedException;
    }

    static final String REPO_URL = "https://api.github.com/repos/ShinHeeYoun/ShinHeeYoun.github.io";
    static final long REMEMBER_MILLIS = Duration.ofMinutes(5).toMillis();
    private static final int MAX_TOKEN_LENGTH = 255;

    private final Asker asker;
    private final LongSupplier clock;
    private final Consumer<String> log;
    private final Map<String, Long> yesUntil = new HashMap<>();

    GitHubAdminVerifier(Asker asker, LongSupplier clock, Consumer<String> log) {
        this.asker = asker;
        this.clock = clock;
        this.log = log;
    }

    /** The real thing: asks api.github.com. */
    static Asker github() {
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build();
        return token -> {
            HttpRequest request = HttpRequest.newBuilder(URI.create(REPO_URL))
                    .timeout(Duration.ofSeconds(8))
                    .header("Authorization", "Bearer " + token)
                    .header("Accept", "application/vnd.github+json")
                    .header("User-Agent", "shinheeyoun-scores")
                    .GET()
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString(StandardCharsets.UTF_8));
            return new Answer(response.statusCode(), response.body());
        };
    }

    @Override
    public boolean isAdmin(String token) {
        if (token == null || token.isEmpty() || token.length() > MAX_TOKEN_LENGTH || !printableAscii(token)) return false;
        String key = fingerprint(token);
        long now = clock.getAsLong();
        synchronized (yesUntil) {
            Long until = yesUntil.get(key);
            if (until != null && until > now) return true;
            if (until != null) yesUntil.remove(key);
        }

        boolean admin;
        try {
            admin = mayPush(asker.ask(token));
        } catch (IOException | RuntimeException e) {
            log.accept("admin check: GitHub could not be asked: " + e.getClass().getSimpleName());
            return false;
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return false;
        }
        if (admin) {
            synchronized (yesUntil) {
                if (yesUntil.size() > 100) yesUntil.values().removeIf(until -> until <= now);
                yesUntil.put(key, now + REMEMBER_MILLIS);
            }
        }
        return admin;
    }

    // GitHub reports a token that may push as "permissions": {"push": true}. A token that is merely real (anyone can
    // read a public repository) gets false, and an unknown token gets 401.
    private static boolean mayPush(Answer answer) {
        if (answer.status() != 200) return false;
        try {
            return Json.parse(answer.body()) instanceof Map<?, ?> repo
                    && repo.get("permissions") instanceof Map<?, ?> permissions
                    && Boolean.TRUE.equals(permissions.get("push"));
        } catch (Json.JsonException e) {
            return false;
        }
    }

    private static boolean printableAscii(String text) {
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            if (c < 0x21 || c > 0x7e) return false;
        }
        return true;
    }

    private static String fingerprint(String token) {
        try {
            return HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(token.getBytes(StandardCharsets.UTF_8)));
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException(e);
        }
    }
}
