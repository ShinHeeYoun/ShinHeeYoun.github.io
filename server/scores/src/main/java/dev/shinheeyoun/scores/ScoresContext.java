package dev.shinheeyoun.scores;

import java.io.IOException;
import java.nio.file.Path;
import java.sql.Connection;
import java.sql.Driver;
import java.sql.SQLException;
import java.time.Clock;
import java.util.Properties;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/** Sets the services up when the app starts and closes the database connections when it stops. */
public final class ScoresContext implements ServletContextListener {
    static final String SCORES = "dev.shinheeyoun.scores.service";
    static final String GUESTBOOK = "dev.shinheeyoun.scores.guestbook";
    private static final String DEFAULT_SETTINGS = "/opt/tomcat/conf/homepage-db.properties";
    private static final int POOL_SIZE = 4;
    private static final long POOL_WAIT_MILLIS = 5000;

    private LazyPool pool;

    @Override
    public void contextInitialized(ServletContextEvent event) {
        ServletContext context = event.getServletContext();
        Path settings = Path.of(System.getProperty("homepage.db.config", DEFAULT_SETTINGS));
        ClassLoader loader = context.getClassLoader();
        Clock clock = Clock.systemUTC();

        // One pool, opened when the first request needs it, shared by everything in this app.
        pool = new LazyPool(() -> openPool(settings, loader));
        context.setAttribute(
                SCORES,
                new ScoreService(
                        new OracleScoreRepository(pool),
                        new RateLimiter(ScoreService.SAVES_PER_WINDOW, ScoreService.WINDOW_MILLIS),
                        clock,
                        context::log));
        context.setAttribute(
                GUESTBOOK,
                new GuestbookService(
                        new OracleGuestbookRepository(pool),
                        new GitHubAdminVerifier(GitHubAdminVerifier.github(), clock::millis, context::log),
                        clock,
                        context::log));
    }

    @Override
    public void contextDestroyed(ServletContextEvent event) {
        event.getServletContext().removeAttribute(SCORES);
        event.getServletContext().removeAttribute(GUESTBOOK);
        if (pool != null) pool.close();
    }

    private static ConnectionPool openPool(Path settingsFile, ClassLoader loader) throws SQLException {
        DatabaseSettings settings;
        try {
            settings = DatabaseSettings.load(settingsFile);
        } catch (IOException e) {
            // The message names what is wrong with the file, never what is in it.
            throw new SQLException("the database settings cannot be used: " + e.getMessage());
        }

        Driver driver;
        try {
            // The driver is inside this app (WEB-INF/lib), so it is loaded by this app's class loader, and used directly
            // rather than through DriverManager, which is shared by every app in Tomcat.
            driver = (Driver) Class.forName("oracle.jdbc.OracleDriver", true, loader).getDeclaredConstructor().newInstance();
        } catch (ReflectiveOperationException | ClassCastException e) {
            throw new SQLException("the Oracle JDBC driver is not available");
        }

        Properties connection = new Properties();
        connection.setProperty("user", settings.user());
        connection.setProperty("password", settings.password());
        connection.setProperty("oracle.net.CONNECT_TIMEOUT", "10000");
        connection.setProperty("oracle.jdbc.ReadTimeout", "15000");
        return new ConnectionPool(
                () -> {
                    Connection opened = driver.connect(settings.url(), connection);
                    if (opened == null) throw new SQLException("the driver did not accept the database address");
                    return opened;
                },
                POOL_SIZE,
                POOL_WAIT_MILLIS);
    }
}
