package dev.shinheeyoun.scores;

import java.sql.Connection;
import java.sql.SQLException;

/**
 * Opens the connection pool the first time a request needs the database, not when the app starts. So the app starts
 * even if the database is down or its settings are missing, answers 503 until it can reach it, and then simply works
 * (a failed opening is not remembered). Every feature of the app shares this one pool.
 */
final class LazyPool implements Connections, AutoCloseable {
    /** Builds the pool. Only reads the settings and loads the driver; the first real connection comes later. */
    interface Opener {
        ConnectionPool open() throws SQLException;
    }

    private final Opener opener;
    private ConnectionPool pool;

    LazyPool(Opener opener) {
        this.opener = opener;
    }

    @Override
    public Connection borrow() throws SQLException {
        ConnectionPool open;
        synchronized (this) {
            if (pool == null) pool = opener.open();
            open = pool;
        }
        return open.borrow();
    }

    @Override
    public synchronized void close() {
        if (pool != null) pool.close();
    }
}
