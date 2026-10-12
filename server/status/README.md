# status: live server status API

A small Tomcat web app (Servlet 4.0, runs on Tomcat 9 / Java 17) that tells the website how the server is doing.
`GET /status/api` returns JSON, and the site's "라이브 서버 상태" card draws it:

| Group | What it holds |
|---|---|
| Host | OS name and architecture, machine uptime, memory, swap, disk of `/`, CPU load, cores, load average, open file descriptors |
| JVM | VM name, heap used/committed/max, non-heap, Metaspace, loaded classes, threads by state, GC count and time |
| HTTP | Requests, errors, mean and slowest processing time, bytes in/out, connections, busy/max threads, active sessions (one total) |
| History | The last 10 minutes (a sample every 5 s) of heap, threads, busy threads, CPU, request count and memory in use |

Only counters and sizes are returned: no host names, paths, IP addresses, environment variables, settings, thread
names or web application names (sessions are summed over all applications). Machine memory comes from
`/proc/meminfo` (`MemAvailable`), because the JVM's own "free" figure ignores the cache and looks far too low.
The site treats every field added after the first version as optional, so an older `status.war` still works.

## Files

| File | What it does |
|---|---|
| `src/main/java/.../Metrics.java` | Reads the JVM and Tomcat MBeans, keeps the history, writes the JSON |
| `src/main/java/.../SamplerListener.java` | Takes a sample every 5 s, and stops its thread when the app is undeployed |
| `src/main/java/.../StatusServlet.java` | Serves `/api`, GET and HEAD only, cached for 2 s |
| `src/main/webapp/WEB-INF/web.xml` | Wiring, plus the CORS filter (only `https://shinheeyoun.github.io` may call it from a browser) |
| `build.ps1` | Compiles and packages `build/status.war` |

CORS lives in this app's `web.xml` and not in Tomcat's global `conf/web.xml`, so the other applications on the same
Tomcat are not affected. To allow another site (for example a custom domain), change `cors.allowed.origins` and redeploy.

## Build

Needs a JDK 17 and `lib/servlet-api.jar`, which is only used to compile and is not committed. Copy it from the
server so that it matches the running Tomcat:

```powershell
ssh -i <key> opc@<server> 'sudo -n base64 -w0 /opt/tomcat/lib/servlet-api.jar'   # decode into lib\servlet-api.jar
```

Then:

```powershell
powershell -File server\status\build.ps1
```

## Deploy

```powershell
scp -i <key> server\status\build\status.war opc@<server>:/tmp/status.war
ssh -i <key> opc@<server> 'sudo cp /tmp/status.war /opt/tomcat/webapps/status.war && sudo chown tomcat:tomcat /opt/tomcat/webapps/status.war && sudo chmod 640 /opt/tomcat/webapps/status.war && rm /tmp/status.war'
```

Tomcat unpacks and starts it by itself within a few seconds, with no restart. Check it:

```
curl http://<server>:8080/status/api
```

To remove it, delete `webapps/status.war` and the unpacked `webapps/status/` folder.

## Checks that were run against the real server

- `GET` with no `Origin` header: 200 with JSON, no CORS headers.
- `GET` with `Origin: https://shinheeyoun.github.io`: 200 with `Access-Control-Allow-Origin`.
- `GET` with any other `Origin`: 403.
- `OPTIONS` preflight from the site: 200 with the allowed methods.
- `POST`: 405.

## How the site reaches it

GitHub Pages is served over HTTPS, and a browser refuses to call a plain `http://` address from an HTTPS page, so
the site calls the server through an HTTPS name (`SERVER_API_BASE` in `src/lib/serverApi.ts`). nginx with a
Let's Encrypt certificate sits in front of Tomcat and passes on only `/status/`; see `../HTTPS.md`.
