package dev.shinheeyoun.status;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** GET /status/api returns the current numbers as JSON. Only GET and HEAD are served. */
public final class StatusServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final long CACHE_MILLIS = 2000;

    private String cached;
    private long cachedAt;

    // Computed at most once every 2 seconds, so a flood of requests cannot make the server work harder.
    private synchronized String json() {
        long now = System.currentTimeMillis();
        if (cached == null || now - cachedAt > CACHE_MILLIS) {
            cached = Metrics.toJson(getServletContext().getServerInfo());
            cachedAt = now;
        }
        return cached;
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        byte[] body = json().getBytes(StandardCharsets.UTF_8);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Cache-Control", "public, max-age=2");
        response.setHeader("X-Content-Type-Options", "nosniff");
        response.setContentLength(body.length);
        response.getOutputStream().write(body);
    }
}
