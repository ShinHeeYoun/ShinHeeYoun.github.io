package dev.shinheeyoun.scores;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Carries a request into the service that handles it (ScoreService for /yacht..., GuestbookService for /guestbook...)
 * and its answer back out. All the decisions are made in the services.
 */
public final class ScoresServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Response answer;
        ScoreService scores = (ScoreService) getServletContext().getAttribute(ScoresContext.SCORES);
        GuestbookService guestbook = (GuestbookService) getServletContext().getAttribute(ScoresContext.GUESTBOOK);
        if (scores == null || guestbook == null) {
            answer = new Response(503, "{\"error\":\"the service is not running\"}", Map.of("Cache-Control", "no-store"));
        } else {
            String method = request.getMethod();
            String path = request.getPathInfo();
            // Read one byte more than allowed, so that a body that is too large can be told from one that just fits.
            byte[] body =
                    method.equals("POST") ? request.getInputStream().readNBytes(ScoreService.MAX_BODY_BYTES + 1) : new byte[0];
            if (path != null && (path.equals("/guestbook") || path.startsWith("/guestbook/"))) {
                answer = guestbook.handle(
                        method,
                        path,
                        request.getQueryString(),
                        request.getContentType(),
                        body,
                        clientAddress(request),
                        request.getHeader("Authorization"),
                        request.getHeader("User-Agent"));
            } else {
                answer = scores.handle(
                        method, path, request.getQueryString(), request.getContentType(), body, clientAddress(request));
            }
        }

        response.setStatus(answer.status());
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("X-Content-Type-Options", "nosniff");
        for (Map.Entry<String, String> header : answer.headers().entrySet()) {
            response.setHeader(header.getKey(), header.getValue());
        }
        byte[] bytes = answer.body().getBytes(StandardCharsets.UTF_8);
        response.setContentLength(bytes.length);
        response.getOutputStream().write(bytes);
    }

    // nginx sets X-Forwarded-For to the address it saw (and nothing else), so the last entry is the visitor. Without
    // nginx, the address of whoever connected is used.
    private static String clientAddress(HttpServletRequest request) {
        String forwarded = request.getHeader("X-Forwarded-For");
        String address = forwarded == null ? "" : forwarded.substring(forwarded.lastIndexOf(',') + 1).trim();
        if (address.isEmpty()) address = request.getRemoteAddr();
        return address.length() > 64 ? address.substring(0, 64) : address;
    }
}
