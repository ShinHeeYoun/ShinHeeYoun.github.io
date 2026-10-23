package dev.shinheeyoun.scores;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Carries a request into ScoreService and its answer back out. All the decisions are made in ScoreService. */
public final class ScoresServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        ScoreService.Response answer;
        ScoreService service = (ScoreService) getServletContext().getAttribute(ScoresContext.SERVICE);
        if (service == null) {
            answer = new ScoreService.Response(503, "{\"error\":\"the score service is not running\"}", Map.of("Cache-Control", "no-store"));
        } else {
            String method = request.getMethod();
            // Read one byte more than allowed, so that a body that is too large can be told from one that just fits.
            byte[] body =
                    method.equals("POST") ? request.getInputStream().readNBytes(ScoreService.MAX_BODY_BYTES + 1) : new byte[0];
            answer = service.handle(
                    method,
                    request.getPathInfo(),
                    request.getQueryString(),
                    request.getContentType(),
                    body,
                    clientAddress(request));
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
