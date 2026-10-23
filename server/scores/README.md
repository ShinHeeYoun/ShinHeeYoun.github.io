# scores: saving Yacht Dice scores in the database

A small Java servlet app (`scores.war`) for Tomcat 9. It receives finished Yacht Dice games from the site, checks that
each one is a real game, and keeps it in an Oracle Autonomous Database. It also lists the top scores. All the
features of the site that need a database share **one database user** (`HOMEPAGE_APP`), whose settings are in one file
on the server.

```
browser (GitHub Pages) -> https://<server name>/scores/api/... -> nginx -> Tomcat: scores.war -> JDBC -> Oracle
```

| File | What it is |
|---|---|
| `schema.sql` | Creates the `YACHT_SCORE` table (Oracle 12c or later) |
| `migration-001-nickname.sql` | Adds `NICKNAME` to a table made from the first version of `schema.sql` |
| `queries.sql` | The three statements the server runs: save, top scores, recent games |
| `src/main/java/...` | The app. `ScoreService` holds all the logic and knows nothing of servlets or the database |
| `src/test/java/...` | The tests (`Tests.java`, no test library); they need neither Tomcat nor a database |
| `fixtures/` | Cases shared with the site's own tests (nicknames and game records), so both sides agree |
| `build.ps1` | Compiles, runs the tests, and builds `build/scores.war` |

## Building

```powershell
powershell -File server\scores\build.ps1
```

Needs a JDK 17 or later on the `PATH`. The script compiles with warnings as errors, runs the tests (and builds no war
if one fails), and packs the war. Two jars are not in this repository (`server/scores/lib/` is ignored):

- `servlet-api.jar`, only for compiling, copied from `../status/lib/` (see `../status/README.md`).
- The Oracle JDBC driver `ojdbc11`, downloaded from Maven Central the first time, checked against the SHA-1 that Maven
  Central publishes, and packed **into the war**. Tomcat's own `lib/` is not touched, so Tomcat need not be restarted.

## Requests

All under `/scores/api/yacht`, JSON. Only the site's own address (`https://shinheeyoun.github.io`) may call them from a
browser (CORS, set in `web.xml`).

**Save a game: `POST /scores/api/yacht`** (`Content-Type: application/json`)

```json
{
  "id": "0b9f1c7e-...",
  "playedAt": "2026-10-24T09:00:00.000Z",
  "nickname": "Kim Lee",
  "total": 187,
  "upperSum": 72,
  "bonus": 35,
  "turns": [
    { "dice": [5, 5, 5, 4, 1], "category": "fives" },
    "... 12 turns in all ..."
  ]
}
```

| Answer | Meaning |
|---|---|
| `201` | Saved |
| `200` | This `id` was saved before; nothing changed |
| `400` | Not valid JSON, a bad `id`, `playedAt` or `nickname`, or not a real game (see below). The body says which |
| `413` | The body is larger than 16 KB |
| `415` | The body is not `application/json` |
| `429` | More than 10 saves from this address in an hour (`Retry-After` says how many seconds to wait) |
| `503` | The database cannot be reached |

**Top scores: `GET /scores/api/yacht/top?limit=10`** and **recent games: `GET /scores/api/yacht/recent?limit=10`**

Answer `200` with a list, without the turns: `[{ "id", "playedAt", "total", "upperSum", "bonus", "nickname" }, ...]`.
`limit` is a whole number from 1 to 100; anything else is treated as 10. A list is kept for 5 seconds, and a new game
clears it at once.

## What the server checks before it saves

A browser can send anything, so a score is never trusted as a number. The server works the score out again from
the turns. The same rules are written in `verifyRecord()` in `src/tools/yacht/controller.ts` and in `YachtRules.java`,
and `fixtures/records.json` (made by the site's code) has about 80 games, good and tampered, that both must judge the
same way:

1. Exactly 12 turns, and each of the 12 categories appears exactly once
   (`aces deuces threes fours fives sixes choice fourOfAKind fullHouse smallStraight largeStraight yacht`).
2. Every turn has exactly 5 dice, each a whole number from 1 to 6.
3. The points of each turn are computed from its dice and category with the scoring rules of the game.
4. `upperSum` is the sum of the six upper categories, `bonus` is 35 if `upperSum >= 63` and 0 otherwise, and
   `total` is the sum of all 12 turns plus `bonus`. If any of the three differs from what was sent, answer `400`.
5. `id` is 1 to 64 characters from `A-Za-z0-9-`; `playedAt` is an ISO date and time, not more than a few minutes in
   the future and not older than a week.
6. `nickname` follows `src/tools/yacht/nickname.ts` (checked with `fixtures/nicknames.json`): 1 to 12 letters, digits,
   `_`, `-` and single spaces between words. It is stored as the server tidied it, and shown by the site as plain text.

What the server cannot check is whether the dice were really random: someone can send a perfect, valid game. That is
why a single address may save only 10 games an hour. If the ranking ever matters, play has to move to the server (the
server rolls the dice). This design only keeps out impossible scores, typing mistakes and flooding.

Also: the body is limited to 16 KB, nginx limits requests per address, every SQL value is a bind variable, and the
error answers never contain database messages, addresses or passwords.

## Database access: where the secrets go

This repository is public. **Never commit the JDBC address, user name or password.** The app reads them, when the
first request needs the database, from a file on the server:

```
/opt/tomcat/conf/homepage-db.properties      (owner tomcat, mode 600; set another path with -Dhomepage.db.config=...)

jdbc.url=jdbc:oracle:thin:@<the connection string of the TLS service>
jdbc.user=HOMEPAGE_APP
jdbc.password=<PASSWORD>
```

The values in angle brackets are placeholders to fill in on the server. The app starts even if the file or the
database is missing, answers `503` until it can connect, and then works without a restart. The connection is TLS
without a wallet (the database allows the server's address), through a pool of 4 connections.

The same file is meant for every other feature of the site that needs the database.

## Putting it on the server

Each step changes the server, so each is done by hand:

1. Create the table: `schema.sql`, or `migration-001-nickname.sql` if the table already exists without `NICKNAME`.
2. Copy `build/scores.war` to `/opt/tomcat/webapps/` (owner `tomcat`). Tomcat deploys it without a restart.
3. Add a `/scores/` location to nginx, as for `/status/` (`../nginx/shinheeyoun.conf`): a request limit, a 16 KB body
   limit, and `proxy_set_header X-Forwarded-For $remote_addr` (the app counts saves per that address).
4. Try it with `curl`: a good game answers `201`, the same again `200`, a changed total `400`.
5. Publish the site's change that adds the ranking to the game.

The database password expires after about a year, and an Always Free database is stopped when it has been idle for a
long time: if every answer is `503`, look there first.
