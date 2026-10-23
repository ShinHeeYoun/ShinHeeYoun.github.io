package dev.shinheeyoun.scores;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.Connection;
import java.sql.SQLException;
import java.time.Clock;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;

/**
 * The tests of the score server, with no test library: run by build.ps1, which stops if any of them fails.
 * They need neither a database nor Tomcat. The shared cases in server/scores/fixtures are read from the folder given
 * as the first argument.
 */
public final class Tests {
    private static int passed;
    private static int failed;

    // A backslash, made from its number, so that this file never contains the two-character escape for a Unicode letter.
    private static final String BS = String.valueOf((char) 92);

    interface Check {
        void run() throws Exception;
    }

    static void test(String name, Check check) {
        try {
            check.run();
            passed++;
        } catch (Throwable t) {
            failed++;
            System.out.println("FAIL: " + name + " -> " + t);
        }
    }

    static void eq(Object expected, Object actual) {
        if (!Objects.equals(expected, actual)) throw new AssertionError("expected <" + expected + "> but was <" + actual + ">");
    }

    static void yes(boolean condition, String message) {
        if (!condition) throw new AssertionError(message);
    }

    static void fails(Class<? extends Throwable> type, Check check) {
        try {
            check.run();
        } catch (Throwable t) {
            if (type.isInstance(t)) return;
            throw new AssertionError("expected " + type.getSimpleName() + " but got " + t);
        }
        throw new AssertionError("expected " + type.getSimpleName() + " but nothing was thrown");
    }

    public static void main(String[] args) throws Exception {
        Path fixtures = Path.of(args[0]);
        jsonTests();
        rulesTests();
        nicknameTests(fixtures);
        recordFixtureTests(fixtures);
        poolTests();
        limiterTests();
        serviceTests(fixtures);
        System.out.println(passed + " passed, " + failed + " failed");
        if (failed > 0) System.exit(1);
    }

    // ---------------------------------------------------------------- Json

    static void jsonTests() {
        test("json: reads objects, lists, strings, numbers and words", () -> {
            Object value = Json.parse(" {\"a\": [1, 2.5, \"x\", true, false, null], \"b\": {}} ");
            Map<?, ?> map = (Map<?, ?>) value;
            List<?> list = (List<?>) map.get("a");
            eq(1L, list.get(0));
            eq(2.5, list.get(1));
            eq("x", list.get(2));
            eq(true, list.get(3));
            eq(false, list.get(4));
            eq(null, list.get(5));
            yes(map.containsKey("b") && ((Map<?, ?>) map.get("b")).isEmpty(), "empty object");
        });

        test("json: a number with no fraction is a Long, as a browser would see it", () -> {
            eq(41L, Json.parse("41"));
            eq(41L, Json.parse("41.0"));
            eq(41L, Json.parse("4.1e1"));
            eq(-3L, Json.parse("-3"));
            eq(0L, Json.parse("0"));
            eq(Long.MAX_VALUE, Json.parse("9223372036854775807"));
            eq(2.5, Json.parse("2.5"));
            yes(Json.parse("9223372036854775808") instanceof Double, "too big for a Long");
        });

        test("json: reads the escapes of a string", () -> {
            eq("a\nb", Json.parse("\"a" + BS + "nb\""));
            eq("q\"q", Json.parse("\"q" + BS + "\"q\""));
            eq("b" + BS + "s", Json.parse("\"b" + BS + BS + "s\""));
            eq("/", Json.parse("\"" + BS + "/\""));
            eq(String.valueOf((char) 0xD55C), Json.parse("\"" + BS + "ud55c\""));
            eq(new String(Character.toChars(0x20000)), Json.parse("\"" + BS + "ud840" + BS + "udc00\""));
            eq(String.valueOf((char) 0xD800), Json.parse("\"" + BS + "ud800\"")); // a lone surrogate is let through, as in a browser
        });

        test("json: the last of two equal keys wins", () -> eq(2L, ((Map<?, ?>) Json.parse("{\"a\":1,\"a\":2}")).get("a")));

        test("json: refuses text that is not JSON", () -> {
            String[] bad = {
                "", " ", "{", "}", "[1,]", "[,1]", "{\"a\":1,}", "{'a':1}", "{a:1}", "{\"a\" 1}", "{\"a\":}", "[01]", "[1.]", "[.5]",
                "[+1]", "[1e]", "-", "NaN", "Infinity", "[1] x", "\"unterminated", "\"tab\there\"", "nul", "tru", "[1 2]",
                "\"" + BS + "x\"", "\"" + BS + "u12\"", "\"" + BS + "u12zz\"", "[1]]", "0x10"
            };
            for (String text : bad) {
                try {
                    Json.parse(text);
                    throw new AssertionError("accepted: " + text);
                } catch (Json.JsonException expected) {
                    // refused, as it should be
                }
            }
        });

        test("json: refuses text nested too deeply, and numbers that are too long", () -> {
            fails(Json.JsonException.class, () -> Json.parse("[".repeat(100) + "]".repeat(100)));
            yes(Json.parse("[".repeat(30) + "]".repeat(30)) instanceof List, "30 levels are fine");
            fails(Json.JsonException.class, () -> Json.parse("1" + "0".repeat(40)));
        });

        test("json: quote escapes what must be escaped and turns control characters into spaces", () -> {
            eq("\"plain\"", Json.quote("plain"));
            eq("\"a" + BS + "\"b\"", Json.quote("a\"b"));
            eq("\"a" + BS + BS + "b\"", Json.quote("a" + BS + "b"));
            eq("\"a b c\"", Json.quote("a\nb\tc"));
            eq("\"" + (char) 0xD55C + "\"", Json.quote(String.valueOf((char) 0xD55C)));
        });
    }

    // ---------------------------------------------------------------- Rules

    static int[] dice(int... faces) {
        return faces;
    }

    static void rulesTests() {
        test("rules: the number categories add up the dice that show the number", () -> {
            eq(3, YachtRules.score(YachtRules.Category.ACES, dice(1, 1, 2, 3, 1)));
            eq(6, YachtRules.score(YachtRules.Category.DEUCES, dice(2, 2, 5, 6, 2)));
            eq(6, YachtRules.score(YachtRules.Category.THREES, dice(3, 1, 3, 4, 5)));
            eq(20, YachtRules.score(YachtRules.Category.FOURS, dice(4, 4, 4, 4, 4)));
            eq(5, YachtRules.score(YachtRules.Category.FIVES, dice(5, 1, 2, 3, 4)));
            eq(18, YachtRules.score(YachtRules.Category.SIXES, dice(6, 6, 1, 1, 6)));
            eq(0, YachtRules.score(YachtRules.Category.ACES, dice(2, 3, 4, 5, 6)));
        });

        test("rules: choice, four of a kind, full house", () -> {
            eq(15, YachtRules.score(YachtRules.Category.CHOICE, dice(1, 2, 3, 4, 5)));
            eq(17, YachtRules.score(YachtRules.Category.FOUR_OF_A_KIND, dice(3, 3, 3, 3, 5)));
            eq(15, YachtRules.score(YachtRules.Category.FOUR_OF_A_KIND, dice(3, 3, 3, 3, 3)));
            eq(0, YachtRules.score(YachtRules.Category.FOUR_OF_A_KIND, dice(3, 3, 3, 5, 5)));
            eq(13, YachtRules.score(YachtRules.Category.FULL_HOUSE, dice(2, 2, 3, 3, 3)));
            eq(28, YachtRules.score(YachtRules.Category.FULL_HOUSE, dice(6, 5, 6, 5, 6)));
            eq(0, YachtRules.score(YachtRules.Category.FULL_HOUSE, dice(4, 4, 4, 4, 4)));
            eq(0, YachtRules.score(YachtRules.Category.FULL_HOUSE, dice(4, 4, 4, 4, 2)));
            eq(0, YachtRules.score(YachtRules.Category.FULL_HOUSE, dice(1, 1, 2, 2, 3)));
        });

        test("rules: straights and yacht", () -> {
            eq(15, YachtRules.score(YachtRules.Category.SMALL_STRAIGHT, dice(1, 2, 3, 4, 6)));
            eq(15, YachtRules.score(YachtRules.Category.SMALL_STRAIGHT, dice(2, 3, 4, 5, 5)));
            eq(15, YachtRules.score(YachtRules.Category.SMALL_STRAIGHT, dice(6, 3, 5, 4, 1)));
            eq(15, YachtRules.score(YachtRules.Category.SMALL_STRAIGHT, dice(1, 2, 3, 4, 5)));
            eq(0, YachtRules.score(YachtRules.Category.SMALL_STRAIGHT, dice(1, 2, 3, 5, 6)));
            eq(0, YachtRules.score(YachtRules.Category.SMALL_STRAIGHT, dice(2, 3, 4, 6, 6)));
            eq(30, YachtRules.score(YachtRules.Category.LARGE_STRAIGHT, dice(1, 2, 3, 4, 5)));
            eq(30, YachtRules.score(YachtRules.Category.LARGE_STRAIGHT, dice(6, 5, 4, 3, 2)));
            eq(0, YachtRules.score(YachtRules.Category.LARGE_STRAIGHT, dice(1, 2, 3, 4, 6)));
            eq(0, YachtRules.score(YachtRules.Category.LARGE_STRAIGHT, dice(2, 3, 4, 5, 5)));
            eq(50, YachtRules.score(YachtRules.Category.YACHT, dice(5, 5, 5, 5, 5)));
            eq(0, YachtRules.score(YachtRules.Category.YACHT, dice(5, 5, 5, 5, 4)));
        });

        test("rules: agrees with the counts of all 7776 possible throws", () -> {
            int yacht = 0;
            int fullHouse = 0;
            int largeStraight = 0;
            int fourOfAKind = 0;
            for (int n = 0; n < 7776; n++) {
                int[] throwOfDice = new int[5];
                int rest = n;
                for (int i = 0; i < 5; i++) {
                    throwOfDice[i] = rest % 6 + 1;
                    rest /= 6;
                }
                for (YachtRules.Category category : YachtRules.Category.values()) {
                    int points = YachtRules.score(category, throwOfDice);
                    yes(points >= 0 && points <= 50, "points out of range");
                }
                if (YachtRules.score(YachtRules.Category.YACHT, throwOfDice) > 0) yacht++;
                if (YachtRules.score(YachtRules.Category.FULL_HOUSE, throwOfDice) > 0) fullHouse++;
                if (YachtRules.score(YachtRules.Category.LARGE_STRAIGHT, throwOfDice) > 0) largeStraight++;
                if (YachtRules.score(YachtRules.Category.FOUR_OF_A_KIND, throwOfDice) > 0) fourOfAKind++;
            }
            eq(6, yacht);
            eq(300, fullHouse);
            eq(240, largeStraight);
            eq(156, fourOfAKind);
        });

        test("rules: refuses dice that are not five faces from 1 to 6", () -> {
            fails(IllegalArgumentException.class, () -> YachtRules.score(YachtRules.Category.CHOICE, dice(1, 2, 3, 4)));
            fails(IllegalArgumentException.class, () -> YachtRules.score(YachtRules.Category.CHOICE, dice(0, 1, 2, 3, 4)));
            fails(IllegalArgumentException.class, () -> YachtRules.score(YachtRules.Category.CHOICE, dice(1, 2, 3, 4, 7)));
        });

        test("rules: the upper bonus starts at 63", () -> {
            eq(0, YachtRules.upperBonus(62));
            eq(35, YachtRules.upperBonus(63));
            eq(35, YachtRules.upperBonus(105));
        });

        test("rules: category names are the ones the site uses", () -> {
            String[] names = {"aces", "deuces", "threes", "fours", "fives", "sixes", "choice", "fourOfAKind", "fullHouse", "smallStraight", "largeStraight", "yacht"};
            eq(names.length, YachtRules.Category.values().length);
            for (int i = 0; i < names.length; i++) eq(YachtRules.Category.values()[i], YachtRules.Category.byId(names[i]));
            eq(null, YachtRules.Category.byId("ACES"));
            eq(null, YachtRules.Category.byId("bonus"));
            eq(null, YachtRules.Category.byId(null));
        });
    }

    // ---------------------------------------------------------------- Shared cases

    static Object readJson(Path file) throws Exception {
        return Json.parse(Files.readString(file, StandardCharsets.UTF_8));
    }

    static void nicknameTests(Path fixtures) {
        test("nickname: gives the answers the site's tests expect (fixtures/nicknames.json)", () -> {
            List<?> cases = (List<?>) readJson(fixtures.resolve("nicknames.json"));
            yes(cases.size() >= 30, "the shared cases were read");
            List<String> mismatches = new ArrayList<>();
            for (Object item : cases) {
                Map<?, ?> one = (Map<?, ?>) item;
                String actual = Nickname.normalize((String) one.get("input"));
                if (!Objects.equals(one.get("expected"), actual)) mismatches.add(one.get("note") + ": expected <" + one.get("expected") + "> got <" + actual + ">");
            }
            yes(mismatches.isEmpty(), "differences from the site: " + mismatches);
        });

        test("nickname: tidying a tidy name changes nothing, and null is refused", () -> {
            eq("Kim Lee", Nickname.normalize("Kim Lee"));
            eq(null, Nickname.normalize(null));
        });
    }

    static void recordFixtureTests(Path fixtures) {
        test("records: gives the same answer as the site for every shared case (fixtures/records.json)", () -> {
            List<?> cases = (List<?>) readJson(fixtures.resolve("records.json"));
            int valid = 0;
            int invalid = 0;
            List<String> mismatches = new ArrayList<>();
            for (Object item : cases) {
                Map<?, ?> one = (Map<?, ?>) item;
                boolean expected = (Boolean) one.get("valid");
                YachtRules.Verdict verdict = YachtRules.verify(one.get("record"));
                if (expected) valid++;
                else invalid++;
                if (verdict.valid() != expected) mismatches.add(one.get("name") + ": site says " + expected + ", server says " + verdict.valid() + " (" + verdict.reason() + ")");
                if (expected) {
                    // For a real game the numbers worked out here are the ones in the record.
                    Map<?, ?> record = (Map<?, ?>) one.get("record");
                    if (!Objects.equals(record.get("total"), (long) verdict.total())) mismatches.add(one.get("name") + ": total differs");
                    if (!Objects.equals(record.get("upperSum"), (long) verdict.upperSum())) mismatches.add(one.get("name") + ": upperSum differs");
                    if (!Objects.equals(record.get("bonus"), (long) verdict.bonus())) mismatches.add(one.get("name") + ": bonus differs");
                }
            }
            yes(valid >= 30 && invalid >= 40, "enough cases were read: " + valid + " valid, " + invalid + " invalid");
            yes(mismatches.isEmpty(), "differences from the site: " + mismatches);
        });

        test("records: the turns are kept as the server read them, in order", () -> {
            List<?> cases = (List<?>) readJson(fixtures.resolve("records.json"));
            for (Object item : cases) {
                Map<?, ?> one = (Map<?, ?>) item;
                if (!(Boolean) one.get("valid")) continue;
                YachtRules.Verdict verdict = YachtRules.verify(one.get("record"));
                Object again = Json.parse(YachtRules.turnsJson(verdict.turns()));
                List<?> original = (List<?>) ((Map<?, ?>) one.get("record")).get("turns");
                eq(original.size(), ((List<?>) again).size());
                for (int i = 0; i < original.size(); i++) {
                    Map<?, ?> was = (Map<?, ?>) original.get(i);
                    Map<?, ?> now = (Map<?, ?>) ((List<?>) again).get(i);
                    eq(was.get("dice"), now.get("dice"));
                    eq(was.get("category"), now.get("category"));
                }
                return; // one real game is enough for this check
            }
        });
    }

    // ---------------------------------------------------------------- Connection pool

    /** A stand-in for a database connection, with just the parts the pool uses. */
    static final class FakeConnection implements InvocationHandler {
        boolean closed;
        boolean valid = true;
        boolean autoCommit = true;
        int rollbacks;

        Connection proxy() {
            return (Connection) Proxy.newProxyInstance(Connection.class.getClassLoader(), new Class<?>[] {Connection.class}, this);
        }

        @Override
        public Object invoke(Object proxy, Method method, Object[] args) {
            switch (method.getName()) {
                case "isClosed":
                    return closed;
                case "close":
                    closed = true;
                    return null;
                case "isValid":
                    return valid && !closed;
                case "getAutoCommit":
                    return autoCommit;
                case "setAutoCommit":
                    autoCommit = (Boolean) args[0];
                    return null;
                case "rollback":
                    rollbacks++;
                    return null;
                case "hashCode":
                    return System.identityHashCode(proxy);
                case "equals":
                    return proxy == args[0];
                case "toString":
                    return "fake connection";
                default:
                    throw new UnsupportedOperationException(method.getName());
            }
        }
    }

    static final class FakeDatabase {
        final List<FakeConnection> all = new ArrayList<>();
        int failures; // the next openings that fail

        Connection open() throws SQLException {
            if (failures > 0) {
                failures--;
                throw new SQLException("cannot connect");
            }
            FakeConnection connection = new FakeConnection();
            all.add(connection);
            return connection.proxy();
        }
    }

    static void poolTests() {
        test("pool: reuses a connection that was given back", () -> {
            FakeDatabase db = new FakeDatabase();
            try (ConnectionPool pool = new ConnectionPool(db::open, 2, 100)) {
                pool.borrow().close();
                pool.borrow().close();
                eq(1, db.all.size());
            }
        });

        test("pool: opens up to its limit, then makes the next one wait, and gives up in time", () -> {
            FakeDatabase db = new FakeDatabase();
            try (ConnectionPool pool = new ConnectionPool(db::open, 2, 50)) {
                Connection a = pool.borrow();
                Connection b = pool.borrow();
                eq(2, db.all.size());
                fails(SQLException.class, pool::borrow);
                a.close();
                Connection c = pool.borrow();
                eq(2, db.all.size());
                b.close();
                c.close();
            }
        });

        test("pool: a waiting request gets the connection that is given back", () -> {
            FakeDatabase db = new FakeDatabase();
            try (ConnectionPool pool = new ConnectionPool(db::open, 1, 2000)) {
                Connection first = pool.borrow();
                AtomicReference<Throwable> problem = new AtomicReference<>();
                Thread waiting = new Thread(() -> {
                    try {
                        pool.borrow().close();
                    } catch (Throwable t) {
                        problem.set(t);
                    }
                });
                waiting.start();
                Thread.sleep(80);
                first.close();
                waiting.join(3000);
                yes(!waiting.isAlive(), "the waiting request finished");
                yes(problem.get() == null, "the waiting request got a connection: " + problem.get());
                eq(1, db.all.size());
            }
        });

        test("pool: a connection that went bad while idle is replaced", () -> {
            FakeDatabase db = new FakeDatabase();
            try (ConnectionPool pool = new ConnectionPool(db::open, 2, 100)) {
                pool.borrow().close();
                db.all.get(0).valid = false;
                pool.borrow().close();
                eq(2, db.all.size());
                yes(db.all.get(0).closed, "the bad connection was closed");
            }
        });

        test("pool: a connection cannot be used after it was given back", () -> {
            FakeDatabase db = new FakeDatabase();
            try (ConnectionPool pool = new ConnectionPool(db::open, 1, 100)) {
                Connection c = pool.borrow();
                c.close();
                yes(c.isClosed(), "reported as closed");
                fails(SQLException.class, () -> c.getAutoCommit());
                c.close(); // closing twice is harmless
                pool.borrow().close();
                eq(1, db.all.size());
            }
        });

        test("pool: a connection given back in the middle of a transaction is rolled back first", () -> {
            FakeDatabase db = new FakeDatabase();
            try (ConnectionPool pool = new ConnectionPool(db::open, 1, 100)) {
                Connection c = pool.borrow();
                c.setAutoCommit(false);
                c.close();
                eq(1, db.all.get(0).rollbacks);
                yes(db.all.get(0).autoCommit, "auto-commit is back on");
            }
        });

        test("pool: closing it closes idle connections, refuses new requests, and closes lent ones when they return", () -> {
            FakeDatabase db = new FakeDatabase();
            ConnectionPool pool = new ConnectionPool(db::open, 2, 100);
            Connection idle = pool.borrow();
            Connection lent = pool.borrow();
            idle.close();
            pool.close();
            yes(db.all.get(0).closed, "the idle connection was closed");
            yes(!db.all.get(1).closed, "the lent connection is still in use");
            fails(SQLException.class, pool::borrow);
            lent.close();
            yes(db.all.get(1).closed, "the lent connection was closed when it came back");
        });

        test("pool: a failed opening does not use up a place", () -> {
            FakeDatabase db = new FakeDatabase();
            db.failures = 2;
            try (ConnectionPool pool = new ConnectionPool(db::open, 1, 100)) {
                fails(SQLException.class, pool::borrow);
                fails(SQLException.class, pool::borrow);
                pool.borrow().close();
                eq(1, db.all.size());
            }
        });
    }

    // ---------------------------------------------------------------- Rate limiter

    static void limiterTests() {
        test("limiter: allows so many attempts and then refuses", () -> {
            RateLimiter limiter = new RateLimiter(3, 1000);
            yes(limiter.tryAcquire("a", 0), "1");
            yes(limiter.tryAcquire("a", 1), "2");
            yes(limiter.tryAcquire("a", 2), "3");
            yes(!limiter.tryAcquire("a", 3), "4 is refused");
            yes(!limiter.tryAcquire("a", 999), "still refused at the end of the window");
        });

        test("limiter: counts over the window just passed, so the oldest attempt expires first", () -> {
            RateLimiter limiter = new RateLimiter(2, 1000);
            limiter.tryAcquire("a", 0);
            limiter.tryAcquire("a", 600);
            yes(!limiter.tryAcquire("a", 700), "refused");
            yes(limiter.tryAcquire("a", 1000), "the attempt at 0 has expired");
            yes(!limiter.tryAcquire("a", 1100), "but the one at 600 has not");
            yes(limiter.tryAcquire("a", 1600), "and then it has");
        });

        test("limiter: each address has its own count", () -> {
            RateLimiter limiter = new RateLimiter(1, 1000);
            yes(limiter.tryAcquire("a", 0), "a");
            yes(limiter.tryAcquire("b", 0), "b");
            yes(!limiter.tryAcquire("a", 1), "a again");
        });

        test("limiter: tells how many seconds are left", () -> {
            RateLimiter limiter = new RateLimiter(1, 10000);
            eq(0L, limiter.secondsUntilFree("a", 0));
            limiter.tryAcquire("a", 0);
            eq(10L, limiter.secondsUntilFree("a", 0));
            eq(5L, limiter.secondsUntilFree("a", 5000));
            eq(1L, limiter.secondsUntilFree("a", 9500));
            eq(0L, limiter.secondsUntilFree("a", 10000));
            eq(0L, limiter.secondsUntilFree("nobody", 0));
        });

        test("limiter: does not remember every address for ever", () -> {
            RateLimiter limiter = new RateLimiter(1, 1000);
            for (int i = 0; i < 5200; i++) limiter.tryAcquire("address-" + i, 0);
            yes(limiter.remembered() >= 5000, "they are remembered while the window is open");
            limiter.tryAcquire("a-new-one", 5000);
            yes(limiter.remembered() < 10, "the old ones were cleared: " + limiter.remembered());
        });
    }

    // ---------------------------------------------------------------- Score service

    /** A clock that the test moves by hand. */
    static final class TestClock extends Clock {
        long now;

        TestClock(Instant start) {
            this.now = start.toEpochMilli();
        }

        @Override
        public ZoneId getZone() {
            return ZoneOffset.UTC;
        }

        @Override
        public Clock withZone(ZoneId zone) {
            return this;
        }

        @Override
        public Instant instant() {
            return Instant.ofEpochMilli(now);
        }
    }

    /** Keeps scores in memory, like the table would: one game per id. */
    static final class MemoryRepository implements ScoreRepository {
        final List<Submission> saved = new ArrayList<>();
        int topCalls;
        int recentCalls;
        boolean down;

        @Override
        public SaveOutcome save(Submission game) throws SQLException {
            if (down) throw new SQLException("database down");
            for (Submission other : saved) {
                if (other.id().equals(game.id())) return SaveOutcome.DUPLICATE;
            }
            saved.add(game);
            return SaveOutcome.CREATED;
        }

        @Override
        public List<Row> top(int limit) throws SQLException {
            topCalls++;
            if (down) throw new SQLException("database down");
            return saved.stream()
                    .sorted(Comparator.comparingInt(Submission::total).reversed().thenComparing(Submission::playedAt, Comparator.reverseOrder()))
                    .limit(limit)
                    .map(Tests::row)
                    .toList();
        }

        @Override
        public List<Row> recent(int limit) throws SQLException {
            recentCalls++;
            if (down) throw new SQLException("database down");
            return saved.stream().sorted(Comparator.comparing(Submission::playedAt).reversed()).limit(limit).map(Tests::row).toList();
        }
    }

    static ScoreRepository.Row row(ScoreRepository.Submission s) {
        return new ScoreRepository.Row(s.id(), s.playedAt(), s.total(), s.upperSum(), s.bonus(), s.nickname());
    }

    /** JSON text for plain data (Map, List, String, Long, Boolean, null), for building requests in the tests. */
    static String toJson(Object value) {
        if (value == null) return "null";
        if (value instanceof String text) return Json.quote(text);
        if (value instanceof Map<?, ?> map) {
            StringBuilder out = new StringBuilder("{");
            for (Map.Entry<?, ?> entry : map.entrySet()) {
                if (out.length() > 1) out.append(',');
                out.append(Json.quote((String) entry.getKey())).append(':').append(toJson(entry.getValue()));
            }
            return out.append('}').toString();
        }
        if (value instanceof List<?> list) {
            StringBuilder out = new StringBuilder("[");
            for (Object item : list) {
                if (out.length() > 1) out.append(',');
                out.append(toJson(item));
            }
            return out.append(']').toString();
        }
        return String.valueOf(value);
    }

    static final Instant PLAYED = Instant.parse("2026-10-24T09:00:00.000Z");

    /** The n-th real game of the shared cases, ready to send: with an id, the time it was played, and a nickname. */
    static Map<String, Object> realGame(Path fixtures, int n, String id, String nickname) throws Exception {
        int seen = 0;
        for (Object item : (List<?>) readJson(fixtures.resolve("records.json"))) {
            Map<?, ?> one = (Map<?, ?>) item;
            if (!(Boolean) one.get("valid") || !(one.get("record") instanceof Map<?, ?> record)) continue;
            if (!String.valueOf(one.get("name")).startsWith("random game")) continue;
            if (seen++ < n) continue;
            Map<String, Object> game = new LinkedHashMap<>();
            for (Map.Entry<?, ?> entry : record.entrySet()) game.put((String) entry.getKey(), entry.getValue());
            game.put("id", id);
            game.put("playedAt", PLAYED.toString());
            game.put("nickname", nickname);
            return game;
        }
        throw new AssertionError("no real game number " + n);
    }

    static ScoreService.Response post(ScoreService service, Object body, String client) {
        byte[] bytes = (body instanceof String text ? text : toJson(body)).getBytes(StandardCharsets.UTF_8);
        return service.handle("POST", "/yacht", null, "application/json", bytes, client);
    }

    static ScoreService newService(MemoryRepository repository, TestClock clock, List<String> log) {
        return new ScoreService(repository, new RateLimiter(ScoreService.SAVES_PER_WINDOW, ScoreService.WINDOW_MILLIS), clock, log::add);
    }

    static void serviceTests(Path fixtures) {
        Instant soonAfter = PLAYED.plusSeconds(600);

        test("service: saves a real game and answers 201, keeping what it worked out itself", () -> {
            MemoryRepository repository = new MemoryRepository();
            ScoreService service = newService(repository, new TestClock(soonAfter), new ArrayList<>());
            Map<String, Object> game = realGame(fixtures, 0, "game-1", "  Kim   Lee ");
            ScoreService.Response response = post(service, game, "1.2.3.4");
            eq(201, response.status());
            eq("{\"status\":\"saved\"}", response.body());
            eq(1, repository.saved.size());
            ScoreRepository.Submission kept = repository.saved.get(0);
            eq("game-1", kept.id());
            eq("Kim Lee", kept.nickname());
            eq(PLAYED, kept.playedAt());
            eq(game.get("total"), (long) kept.total());
            eq(game.get("upperSum"), (long) kept.upperSum());
            eq(game.get("bonus"), (long) kept.bonus());
            yes(Json.parse(kept.turnsJson()) instanceof List<?> turns && turns.size() == 12, "twelve turns are kept");
            eq("no-store", response.headers().get("Cache-Control"));
        });

        test("service: the same game sent again is answered 200 and not kept twice", () -> {
            MemoryRepository repository = new MemoryRepository();
            ScoreService service = newService(repository, new TestClock(soonAfter), new ArrayList<>());
            Map<String, Object> game = realGame(fixtures, 0, "game-1", "Kim");
            eq(201, post(service, game, "1.2.3.4").status());
            ScoreService.Response again = post(service, game, "1.2.3.4");
            eq(200, again.status());
            eq("{\"status\":\"duplicate\"}", again.body());
            eq(1, repository.saved.size());
        });

        test("service: refuses a request that is not good JSON, or not an object", () -> {
            ScoreService service = newService(new MemoryRepository(), new TestClock(soonAfter), new ArrayList<>());
            eq(400, post(service, "{not json", "a").status());
            eq(400, post(service, "[1,2]", "b").status());
            eq(400, post(service, "\"text\"", "c").status());
            eq(400, post(service, "null", "d").status());
            eq(400, post(service, "", "e").status());
        });

        test("service: refuses a bad id, time or nickname, and says which", () -> {
            ScoreService service = newService(new MemoryRepository(), new TestClock(soonAfter), new ArrayList<>());
            int n = 0;
            for (String id : new String[] {"", "has space", "semi;colon", "quote'", "x".repeat(65), "한글"}) {
                Map<String, Object> game = realGame(fixtures, 0, id, "Kim");
                ScoreService.Response response = post(service, game, "ip-" + n++);
                eq(400, response.status());
                yes(response.body().contains("invalid id"), response.body());
            }
            Map<String, Object> noId = realGame(fixtures, 0, "ok", "Kim");
            noId.remove("id");
            yes(post(service, noId, "ip-a").body().contains("invalid id"), "missing id");

            for (Object time : new Object[] {"yesterday", "2026-13-45T00:00:00Z", "", 12345L, null}) {
                Map<String, Object> game = realGame(fixtures, 0, "t" + n, "Kim");
                game.put("playedAt", time);
                ScoreService.Response response = post(service, game, "ip-" + n++);
                eq(400, response.status());
                yes(response.body().contains("playedAt"), response.body());
            }

            for (Object nickname : new Object[] {"", "   ", "<b>x</b>", "abcdefghijklm", 5L, null}) {
                Map<String, Object> game = realGame(fixtures, 0, "n" + n, "Kim");
                game.put("nickname", nickname);
                ScoreService.Response response = post(service, game, "ip-" + n++);
                eq(400, response.status());
                yes(response.body().contains("invalid nickname"), response.body());
            }
            Map<String, Object> noNickname = realGame(fixtures, 0, "nn", "Kim");
            noNickname.remove("nickname");
            yes(post(service, noNickname, "ip-b").body().contains("invalid nickname"), "missing nickname");
        });

        test("service: a game cannot be from the future, nor from long ago", () -> {
            MemoryRepository repository = new MemoryRepository();
            TestClock clock = new TestClock(PLAYED.minusSeconds(60)); // the server's clock is a minute behind: allowed
            ScoreService service = newService(repository, clock, new ArrayList<>());
            eq(201, post(service, realGame(fixtures, 0, "a", "Kim"), "x1").status());
            clock.now = PLAYED.minusSeconds(3600).toEpochMilli(); // an hour behind: the game is from the future
            ScoreService.Response future = post(service, realGame(fixtures, 1, "b", "Kim"), "x2");
            eq(400, future.status());
            yes(future.body().contains("future"), future.body());
            clock.now = PLAYED.plusSeconds(8L * 24 * 3600).toEpochMilli(); // eight days later: too old
            ScoreService.Response old = post(service, realGame(fixtures, 2, "c", "Kim"), "x3");
            eq(400, old.status());
            yes(old.body().contains("too old"), old.body());
            eq(1, repository.saved.size());
        });

        test("service: refuses a game that is not real: changed total, bonus or turns", () -> {
            MemoryRepository repository = new MemoryRepository();
            ScoreService service = newService(repository, new TestClock(soonAfter), new ArrayList<>());
            Map<String, Object> wrongTotal = realGame(fixtures, 0, "w1", "Kim");
            wrongTotal.put("total", (Long) wrongTotal.get("total") + 1);
            ScoreService.Response response = post(service, wrongTotal, "y1");
            eq(400, response.status());
            yes(response.body().contains("not a real game"), response.body());
            Map<String, Object> fewTurns = realGame(fixtures, 0, "w2", "Kim");
            ((List<?>) fewTurns.get("turns")).remove(0);
            eq(400, post(service, fewTurns, "y2").status());
            eq(0, repository.saved.size());
        });

        test("service: refuses a large body (413) and a body that is not JSON by type (415)", () -> {
            ScoreService service = newService(new MemoryRepository(), new TestClock(soonAfter), new ArrayList<>());
            byte[] large = new byte[ScoreService.MAX_BODY_BYTES + 1];
            java.util.Arrays.fill(large, (byte) 'a');
            eq(413, service.handle("POST", "/yacht", null, "application/json", large, "z1").status());
            byte[] fits = new byte[ScoreService.MAX_BODY_BYTES];
            java.util.Arrays.fill(fits, (byte) 'a');
            eq(400, service.handle("POST", "/yacht", null, "application/json", fits, "z2").status()); // too large would be 413
            eq(415, service.handle("POST", "/yacht", null, "text/plain", "{}".getBytes(StandardCharsets.UTF_8), "z3").status());
            eq(415, service.handle("POST", "/yacht", null, null, "{}".getBytes(StandardCharsets.UTF_8), "z4").status());
            eq(400, service.handle("POST", "/yacht", null, "application/json; charset=UTF-8", "{}".getBytes(StandardCharsets.UTF_8), "z5").status());
        });

        test("service: allows ten saves an hour from one address, then answers 429 with Retry-After", () -> {
            MemoryRepository repository = new MemoryRepository();
            TestClock clock = new TestClock(soonAfter);
            ScoreService service = newService(repository, clock, new ArrayList<>());
            for (int i = 0; i < ScoreService.SAVES_PER_WINDOW; i++) {
                eq(201, post(service, realGame(fixtures, i % 5, "g" + i, "Kim"), "9.9.9.9").status());
            }
            ScoreService.Response limited = post(service, realGame(fixtures, 0, "one-more", "Kim"), "9.9.9.9");
            eq(429, limited.status());
            yes(Long.parseLong(limited.headers().get("Retry-After")) >= 1, "Retry-After is given");
            eq(201, post(service, realGame(fixtures, 0, "someone-else", "Kim"), "8.8.8.8").status());
            clock.now += ScoreService.WINDOW_MILLIS;
            eq(201, post(service, realGame(fixtures, 1, "an-hour-later", "Kim"), "9.9.9.9").status());
        });

        test("service: bad requests count against the limit too", () -> {
            ScoreService service = newService(new MemoryRepository(), new TestClock(soonAfter), new ArrayList<>());
            for (int i = 0; i < ScoreService.SAVES_PER_WINDOW; i++) eq(400, post(service, "nonsense", "7.7.7.7").status());
            eq(429, post(service, "nonsense", "7.7.7.7").status());
        });

        test("service: lists the top scores, highest first and the newest first among equal ones", () -> {
            MemoryRepository repository = new MemoryRepository();
            ScoreService service = newService(repository, new TestClock(soonAfter), new ArrayList<>());
            for (int i = 0; i < 6; i++) eq(201, post(service, realGame(fixtures, i, "g" + i, "P" + i), "ip" + i).status());
            ScoreService.Response response = service.handle("GET", "/yacht/top", "limit=4", null, new byte[0], "r");
            eq(200, response.status());
            List<?> rows = (List<?>) Json.parse(response.body());
            eq(4, rows.size());
            long previous = Long.MAX_VALUE;
            for (Object item : rows) {
                Map<?, ?> one = (Map<?, ?>) item;
                long total = (Long) one.get("total");
                yes(total <= previous, "sorted from the highest");
                previous = total;
                yes(one.get("nickname") instanceof String, "a nickname is shown");
                yes(((String) one.get("playedAt")).endsWith("Z"), "the time is in UTC");
            }
            eq("public, max-age=5", response.headers().get("Cache-Control"));
        });

        test("service: lists the newest games first", () -> {
            MemoryRepository repository = new MemoryRepository();
            TestClock clock = new TestClock(soonAfter);
            ScoreService service = newService(repository, clock, new ArrayList<>());
            Map<String, Object> older = realGame(fixtures, 0, "older", "Old");
            older.put("playedAt", PLAYED.minusSeconds(3000).toString());
            Map<String, Object> newer = realGame(fixtures, 1, "newer", "New");
            eq(201, post(service, older, "i1").status());
            eq(201, post(service, newer, "i2").status());
            List<?> rows = (List<?>) Json.parse(service.handle("GET", "/yacht/recent", null, null, new byte[0], "r").body());
            eq("newer", ((Map<?, ?>) rows.get(0)).get("id"));
            eq("older", ((Map<?, ?>) rows.get(1)).get("id"));
        });

        test("service: reads the limit: 1 to 100, and ten for anything else", () -> {
            MemoryRepository repository = new MemoryRepository();
            ScoreService service = newService(repository, new TestClock(soonAfter), new ArrayList<>());
            for (int i = 0; i < 12; i++) post(service, realGame(fixtures, i % 5, "g" + i, "P"), "ip" + i);
            // 12 games exist, so limit=100 (the largest allowed) returns all of them
            Object[][] cases = {{null, 10}, {"limit=3", 3}, {"limit=1", 1}, {"limit=100", 12}, {"limit=0", 10}, {"limit=101", 10}, {"limit=-4", 10}, {"limit=abc", 10}, {"limit=", 10}, {"limit=2.5", 10}, {"limit=1000", 10}, {"x=1&limit=5", 5}};
            for (Object[] one : cases) {
                int count = ((List<?>) Json.parse(service.handle("GET", "/yacht/recent", (String) one[0], null, new byte[0], "r").body())).size();
                eq(one[0] + " gives " + one[1], one[0] + " gives " + count);
            }
        });

        test("service: keeps a list for a few seconds, and a new game clears it at once", () -> {
            MemoryRepository repository = new MemoryRepository();
            TestClock clock = new TestClock(soonAfter);
            ScoreService service = newService(repository, clock, new ArrayList<>());
            post(service, realGame(fixtures, 0, "a", "A"), "i1");
            service.handle("GET", "/yacht/top", null, null, new byte[0], "r");
            service.handle("GET", "/yacht/top", null, null, new byte[0], "r");
            eq(1, repository.topCalls);
            clock.now += ScoreService.CACHE_MILLIS - 1;
            service.handle("GET", "/yacht/top", null, null, new byte[0], "r");
            eq(1, repository.topCalls);
            clock.now += 2;
            service.handle("GET", "/yacht/top", null, null, new byte[0], "r");
            eq(2, repository.topCalls);
            post(service, realGame(fixtures, 1, "b", "B"), "i2");
            List<?> rows = (List<?>) Json.parse(service.handle("GET", "/yacht/top", null, null, new byte[0], "r").body());
            eq(3, repository.topCalls);
            eq(2, rows.size());
        });

        test("service: answers 503 when the database is down, and works again when it is back", () -> {
            MemoryRepository repository = new MemoryRepository();
            List<String> log = new ArrayList<>();
            ScoreService service = newService(repository, new TestClock(soonAfter), log);
            repository.down = true;
            ScoreService.Response saving = post(service, realGame(fixtures, 0, "a", "A"), "i1");
            eq(503, saving.status());
            yes(saving.body().contains("database"), saving.body());
            eq(503, service.handle("GET", "/yacht/top", null, null, new byte[0], "r").status());
            yes(!log.isEmpty(), "the failure was logged");
            repository.down = false;
            eq(201, post(service, realGame(fixtures, 0, "a", "A"), "i1").status());
            eq(200, service.handle("GET", "/yacht/top", null, null, new byte[0], "r").status());
        });

        test("service: unknown paths are 404 and wrong methods are 405 with Allow", () -> {
            ScoreService service = newService(new MemoryRepository(), new TestClock(soonAfter), new ArrayList<>());
            eq(404, service.handle("GET", "/", null, null, new byte[0], "r").status());
            eq(404, service.handle("GET", null, null, null, new byte[0], "r").status());
            eq(404, service.handle("GET", "/yacht/best", null, null, new byte[0], "r").status());
            eq(404, service.handle("GET", "/other", null, null, new byte[0], "r").status());
            ScoreService.Response get = service.handle("GET", "/yacht", null, null, new byte[0], "r");
            eq(405, get.status());
            eq("POST", get.headers().get("Allow"));
            ScoreService.Response delete = service.handle("DELETE", "/yacht/top", null, null, new byte[0], "r");
            eq(405, delete.status());
            eq("GET", delete.headers().get("Allow"));
            eq(405, service.handle("POST", "/yacht/top", null, "application/json", "{}".getBytes(StandardCharsets.UTF_8), "r").status());
            eq(200, service.handle("GET", "/yacht/top/", null, null, new byte[0], "r").status()); // one trailing slash is fine
        });

        test("service: every answer is valid JSON, and errors name no secrets", () -> {
            MemoryRepository repository = new MemoryRepository();
            ScoreService service = newService(repository, new TestClock(soonAfter), new ArrayList<>());
            List<ScoreService.Response> answers = new ArrayList<>();
            answers.add(post(service, "{", "a"));
            answers.add(post(service, realGame(fixtures, 0, "ok", "Kim"), "b"));
            answers.add(service.handle("GET", "/yacht/top", null, null, new byte[0], "r"));
            answers.add(service.handle("GET", "/nope", null, null, new byte[0], "r"));
            repository.down = true;
            answers.add(service.handle("GET", "/yacht/recent", null, null, new byte[0], "r"));
            for (ScoreService.Response answer : answers) {
                Json.parse(answer.body());
                yes(!answer.body().toLowerCase().contains("password"), "no password in " + answer.body());
                yes(!answer.body().contains("SQLException"), "no internals in " + answer.body());
            }
        });

        test("service: a nickname with Korean letters and spaces is kept and listed as it is", () -> {
            MemoryRepository repository = new MemoryRepository();
            ScoreService service = newService(repository, new TestClock(soonAfter), new ArrayList<>());
            String name = new String(new char[] {(char) 0xD55C, (char) 0xAE00}) + " Kim 7";
            eq(201, post(service, realGame(fixtures, 0, "k", name), "i").status());
            List<?> rows = (List<?>) Json.parse(service.handle("GET", "/yacht/top", null, null, new byte[0], "r").body());
            eq(name, ((Map<?, ?>) rows.get(0)).get("nickname"));
        });

        test("service: games that differ only in time are kept apart by id", () -> {
            MemoryRepository repository = new MemoryRepository();
            ScoreService service = newService(repository, new TestClock(soonAfter), new ArrayList<>());
            Set<String> ids = new HashSet<>();
            for (int i = 0; i < 4; i++) {
                eq(201, post(service, realGame(fixtures, 0, "same-game-" + i, "Kim"), "ip" + i).status());
                ids.add("same-game-" + i);
            }
            eq(ids.size(), repository.saved.size());
        });
    }
}
