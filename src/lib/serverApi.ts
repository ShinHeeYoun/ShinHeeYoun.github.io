// Where the site finds the status API on the Oracle Cloud server.
//
// Until the server has an https address this is its plain http address. A page served over https (GitHub Pages)
// cannot call an http address, because the browser blocks it, so there the card shows "preparing" instead of
// failing. Once the server has an https domain, change this to e.g. 'https://name.duckdns.org' and nothing else.
export const SERVER_API_BASE = 'http://161.33.194.138:8080'

// During development the Vite dev server proxies /server-api to the server (see vite.config.ts), which avoids
// CORS entirely. Returns null when the server cannot be called from this page.
export function resolveStatusUrl(base: string, pageProtocol: string, dev: boolean): string | null {
  if (dev) return '/server-api/status/api'
  if (pageProtocol === 'https:' && base.startsWith('http:')) return null
  return `${base}/status/api`
}
