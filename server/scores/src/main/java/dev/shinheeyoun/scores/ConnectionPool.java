package dev.shinheeyoun.scores;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * A few database connections kept open and lent out one request at a time. Connecting to the cloud database takes
 * over a second, so a new connection for every request would be far too slow.
 *
 * The connection that is lent is a stand-in: closing it does not close the real one but gives it back, so the usual
 * try-with-resources works. A connection that has gone bad while waiting is thrown away and replaced.
 */
final class ConnectionPool implements AutoCloseable {
    /** Opens a new real connection. */
    interface Factory {
        Connection open() throws SQLException;
    }

    private final Factory factory;
    private final int max;
    private final long waitMillis;
    private final ArrayBlockingQueue<Connection> idle;
    private final AtomicInteger total = new AtomicInteger(); // real connections that exist, idle or lent
    private volatile boolean closed;

    ConnectionPool(Factory factory, int max, long waitMillis) {
        if (max < 1) throw new IllegalArgumentException("the pool needs room for at least one connection");
        this.factory = factory;
        this.max = max;
        this.waitMillis = waitMillis;
        this.idle = new ArrayBlockingQueue<>(max);
    }

    Connection borrow() throws SQLException {
        long deadline = System.nanoTime() + TimeUnit.MILLISECONDS.toNanos(waitMillis);
        while (true) {
            if (closed) throw new SQLException("the connection pool is closed");

            Connection real = idle.poll();
            if (real != null) {
                if (usable(real)) return lend(real);
                discard(real);
                continue;
            }

            if (reserveSlot()) {
                try {
                    return lend(factory.open());
                } catch (SQLException | RuntimeException e) {
                    total.decrementAndGet();
                    throw e;
                }
            }

            long left = deadline - System.nanoTime();
            if (left <= 0) throw new SQLException("no database connection became free in time");
            try {
                real = idle.poll(left, TimeUnit.NANOSECONDS);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                throw new SQLException("interrupted while waiting for a database connection");
            }
            if (real != null) {
                if (usable(real)) return lend(real);
                discard(real);
            }
        }
    }

    /** Closes the connections that are idle now; lent ones are closed when they come back. */
    @Override
    public void close() {
        closed = true;
        Connection real;
        while ((real = idle.poll()) != null) discard(real);
    }

    private boolean reserveSlot() {
        int now;
        do {
            now = total.get();
            if (now >= max) return false;
        } while (!total.compareAndSet(now, now + 1));
        return true;
    }

    private static boolean usable(Connection real) {
        try {
            return !real.isClosed() && real.isValid(2);
        } catch (SQLException e) {
            return false;
        }
    }

    private void discard(Connection real) {
        try {
            real.close();
        } catch (SQLException e) {
            // it is being thrown away anyway
        }
        total.decrementAndGet();
    }

    private void giveBack(Connection real) {
        if (closed) {
            discard(real);
            return;
        }
        try {
            if (!real.getAutoCommit()) {
                real.rollback();
                real.setAutoCommit(true);
            }
        } catch (SQLException e) {
            discard(real);
            return;
        }
        if (!idle.offer(real)) discard(real);
    }

    private Connection lend(Connection real) {
        return (Connection) Proxy.newProxyInstance(
                Connection.class.getClassLoader(), new Class<?>[] {Connection.class}, new Lent(real));
    }

    private final class Lent implements InvocationHandler {
        private final Connection real;
        private boolean returned;

        Lent(Connection real) {
            this.real = real;
        }

        @Override
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            switch (method.getName()) {
                case "close":
                    synchronized (this) {
                        if (!returned) {
                            returned = true;
                            giveBack(real);
                        }
                    }
                    return null;
                case "isClosed":
                    return returned || real.isClosed();
                case "hashCode":
                    return System.identityHashCode(proxy);
                case "equals":
                    return proxy == args[0];
                case "toString":
                    return "lent connection";
                default:
                    synchronized (this) {
                        if (returned) throw new SQLException("this connection was already given back");
                    }
                    try {
                        return method.invoke(real, args);
                    } catch (InvocationTargetException e) {
                        throw e.getCause();
                    }
            }
        }
    }
}
