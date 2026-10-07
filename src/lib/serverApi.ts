// Where the site finds the status API on the Oracle Cloud server.
//
// GitHub Pages is served over https, and a browser refuses to call a plain http address from an https page,
// so this must be an https address. The server sits behind nginx with a Let's Encrypt certificate on a
// DuckDNS name, and only /status/ is passed on to Tomcat (see server/HTTPS.md).
export const SERVER_API_BASE = 'https://shinheeyoun.duckdns.org'

// During development the Vite dev server proxies /server-api to the server (see vite.config.ts), which avoids
// CORS entirely. Returns null when the server cannot be called from this page, for example if the base were
// changed back to a plain http address: the card then says "preparing" instead of failing.
export function resolveStatusUrl(base: string, pageProtocol: string, dev: boolean): string | null {
  if (dev) return '/server-api/status/api'
  if (pageProtocol === 'https:' && base.startsWith('http:')) return null
  return `${base}/status/api`
}
