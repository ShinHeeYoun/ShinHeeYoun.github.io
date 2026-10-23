package dev.shinheeyoun.scores;

import java.sql.SQLException;
import java.util.List;

/**
 * Opens the connection pool the first time a request needs the database, not when the app starts. So the app starts
 * even if the database is down or its settings are missing, answers 503 until it can reach it, and then simply works
 * (a failed opening is not remembered).
 */
final class LazyRepository implements ScoreRepository, AutoCloseable {
    /** Builds the pool. Only reads the settings and loads the driver; the first real connection comes later. */
    interface Opener {
        ConnectionPool open() throws SQLException;
    }

    private final Opener opener;
    private ConnectionPool pool;
    private OracleScoreRepository repository;

    LazyRepository(Opener opener) {
        this.opener = opener;
    }

    private synchronized ScoreRepository get() throws SQLException {
        if (repository == null) {
            pool = opener.open();
            repository = new OracleScoreRepository(pool);
        }
        return repository;
    }

    @Override
    public SaveOutcome save(Submission submission) throws SQLException {
        return get().save(submission);
    }

    @Override
    public List<Row> top(int limit) throws SQLException {
        return get().top(limit);
    }

    @Override
    public List<Row> recent(int limit) throws SQLException {
        return get().recent(limit);
    }

    @Override
    public synchronized void close() {
        if (pool != null) pool.close();
    }
}
