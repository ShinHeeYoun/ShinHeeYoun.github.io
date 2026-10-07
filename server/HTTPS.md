# HTTPS in front of Tomcat

The site on GitHub Pages is served over HTTPS, and a browser refuses to call a plain `http://` address from an
HTTPS page (mixed content). So the Oracle Cloud server needs its own HTTPS address.

```
browser --https:443--> nginx --http--> Tomcat :8080   (only /status/ is passed on)
```

Done on 2026-10-07 on Oracle Linux 9 (aarch64), with Tomcat 9 in `/opt/tomcat` running as `tomcat.service`.

## 1. A name for the server

A free DuckDNS name, `shinheeyoun.duckdns.org`, pointing at the server's public IP. Let's Encrypt only issues
certificates for names, not bare IP addresses. Consider making the instance's public IP a *reserved* one in the
OCI console so the address cannot change.

## 2. Open the ports

- **OCI console** (done by hand): in the VCN's default security list, two ingress rules, source `0.0.0.0/0`, TCP,
  destination ports `80` and `443`. If the instance has a network security group, the rules go there too.
- **Server firewall** (runtime and permanent, without `firewall-cmd --reload`, which would also drop any rule that
  was only added at runtime):

  ```
  sudo firewall-cmd --add-service=http --add-service=https
  sudo firewall-cmd --permanent --add-service=http --add-service=https
  ```

## 3. nginx

```
sudo dnf install -y nginx                       # Oracle Linux AppStream
sudo setsebool -P httpd_can_network_connect 1   # SELinux: lets nginx connect to Tomcat on 8080
sudo cp server/nginx/shinheeyoun.conf /etc/nginx/conf.d/shinheeyoun.conf
sudo nginx -t && sudo systemctl enable --now nginx
```

The config in this repository passes only `/status/` to Tomcat and answers 404 for everything else. It also limits
each address to 5 requests per second (burst 20).

The other applications that run on the same Tomcat are separate from this site, so they are not described here.
Their paths are added to the same file on the server only (one `location ~ ^/(app1|app2)(/|$)` block that passes
the request on unchanged), and that part of the file is not committed.

## 4. The certificate

```
sudo dnf install -y --enablerepo=ol9_developer_EPEL certbot python3-certbot-nginx
sudo certbot --nginx -d shinheeyoun.duckdns.org --agree-tos --register-unsafely-without-email --redirect
sudo systemctl enable --now certbot-renew.timer
sudo certbot renew --dry-run
```

- `ol9_developer_EPEL` is enabled for that one command only and stays disabled otherwise.
- No email is registered, so Let's Encrypt cannot send expiry warnings. Renewal is automatic: `certbot-renew.timer` runs
  regularly (see `systemctl list-timers certbot-renew.timer`) and certbot renews a certificate that is close to
  expiring (30 days left, by default). `sudo certbot renew --dry-run` passed. Check `sudo certbot certificates`
  now and then.
- The certificate lasts 90 days. The first one expires on 2027-01-05.

## Checks

```
curl -i https://shinheeyoun.duckdns.org/status/api                                      # 200, valid certificate
curl -i -H "Origin: https://shinheeyoun.github.io" https://shinheeyoun.duckdns.org/status/api   # has Access-Control-Allow-Origin
curl -i -H "Origin: https://evil.example" https://shinheeyoun.duckdns.org/status/api    # 403
curl -i https://shinheeyoun.duckdns.org/anything-else/                                  # 404 unless it was added on the server
curl -i http://shinheeyoun.duckdns.org/status/api                                       # 301 to https
```

## Not done on purpose

- `http://<ip>:8080` still serves everything, as before. Close it in the OCI security list and the firewall once
  nothing depends on it.
- Behind the proxy Tomcat still sees plain http, because no `RemoteIpValve` is configured in `server.xml`. The
  proxy rewrites redirects to https, but an application that builds absolute links from `request.getScheme()`
  would write `http://`.
- The apps' own CORS is untouched: only `status` has a `CorsFilter`, in its own `web.xml`.
