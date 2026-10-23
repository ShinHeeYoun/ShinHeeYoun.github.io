package dev.shinheeyoun.scores;

import java.util.LinkedHashMap;
import java.util.Map;

/** The answer to a request: a status, a JSON body, and headers. Built with the helpers below. */
record Response(int status, String body, Map<String, String> headers) {
    static Response json(int status, String body, String cacheControl) {
        Map<String, String> headers = new LinkedHashMap<>();
        headers.put("Cache-Control", cacheControl);
        return new Response(status, body, headers);
    }

    static Response error(int status, String message) {
        return json(status, "{\"error\":" + Json.quote(message) + "}", "no-store");
    }

    static Response notAllowed(String allowed) {
        return error(405, "method not allowed").with("Allow", allowed);
    }

    /** 429, saying how long to wait. */
    static Response tooMany(RateLimiter limiter, String key, long nowMillis) {
        return error(429, "too many requests: try again later")
                .with("Retry-After", String.valueOf(Math.max(1, limiter.secondsUntilFree(key, nowMillis))));
    }

    Response with(String name, String value) {
        Map<String, String> more = new LinkedHashMap<>(headers);
        more.put(name, value);
        return new Response(status, body, more);
    }
}
