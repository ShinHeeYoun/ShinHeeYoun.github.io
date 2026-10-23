# scores: saving Yacht Dice scores in a database

Status: **prepared, not connected.** The game on the site keeps scores in the player's own browser
(`LocalScoreStore`). Everything here is for the day an Oracle Cloud database is ready. Nothing in this folder runs yet,
and the site never calls it.

| File | What it is |
|---|---|
| `schema.sql` | Creates the `YACHT_SCORE` table (Oracle 12c or later) |
| `queries.sql` | The three statements the server runs: save, top scores, recent games |
| `README.md` | The request format, what the server must check, and how to connect it later |

## How the site will use it

`src/tools/yacht/scoreStore.ts` has a `ScoreStore` interface with two implementations:

- `LocalScoreStore`: this browser only. This is what `YachtView.tsx` uses now.
- `RemoteScoreStore`: talks to the server described below. It is finished and tested, but not used by any page.

To switch, change one line in `YachtView.tsx`:

```ts
const store = useMemo(() => new RemoteScoreStore('https://<server name>'), [])
```

## Requests

All under `/scores/api/yacht`, JSON. Only the site's own address (`https://shinheeyoun.github.io`) may call them from a
browser (CORS), like the status app.

**Save a game: `POST /scores/api/yacht`**

```json
{
  "id": "0b9f1c7e-...",
  "playedAt": "2026-10-24T09:00:00.000Z",
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
| `400` | The record is not a real game (see below), or is not valid JSON |
| `413` | The body is larger than a few kilobytes |
| `429` | Too many requests from this address |

**Top scores: `GET /scores/api/yacht/top?limit=10`** and **recent games: `GET /scores/api/yacht/recent?limit=10`**

Answer `200` with a list, without the turns: `[{ "id", "playedAt", "total", "upperSum", "bonus" }, ...]`.
`limit` is a whole number from 1 to 100; anything else is treated as 10.

## What the server must check before it saves

A browser can send anything, so a score is never trusted as a number. The server works the score out again from
the turns. The same rules are written in `verifyRecord()` in `src/tools/yacht/controller.ts` (with tests); the Java
code has to follow them:

1. Exactly 12 turns, and each of the 12 categories appears exactly once
   (`aces deuces threes fours fives sixes choice fourOfAKind fullHouse smallStraight largeStraight yacht`).
2. Every turn has exactly 5 dice, each a whole number from 1 to 6.
3. The points of each turn are computed from its dice and category with the scoring rules of the game.
4. `upperSum` is the sum of the six upper categories, `bonus` is 35 if `upperSum >= 63` and 0 otherwise, and
   `total` is the sum of all 12 turns plus `bonus`. If any of the three differs from what was sent, answer `400`.
5. `id` is 1 to 64 characters from `A-Za-z0-9-`; `playedAt` is an ISO date and time that is not in the future.

What the server cannot check is whether the dice were really random: someone can send a perfect, valid game. If the
ranking ever matters, play has to move to the server (the server rolls the dice). This design only keeps out
impossible scores and typing mistakes.

Also: limit the size of the body (a real game is about 1 KB), limit requests per address (nginx `limit_req`, as for
`/status/`), and never put a player's text into SQL or into the page without escaping it. A player name is not part
of the table yet; if it is added later it is text to be escaped when shown.

## Database access: where the secrets go

This repository is public. **Never commit the JDBC address, user name or password.** Keep them on the server only:

- Preferably as a Tomcat JNDI data source in the server's own `conf/Catalina/localhost/scores.xml` (not in this
  repository), which the app reads with `new InitialContext().lookup("java:comp/env/jdbc/yachtScores")`:

  ```xml
  <Context>
    <Resource name="jdbc/yachtScores" auth="Container" type="javax.sql.DataSource"
              driverClassName="oracle.jdbc.OracleDriver"
              url="jdbc:oracle:thin:@<HOST>:<PORT>/<SERVICE_NAME>"
              username="<USER>" password="<PASSWORD>"
              maxTotal="5" maxIdle="2" maxWaitMillis="5000"/>
  </Context>
  ```

  (The values in angle brackets are placeholders to fill in on the server. The Oracle JDBC driver, `ojdbc*.jar`, goes
  in Tomcat's `lib/`.)
- Or as environment variables of the Tomcat service. An Autonomous Database also needs its wallet files on the
  server, with their folder named in the URL (`?TNS_ADMIN=...`).
- Use a database user that can only touch `YACHT_SCORE` (insert and select), not an administrator.

## Still to do when the database exists

1. Create the table with `schema.sql`.
2. Write the Java servlet: it reads the data source, applies the checks above, and runs the statements in
   `queries.sql` with bind variables. It is not written yet because it cannot be tried without a database.
3. Put it behind nginx as `/scores/`, the way `/status/` is (`../nginx/shinheeyoun.conf`), with CORS only for the site.
4. Change the one line in `YachtView.tsx`.
