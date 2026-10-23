package dev.shinheeyoun.scores;

import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * Lets each address do something only so many times in a time window, counted over the window just passed (not in
 * fixed hours), so that waiting for the hour to change gives no advantage.
 */
final class RateLimiter {
    private static final int PRUNE_AT = 5000; // how many addresses are remembered before the old ones are cleared out

    private final int limit;
    private final long windowMillis;
    private final Map<String, ArrayDeque<Long>> times = new HashMap<>();

    RateLimiter(int limit, long windowMillis) {
        this.limit = limit;
        this.windowMillis = windowMillis;
    }

    /** Counts one more attempt by this key. False when it has used up its attempts in the last window. */
    synchronized boolean tryAcquire(String key, long nowMillis) {
        if (times.size() >= PRUNE_AT) prune(nowMillis);
        ArrayDeque<Long> own = times.computeIfAbsent(key, k -> new ArrayDeque<>());
        while (!own.isEmpty() && nowMillis - own.peekFirst() >= windowMillis) own.pollFirst();
        if (own.size() >= limit) return false;
        own.addLast(nowMillis);
        return true;
    }

    /** Seconds until this key may try again (0 if it may now). */
    synchronized long secondsUntilFree(String key, long nowMillis) {
        ArrayDeque<Long> own = times.get(key);
        if (own == null || own.size() < limit) return 0;
        long free = own.peekFirst() + windowMillis - nowMillis;
        return free <= 0 ? 0 : (free + 999) / 1000;
    }

    /** How many addresses are remembered right now (for tests). */
    synchronized int remembered() {
        return times.size();
    }

    private void prune(long nowMillis) {
        Iterator<Map.Entry<String, ArrayDeque<Long>>> entries = times.entrySet().iterator();
        while (entries.hasNext()) {
            ArrayDeque<Long> own = entries.next().getValue();
            while (!own.isEmpty() && nowMillis - own.peekFirst() >= windowMillis) own.pollFirst();
            if (own.isEmpty()) entries.remove();
        }
    }
}
