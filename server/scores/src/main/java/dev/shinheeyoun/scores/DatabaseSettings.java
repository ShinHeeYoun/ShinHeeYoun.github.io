package dev.shinheeyoun.scores;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Properties;

/**
 * How to reach the database: read from a file that lives on the server only (not in this repository, which is public):
 *
 *   jdbc.url=jdbc:oracle:thin:@(description=...)
 *   jdbc.user=...
 *   jdbc.password=...
 *
 * The same file is meant for every feature of the site that uses the database. Nothing read from it is ever written to
 * a log or an answer.
 */
record DatabaseSettings(String url, String user, String password) {
    static DatabaseSettings load(Path file) throws IOException {
        Properties properties = new Properties();
        try (InputStream in = Files.newInputStream(file)) {
            properties.load(in);
        }
        String url = properties.getProperty("jdbc.url", "").trim();
        String user = properties.getProperty("jdbc.user", "").trim();
        String password = properties.getProperty("jdbc.password", "");
        if (!url.startsWith("jdbc:oracle:")) throw new IOException("jdbc.url must be an Oracle JDBC address");
        if (user.isEmpty()) throw new IOException("jdbc.user is missing");
        if (password.isEmpty()) throw new IOException("jdbc.password is missing");
        return new DatabaseSettings(url, user, password);
    }
}
