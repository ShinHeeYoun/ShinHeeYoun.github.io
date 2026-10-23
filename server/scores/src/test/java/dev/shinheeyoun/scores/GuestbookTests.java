package dev.shinheeyoun.scores;

import static dev.shinheeyoun.scores.Tests.eq;
import static dev.shinheeyoun.scores.Tests.fails;
import static dev.shinheeyoun.scores.Tests.test;
import static dev.shinheeyoun.scores.Tests.yes;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

/** The tests of the guestbook (run from Tests.main): the password hash, the admin check, and the service. */
final class GuestbookTests {
    private GuestbookTests() {}

    // The quote that begins a classic injection, made from its number so that no file here holds it by accident.
    private static final String QUOTE = String.valueOf((char) 39);

    /** Keeps the guestbook in memory, the way the table would: ids count up, and deleting a comment deletes its replies. */
    static final class MemoryGuestbook implements GuestbookRepository {
        record Row(long id, NewEntry entry) {}

        final List<Row> rows = new ArrayList<>();
        long nextId = 1;
        boolean down;

        @Override
        public Optional<Entry> add(NewEntry entry) throws SQLException {
            if (down) throw new SQLException("database down");
            if (entry.parentId() != null && rows.stream().noneMatch(r -> r.id() == entry.parentId() && r.entry().parentId() == null)) {
                return Optional.empty();
            }
            Row row = new Row(nextId++, entry);
            rows.add(row);
            return Optional.of(toEntry(row));
        }

        private Entry toEntry(Row row) {
            long replies = rows.stream().filter(r -> r.entry().parentId() != null && r.entry().parentId() == row.id()).count();
            NewEntry e = row.entry();
            return new Entry(row.id(), e.parentId(), e.author(), e.body(), e.createdAt(), (int) replies);
        }

        @Override
        public List<Entry> comments(long beforeId, int limit) throws SQLException {
            if (down) throw new SQLException("database down");
            return rows.stream()
                    .filter(r -> r.entry().parentId() == null && r.id() < beforeId)
                    .sorted(Comparator.comparingLong(Row::id).reversed())
                    .limit(limit)
                    .map(this::toEntry)
                    .toList();
        }

        @Override
        public List<Entry> replies(long parentId, int limit) throws SQLException {
            if (down) throw new SQLException("database down");
            return rows.stream()
                    .filter(r -> r.entry().parentId() != null && r.entry().parentId() == parentId)
                    .sorted(Comparator.comparingLong(Row::id))
                    .limit(limit)
                    .map(this::toEntry)
                    .toList();
        }

        @Override
        public Optional<String> passwordHash(long id) throws SQLException {
            if (down) throw new SQLException("database down");
            return rows.stream().filter(r -> r.id() == id).map(r -> r.entry().passwordHash()).findFirst();
        }

        @Override
        public boolean delete(long id) throws SQLException {
            if (down) throw new SQLException("database down");
            boolean existed = rows.removeIf(r -> r.id() == id);
            rows.removeIf(r -> r.entry().parentId() != null && r.entry().parentId() == id);
            return existed;
        }
    }

    /** Knows one admin token. */
    static final class FakeAdmin implements AdminVerifier {
        final String token;
        final AtomicInteger asked = new AtomicInteger();

        FakeAdmin(String token) {
            this.token = token;
        }

        @Override
        public boolean isAdmin(String candidate) {
            asked.incrementAndGet();
            return token.equals(candidate);
        }
    }

    static final String ADMIN_TOKEN = "ghp_admin_token_for_tests";
    static final Instant NOW = Instant.parse("2026-10-24T09:00:00Z");

    static final class Setup {
        final MemoryGuestbook repository = new MemoryGuestbook();
        final FakeAdmin admin = new FakeAdmin(ADMIN_TOKEN);
        final Tests.TestClock clock = new Tests.TestClock(NOW);
        final List<String> log = new ArrayList<>();
        final GuestbookService service = new GuestbookService(repository, admin, clock, log::add);
        int addresses;

        /** A request from a new address each time, so that the limits of one test do not reach the next. */
        Response send(String method, String path, String query, Object body, String authorization) {
            return sendFrom("10.0.0." + ++addresses, method, path, query, body, authorization);
        }

        Response sendFrom(String client, String method, String path, String query, Object body, String authorization) {
            byte[] bytes = body == null ? new byte[0] : (body instanceof String text ? text : Tests.toJson(body)).getBytes(StandardCharsets.UTF_8);
            return service.handle(method, path, query, body == null ? null : "application/json", bytes, client, authorization, "TestBrowser/1.0");
        }

        Response write(String author, String password, String text) {
            return send("POST", "/guestbook", null, map("author", author, "password", password, "body", text), null);
        }

        long writeOk(String author, String text) {
            Response response = write(author, "secret1", text);
            eq(201, response.status());
            return (Long) ((Map<?, ?>) parse(response.body())).get("id");
        }

        long replyOk(long parentId, String author, String text) {
            Response response = send("POST", "/guestbook", null, map("author", author, "password", "secret1", "body", text, "parentId", parentId), null);
            eq(201, response.status());
            return (Long) ((Map<?, ?>) parse(response.body())).get("id");
        }
    }

    static Map<String, Object> map(Object... pairs) {
        Map<String, Object> result = new LinkedHashMap<>();
        for (int i = 0; i < pairs.length; i += 2) result.put((String) pairs[i], pairs[i + 1]);
        return result;
    }

    static Object parse(String json) {
        try {
            return Json.parse(json);
        } catch (Json.JsonException e) {
            throw new AssertionError("not JSON: " + json);
        }
    }

    static void run() {
        hasherTests();
        adminTests();
        textTests();
        writeTests();
        readTests();
        deleteTests();
        limitTests();
    }

    // ---------------------------------------------------------------- Password hash

    static void hasherTests() {
        test("hasher: the right password matches and a wrong one does not", () -> {
            String stored = PasswordHasher.hash("correct horse");
            yes(PasswordHasher.matches(stored, "correct horse"), "right");
            yes(!PasswordHasher.matches(stored, "correct horsf"), "wrong");
            yes(!PasswordHasher.matches(stored, ""), "empty");
            yes(!PasswordHasher.matches(stored, "CORRECT HORSE"), "case matters");
        });

        test("hasher: the stored text does not hold the password, and every hash has its own salt", () -> {
            String a = PasswordHasher.hash("secret1");
            String b = PasswordHasher.hash("secret1");
            yes(!a.contains("secret1"), "no password in the hash");
            yes(!a.equals(b), "different salts");
            yes(a.length() < 200, "fits the column: " + a.length());
            yes(a.startsWith("pbkdf2-sha256$" + PasswordHasher.ITERATIONS + "$"), a);
        });

        test("hasher: Korean and other non-ASCII passwords work", () -> {
            String password = "" + (char) 0xBE44 + (char) 0xBC00 + "1234";
            String stored = PasswordHasher.hash(password);
            yes(PasswordHasher.matches(stored, password), "same");
            yes(!PasswordHasher.matches(stored, "1234"), "different");
        });

        test("hasher: a stored value in the wrong shape never matches", () -> {
            for (String stored : new String[] {null, "", "secret1", "a$b$c$d", "pbkdf2-sha256$x$AAAA$AAAA", "pbkdf2-sha256$20000$!!$!!", "pbkdf2-sha256$0$AAAA$AAAA", "pbkdf2-sha256$20000$AAAA"}) {
                yes(!PasswordHasher.matches(stored, "secret1"), "matched: " + stored);
            }
            yes(!PasswordHasher.matches(PasswordHasher.hash("x1234"), null), "null password");
        });
    }

    // ---------------------------------------------------------------- Admin check

    static GitHubAdminVerifier.Answer pushAllowed(boolean push) {
        return new GitHubAdminVerifier.Answer(200, "{\"name\":\"repo\",\"permissions\":{\"admin\":false,\"push\":" + push + ",\"pull\":true}}");
    }

    static void adminTests() {
        test("admin: a token that may push is the admin, and one that may only read is not", () -> {
            Tests.TestClock clock = new Tests.TestClock(NOW);
            yes(new GitHubAdminVerifier(t -> pushAllowed(true), clock::millis, s -> {}).isAdmin("ghp_abc"), "push");
            yes(!new GitHubAdminVerifier(t -> pushAllowed(false), clock::millis, s -> {}).isAdmin("ghp_abc"), "read only");
        });

        test("admin: GitHub refusing the token, or answering something odd, is a no", () -> {
            Tests.TestClock clock = new Tests.TestClock(NOW);
            for (GitHubAdminVerifier.Answer answer : List.of(
                    new GitHubAdminVerifier.Answer(401, "{\"message\":\"Bad credentials\"}"),
                    new GitHubAdminVerifier.Answer(403, "{}"),
                    new GitHubAdminVerifier.Answer(200, "not json"),
                    new GitHubAdminVerifier.Answer(200, "{}"),
                    new GitHubAdminVerifier.Answer(200, "{\"permissions\":{}}"),
                    new GitHubAdminVerifier.Answer(200, "{\"permissions\":{\"push\":\"true\"}}"),
                    new GitHubAdminVerifier.Answer(200, "[]"))) {
                yes(!new GitHubAdminVerifier(t -> answer, clock::millis, s -> {}).isAdmin("ghp_abc"), "accepted " + answer);
            }
        });

        test("admin: GitHub being unreachable is a no, and is logged without the token", () -> {
            List<String> log = new ArrayList<>();
            GitHubAdminVerifier verifier = new GitHubAdminVerifier(t -> { throw new IOException("down " + t); }, () -> 0, log::add);
            yes(!verifier.isAdmin("ghp_secret_token"), "no");
            yes(log.size() == 1 && !log.get(0).contains("ghp_secret_token"), "logged without the token: " + log);
        });

        test("admin: a yes is remembered for five minutes, a no is not, and the token is not kept", () -> {
            Tests.TestClock clock = new Tests.TestClock(NOW);
            AtomicInteger asked = new AtomicInteger();
            GitHubAdminVerifier yes = new GitHubAdminVerifier(t -> { asked.incrementAndGet(); return pushAllowed(true); }, clock::millis, s -> {});
            yes(yes.isAdmin("ghp_abc"), "first");
            yes(yes.isAdmin("ghp_abc"), "second");
            eq(1, asked.get());
            clock.now += GitHubAdminVerifier.REMEMBER_MILLIS - 1;
            yes(yes.isAdmin("ghp_abc"), "still remembered");
            eq(1, asked.get());
            clock.now += 2;
            yes(yes.isAdmin("ghp_abc"), "asked again");
            eq(2, asked.get());
            yes(yes.isAdmin("ghp_other"), "another token is asked on its own");
            eq(3, asked.get());

            AtomicInteger noAsked = new AtomicInteger();
            GitHubAdminVerifier no = new GitHubAdminVerifier(t -> { noAsked.incrementAndGet(); return pushAllowed(false); }, clock::millis, s -> {});
            no.isAdmin("ghp_abc");
            no.isAdmin("ghp_abc");
            eq(2, noAsked.get());
        });

        test("admin: text that cannot be a token is refused without asking GitHub", () -> {
            AtomicInteger asked = new AtomicInteger();
            GitHubAdminVerifier verifier = new GitHubAdminVerifier(t -> { asked.incrementAndGet(); return pushAllowed(true); }, () -> 0, s -> {});
            for (String token : new String[] {null, "", "has space", "tab" + (char) 9, "new" + (char) 10 + "line", "x".repeat(256), "한글토큰"}) {
                yes(!verifier.isAdmin(token), "accepted: " + token);
            }
            eq(0, asked.get());
        });
    }

    // ---------------------------------------------------------------- What a comment may be

    static void textTests() {
        test("text: surrounding blank space is removed and line ends become newlines", () -> {
            eq("hello", GuestbookService.cleanText("  hello \n "));
            eq("a\nb\nc", GuestbookService.cleanText("a\r\nb\rc"));
            eq("a\tb", GuestbookService.cleanText("a\tb"));
            eq("# title\n\n- one", GuestbookService.cleanText("# title\n\n- one"));
        });

        test("text: 300 characters are allowed and 301 are not, counting a character outside the basic plane once", () -> {
            yes(GuestbookService.cleanText("a".repeat(300)) != null, "300");
            eq(null, GuestbookService.cleanText("a".repeat(301)));
            String emoji = new String(Character.toChars(0x1F600));
            yes(GuestbookService.cleanText(emoji.repeat(300)) != null, "300 emoji are 300 characters");
            eq(null, GuestbookService.cleanText(emoji.repeat(301)));
            yes(GuestbookService.cleanText("가".repeat(300)) != null, "300 Korean letters");
        });

        test("text: empty text, control characters and half a surrogate pair are refused", () -> {
            eq(null, GuestbookService.cleanText(""));
            eq(null, GuestbookService.cleanText("  \n\t "));
            eq(null, GuestbookService.cleanText("a" + (char) 0 + "b"));
            eq(null, GuestbookService.cleanText("a" + (char) 7 + "b"));
            eq(null, GuestbookService.cleanText("a" + (char) 0x1b + "[0m"));
            eq(null, GuestbookService.cleanText("a" + (char) 0x85 + "b"));
            eq(null, GuestbookService.cleanText("a" + (char) 0xD800 + "b"));
        });

        test("text: the browser's name is shortened, and cleaned of control characters", () -> {
            eq(null, GuestbookService.cleanUserAgent(null));
            eq(null, GuestbookService.cleanUserAgent("   "));
            eq("Mozilla/5.0 (X11)", GuestbookService.cleanUserAgent("Mozilla/5.0 " + (char) 10 + "(X11)" + (char) 0).replace("  ", " "));
            eq(300, GuestbookService.cleanUserAgent("u".repeat(1000)).length());
        });
    }

    // ---------------------------------------------------------------- Writing

    static void writeTests() {
        test("write: a comment is kept with its writer's address and browser, a hashed password and the time", () -> {
            Setup s = new Setup();
            Response response = s.sendFrom("203.0.113.5", "POST", "/guestbook", null, map("author", "  Kim   Lee ", "password", "secret1", "body", "  hello **world** "), null);
            eq(201, response.status());
            Map<?, ?> shown = (Map<?, ?>) parse(response.body());
            eq(1L, shown.get("id"));
            eq("Kim Lee", shown.get("author"));
            eq("hello **world**", shown.get("body"));
            eq(NOW.toString(), shown.get("createdAt"));
            eq(0L, shown.get("replyCount"));
            yes(!shown.containsKey("parentId"), "a comment has no parent");
            yes(!response.body().contains("secret1") && !response.body().contains("203.0.113.5") && !response.body().contains("TestBrowser"), "nothing private in the answer");
            eq("no-store", response.headers().get("Cache-Control"));

            GuestbookRepository.NewEntry kept = s.repository.rows.get(0).entry();
            eq("203.0.113.5", kept.clientIp());
            eq("TestBrowser/1.0", kept.userAgent());
            eq(NOW, kept.createdAt());
            yes(!kept.passwordHash().contains("secret1"), "the password is not kept as text");
            yes(PasswordHasher.matches(kept.passwordHash(), "secret1"), "but can be checked");
            eq(null, kept.parentId());
        });

        test("write: Korean author and text, and Markdown, are kept as they are", () -> {
            Setup s = new Setup();
            String author = "" + (char) 0xD64D + (char) 0xAE38 + (char) 0xB3D9;
            long id = s.writeOk(author, "# 제목\n\n- 하나\n- 둘\n\n`code` and [link](https://example.com)");
            eq("# 제목\n\n- 하나\n- 둘\n\n`code` and [link](https://example.com)", s.repository.rows.get(0).entry().body());
            eq(1L, id);
            eq(author, s.repository.rows.get(0).entry().author());
        });

        test("write: text that looks like an SQL attack is only text", () -> {
            Setup s = new Setup();
            String attack = QUOTE + "); DROP TABLE GUESTBOOK; --" + QUOTE + " OR 1=1";
            s.writeOk("Kim", attack);
            eq(attack, s.repository.rows.get(0).entry().body());
            Response listed = s.send("GET", "/guestbook", null, null, null);
            eq(attack, ((Map<?, ?>) ((List<?>) ((Map<?, ?>) parse(listed.body())).get("comments")).get(0)).get("body"));
            // An author name and a password are refused or kept as text, never run.
            eq(400, s.write("Kim" + QUOTE + "; DROP", "secret1", "x").status());
            eq(201, s.write("Kim", QUOTE + " OR " + QUOTE + "1" + QUOTE + "=" + QUOTE + "1", "x").status());
        });

        test("write: a bad author, password or text is refused, and says which", () -> {
            Setup s = new Setup();
            for (String author : new String[] {"", "   ", "<b>x</b>", "abcdefghijklm", "a/b"}) {
                Response r = s.write(author, "secret1", "hi");
                eq(400, r.status());
                yes(r.body().contains("invalid author"), r.body());
            }
            for (String password : new String[] {"", "abc", "x".repeat(33), "pass" + (char) 0 + "word", "pass" + (char) 10 + "word"}) {
                Response r = s.write("Kim", password, "hi");
                eq(400, r.status());
                yes(r.body().contains("invalid password"), r.body());
            }
            yes(s.write("Kim", "abcd", "hi").status() == 201, "4 characters are enough");
            yes(s.write("Kim", "x".repeat(32), "hi").status() == 201, "32 characters are allowed");
            for (String text : new String[] {"", "   ", "a".repeat(301)}) {
                Response r = s.write("Kim", "secret1", text);
                eq(400, r.status());
                yes(r.body().contains("invalid body"), r.body());
            }
            for (Object missing : new Object[] {map("password", "secret1", "body", "hi"), map("author", "Kim", "body", "hi"), map("author", "Kim", "password", "secret1"), map("author", 5L, "password", "secret1", "body", "hi"), map("author", "Kim", "password", 123456L, "body", "hi")}) {
                eq(400, s.send("POST", "/guestbook", null, missing, null).status());
            }
            eq(0, s.repository.rows.size() - 2);
        });

        test("write: a reply needs a comment to answer, not a reply and not a missing one", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("Kim", "question");
            long reply = s.replyOk(comment, "Lee", "answer");
            Response shown = s.send("POST", "/guestbook", null, map("author", "Lee", "password", "secret1", "body", "x", "parentId", comment), null);
            eq(comment, ((Map<?, ?>) parse(shown.body())).get("parentId"));
            eq(404, s.send("POST", "/guestbook", null, map("author", "Lee", "password", "secret1", "body", "x", "parentId", 999L), null).status());
            eq(404, s.send("POST", "/guestbook", null, map("author", "Lee", "password", "secret1", "body", "x", "parentId", reply), null).status());
            for (Object parent : new Object[] {"1", 0L, -1L, 1.5, true, List.of(1L), map("a", 1L)}) {
                eq(400, s.send("POST", "/guestbook", null, map("author", "Lee", "password", "secret1", "body", "x", "parentId", parent), null).status());
            }
            eq(201, s.send("POST", "/guestbook", null, map("author", "Lee", "password", "secret1", "body", "x", "parentId", null), null).status());
        });

        test("write: the request must be JSON, an object, and small", () -> {
            Setup s = new Setup();
            eq(400, s.send("POST", "/guestbook", null, "{not json", null).status());
            eq(400, s.send("POST", "/guestbook", null, "[1,2]", null).status());
            eq(400, s.send("POST", "/guestbook", null, "null", null).status());
            eq(415, s.service.handle("POST", "/guestbook", null, "text/plain", "{}".getBytes(StandardCharsets.UTF_8), "a", null, null).status());
            eq(415, s.service.handle("POST", "/guestbook", null, null, "{}".getBytes(StandardCharsets.UTF_8), "b", null, null).status());
            eq(413, s.service.handle("POST", "/guestbook", null, "application/json", new byte[GuestbookService.MAX_BODY_BYTES + 1], "c", null, null).status());
            eq(0, s.repository.rows.size());
        });

        test("write: when the database is down the answer is 503, and it is logged without the comment", () -> {
            Setup s = new Setup();
            s.repository.down = true;
            Response r = s.write("Kim", "secret1", "private words");
            eq(503, r.status());
            yes(s.log.size() == 1 && !s.log.get(0).contains("private words") && !s.log.get(0).contains("secret1"), "log: " + s.log);
            s.repository.down = false;
            eq(201, s.write("Kim", "secret1", "private words").status());
        });
    }

    // ---------------------------------------------------------------- Reading

    static void readTests() {
        test("read: comments come newest first, with how many replies each has", () -> {
            Setup s = new Setup();
            long first = s.writeOk("A", "one");
            long second = s.writeOk("B", "two");
            s.replyOk(first, "C", "reply 1");
            s.replyOk(first, "D", "reply 2");
            Map<?, ?> page = (Map<?, ?>) parse(s.send("GET", "/guestbook", null, null, null).body());
            List<?> comments = (List<?>) page.get("comments");
            eq(2, comments.size());
            eq(second, ((Map<?, ?>) comments.get(0)).get("id"));
            eq(0L, ((Map<?, ?>) comments.get(0)).get("replyCount"));
            eq(first, ((Map<?, ?>) comments.get(1)).get("id"));
            eq(2L, ((Map<?, ?>) comments.get(1)).get("replyCount"));
            eq(false, page.get("hasMore"));
            yes(!s.send("GET", "/guestbook", null, null, null).body().contains("10.0.0."), "no addresses in the list");
        });

        test("read: pages are cut by limit, and before= asks for the next page", () -> {
            Setup s = new Setup();
            for (int i = 1; i <= 7; i++) s.writeOk("A", "comment " + i);
            Map<?, ?> page = (Map<?, ?>) parse(s.send("GET", "/guestbook", "limit=3", null, null).body());
            List<?> comments = (List<?>) page.get("comments");
            eq(3, comments.size());
            eq(true, page.get("hasMore"));
            eq(7L, ((Map<?, ?>) comments.get(0)).get("id"));
            Object last = ((Map<?, ?>) comments.get(2)).get("id");
            Map<?, ?> next = (Map<?, ?>) parse(s.send("GET", "/guestbook", "limit=3&before=" + last, null, null).body());
            eq(4L, ((Map<?, ?>) ((List<?>) next.get("comments")).get(0)).get("id"));
            Map<?, ?> end = (Map<?, ?>) parse(s.send("GET", "/guestbook", "limit=3&before=2", null, null).body());
            eq(1, ((List<?>) end.get("comments")).size());
            eq(false, end.get("hasMore"));
        });

        test("read: limit and before fall back to their defaults when they make no sense", () -> {
            Setup s = new Setup();
            for (int i = 1; i <= 25; i++) s.writeOk("A", "c" + i);
            Object[][] cases = {{null, 20}, {"limit=5", 5}, {"limit=50", 25}, {"limit=51", 20}, {"limit=0", 20}, {"limit=-1", 20}, {"limit=abc", 20}, {"limit=2.5", 20}, {"limit=", 20}, {"before=abc", 20}, {"before=0", 20}, {"before=-5", 20}, {"before=99999999999999999999", 20}};
            for (Object[] one : cases) {
                int count = ((List<?>) ((Map<?, ?>) parse(s.send("GET", "/guestbook", (String) one[0], null, null).body())).get("comments")).size();
                eq(one[0] + " gives " + one[1], one[0] + " gives " + count);
            }
        });

        test("read: replies of a comment, oldest first", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("A", "question");
            long other = s.writeOk("B", "other");
            long r1 = s.replyOk(comment, "C", "first");
            s.replyOk(other, "D", "elsewhere");
            long r2 = s.replyOk(comment, "E", "second");
            List<?> replies = (List<?>) ((Map<?, ?>) parse(s.send("GET", "/guestbook/" + comment + "/replies", null, null, null).body())).get("replies");
            eq(2, replies.size());
            eq(r1, ((Map<?, ?>) replies.get(0)).get("id"));
            eq(r2, ((Map<?, ?>) replies.get(1)).get("id"));
            eq(comment, ((Map<?, ?>) replies.get(0)).get("parentId"));
            eq(0, ((List<?>) ((Map<?, ?>) parse(s.send("GET", "/guestbook/999/replies", null, null, null).body())).get("replies")).size());
        });

        test("read: unknown paths are 404 and wrong methods are 405", () -> {
            Setup s = new Setup();
            eq(404, s.send("GET", "/guestbook/abc/replies", null, null, null).status());
            eq(404, s.send("GET", "/guestbook/0/replies", null, null, null).status());
            eq(404, s.send("GET", "/guestbook/5/other", null, null, null).status());
            eq(404, s.send("GET", "/guestbook/5", null, null, null).status());
            eq(404, s.send("GET", "/guestbook/1/replies/2", null, null, null).status());
            eq(405, s.send("DELETE", "/guestbook", null, null, null).status());
            eq(405, s.send("POST", "/guestbook/1/replies", null, "{}", null).status());
            eq(405, s.send("GET", "/guestbook/1/delete", null, null, null).status());
            eq(200, s.send("GET", "/guestbook/", null, null, null).status());
        });

        test("read: the database being down is 503", () -> {
            Setup s = new Setup();
            s.repository.down = true;
            eq(503, s.send("GET", "/guestbook", null, null, null).status());
            eq(503, s.send("GET", "/guestbook/1/replies", null, null, null).status());
        });
    }

    // ---------------------------------------------------------------- Deleting

    static Object password(String text) {
        return map("password", text);
    }

    static void deleteTests() {
        test("delete: the right password deletes the comment and its replies", () -> {
            Setup s = new Setup();
            long keep = s.writeOk("A", "keep");
            long comment = s.writeOk("B", "to delete");
            s.replyOk(comment, "C", "reply");
            Response r = s.send("POST", "/guestbook/" + comment + "/delete", null, password("secret1"), null);
            eq(200, r.status());
            eq("{\"status\":\"deleted\"}", r.body());
            eq(1, s.repository.rows.size());
            eq(keep, s.repository.rows.get(0).id());
        });

        test("delete: a wrong password, or none, deletes nothing", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("A", "mine");
            eq(403, s.send("POST", "/guestbook/" + comment + "/delete", null, password("wrongpass"), null).status());
            eq(400, s.send("POST", "/guestbook/" + comment + "/delete", null, map(), null).status());
            eq(400, s.send("POST", "/guestbook/" + comment + "/delete", null, password(""), null).status());
            eq(400, s.send("POST", "/guestbook/" + comment + "/delete", null, map("password", 123456L), null).status());
            eq(1, s.repository.rows.size());
        });

        test("delete: an SQL-looking password is only a wrong password", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("A", "mine");
            eq(403, s.send("POST", "/guestbook/" + comment + "/delete", null, password(QUOTE + " OR " + QUOTE + "1" + QUOTE + "=" + QUOTE + "1"), null).status());
            eq(1, s.repository.rows.size());
        });

        test("delete: a comment that is not there is 404, whether or not a password was sent", () -> {
            Setup s = new Setup();
            eq(404, s.send("POST", "/guestbook/77/delete", null, password("secret1"), null).status());
            eq(404, s.send("POST", "/guestbook/77/delete", null, map(), "Bearer " + ADMIN_TOKEN).status());
        });

        test("delete: a reply can be deleted with its own password, and the comment stays", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("A", "comment");
            long reply = s.replyOk(comment, "B", "reply");
            eq(200, s.send("POST", "/guestbook/" + reply + "/delete", null, password("secret1"), null).status());
            eq(1, s.repository.rows.size());
            eq(comment, s.repository.rows.get(0).id());
        });

        test("delete: the admin's token deletes without a password, and the password of the writer is not needed", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("A", "spam");
            s.replyOk(comment, "B", "spam reply");
            Response r = s.send("POST", "/guestbook/" + comment + "/delete", null, map(), "Bearer " + ADMIN_TOKEN);
            eq(200, r.status());
            eq(0, s.repository.rows.size());
        });

        test("delete: a token that is not the admin's does not delete, but the password still works beside it", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("A", "mine");
            eq(403, s.send("POST", "/guestbook/" + comment + "/delete", null, map(), "Bearer ghp_someone_else").status());
            eq(403, s.send("POST", "/guestbook/" + comment + "/delete", null, password("wrongpass"), "Bearer ghp_someone_else").status());
            eq(1, s.repository.rows.size());
            eq(200, s.send("POST", "/guestbook/" + comment + "/delete", null, password("secret1"), "Bearer ghp_someone_else").status());
            eq(0, s.repository.rows.size());
        });

        test("delete: only a Bearer header counts, in any letter case, and a password does not need one", () -> {
            Setup s = new Setup();
            long a = s.writeOk("A", "one");
            long b = s.writeOk("A", "two");
            eq(400, s.send("POST", "/guestbook/" + a + "/delete", null, map(), ADMIN_TOKEN).status()); // no scheme
            eq(400, s.send("POST", "/guestbook/" + a + "/delete", null, map(), "Basic " + ADMIN_TOKEN).status());
            eq(200, s.send("POST", "/guestbook/" + b + "/delete", null, map(), "bearer " + ADMIN_TOKEN).status());
            eq(1, s.repository.rows.size());
        });

        test("delete: the request must be JSON, and small", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("A", "x");
            eq(415, s.service.handle("POST", "/guestbook/" + comment + "/delete", null, "text/plain", "{}".getBytes(StandardCharsets.UTF_8), "a", null, null).status());
            eq(400, s.send("POST", "/guestbook/" + comment + "/delete", null, "{bad", null).status());
            eq(413, s.service.handle("POST", "/guestbook/" + comment + "/delete", null, "application/json", new byte[GuestbookService.MAX_BODY_BYTES + 1], "b", null, null).status());
            eq(1, s.repository.rows.size());
        });

        test("delete: the database being down is 503", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("A", "x");
            s.repository.down = true;
            eq(503, s.send("POST", "/guestbook/" + comment + "/delete", null, password("secret1"), null).status());
            eq(503, s.send("POST", "/guestbook/" + comment + "/delete", null, map(), "Bearer " + ADMIN_TOKEN).status());
        });
    }

    // ---------------------------------------------------------------- Limits

    static void limitTests() {
        test("limits: five writes in ten minutes from one address, then 429 with Retry-After", () -> {
            Setup s = new Setup();
            for (int i = 0; i < GuestbookService.WRITES_PER_WINDOW; i++) {
                eq(201, s.sendFrom("9.9.9.9", "POST", "/guestbook", null, map("author", "A", "password", "secret1", "body", "n" + i), null).status());
            }
            Response limited = s.sendFrom("9.9.9.9", "POST", "/guestbook", null, map("author", "A", "password", "secret1", "body", "more"), null);
            eq(429, limited.status());
            yes(Long.parseLong(limited.headers().get("Retry-After")) >= 1, "Retry-After");
            eq(201, s.sendFrom("8.8.8.8", "POST", "/guestbook", null, map("author", "A", "password", "secret1", "body", "other address"), null).status());
            s.clock.now += GuestbookService.WRITE_WINDOW_MILLIS;
            eq(201, s.sendFrom("9.9.9.9", "POST", "/guestbook", null, map("author", "A", "password", "secret1", "body", "later"), null).status());
        });

        test("limits: bad writes count too, and reading is not limited", () -> {
            Setup s = new Setup();
            for (int i = 0; i < GuestbookService.WRITES_PER_WINDOW; i++) eq(400, s.sendFrom("7.7.7.7", "POST", "/guestbook", null, "nonsense", null).status());
            eq(429, s.sendFrom("7.7.7.7", "POST", "/guestbook", null, "nonsense", null).status());
            for (int i = 0; i < 100; i++) eq(200, s.sendFrom("7.7.7.7", "GET", "/guestbook", null, null, null).status());
        });

        test("limits: only ten guesses an hour at one comment's password, from anywhere, and the owner is shut out too", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("A", "mine");
            for (int i = 0; i < GuestbookService.GUESSES_PER_ENTRY; i++) {
                eq(403, s.send("POST", "/guestbook/" + comment + "/delete", null, password("guess" + i + "xx"), null).status());
            }
            Response blocked = s.send("POST", "/guestbook/" + comment + "/delete", null, password("secret1"), null);
            eq(429, blocked.status());
            eq(1, s.repository.rows.size());
            // the admin is not held up by it
            eq(200, s.send("POST", "/guestbook/" + comment + "/delete", null, map(), "Bearer " + ADMIN_TOKEN).status());
            // another comment has its own count
            long other = s.writeOk("B", "other");
            eq(200, s.send("POST", "/guestbook/" + other + "/delete", null, password("secret1"), null).status());
        });

        test("limits: delete attempts from one address are limited too", () -> {
            Setup s = new Setup();
            for (int i = 0; i < GuestbookService.DELETES_PER_WINDOW; i++) {
                eq(404, s.sendFrom("6.6.6.6", "POST", "/guestbook/" + (100 + i) + "/delete", null, password("secret1"), null).status());
            }
            eq(429, s.sendFrom("6.6.6.6", "POST", "/guestbook/5/delete", null, password("secret1"), null).status());
            eq(404, s.sendFrom("5.5.5.5", "POST", "/guestbook/5/delete", null, password("secret1"), null).status());
        });

        test("limits: every answer is JSON and none holds a password, a hash or an address", () -> {
            Setup s = new Setup();
            long comment = s.writeOk("A", "x");
            List<Response> answers = new ArrayList<>();
            answers.add(s.write("A", "secret1", ""));
            answers.add(s.send("GET", "/guestbook", null, null, null));
            answers.add(s.send("GET", "/guestbook/" + comment + "/replies", null, null, null));
            answers.add(s.send("POST", "/guestbook/" + comment + "/delete", null, password("wrongpass"), null));
            answers.add(s.send("GET", "/nothing", null, null, null));
            s.repository.down = true;
            answers.add(s.send("GET", "/guestbook", null, null, null));
            for (Response answer : answers) {
                parse(answer.body());
                String text = answer.body().toLowerCase();
                yes(!text.contains("pbkdf2") && !text.contains("secret1") && !text.contains("10.0.0.") && !text.contains("sqlexception"), answer.body());
            }
            fails(AssertionError.class, () -> eq("a", "b"));
        });
    }
}
