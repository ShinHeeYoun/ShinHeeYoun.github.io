// What the status card needs from the server's /status/api response, and how to show it.

export type HistoryPoint = {
  t: number
  heap: number
  threads: number
  busy: number | null
  cpu: number | null // whole-machine CPU load, 0..1
  req: number | null // requests served since Tomcat started (a running count)
  mem: number | null // machine memory in use, bytes
}

export type ServerStatus = {
  tomcat: string
  java: string
  vm: string
  vendor: string
  uptimeMs: number
  os: { name: string; arch: string; uptimeMs: number | null }
  host: {
    memTotal: number | null
    memAvailable: number | null
    swapTotal: number | null
    swapFree: number | null
    diskTotal: number | null
    diskUsable: number | null
    fdOpen: number | null
    fdMax: number | null
  }
  heap: { used: number; committed: number; max: number | null }
  nonHeapUsed: number | null
  jvm: {
    metaspace: number | null
    classes: number | null
    threadStates: { runnable: number | null; waiting: number | null; timedWaiting: number | null; blocked: number | null }
  }
  threads: { live: number; peak: number; daemon: number }
  http: {
    threadsBusy: number | null
    threadsMax: number | null
    requests: number | null
    errors: number | null
    avgMs: number | null
    maxMs: number | null
    bytesIn: number | null
    bytesOut: number | null
    connections: number | null
    sessions: number | null
  }
  gc: { count: number; millis: number }
  cpu: { process: number | null; system: number | null; cores: number | null; loadAverage: number | null }
  history: HistoryPoint[]
}

const isObject = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null
const num = (value: unknown): number | null => (typeof value === 'number' && Number.isFinite(value) ? value : null)
const text = (value: unknown) => (typeof value === 'string' ? value : '')
const obj = (value: unknown): Record<string, unknown> => (isObject(value) ? value : {})

// The response comes from another server, so nothing in it is trusted: numbers must be numbers and text must be
// text. Returns null when the essentials (uptime, heap, threads) are missing. Everything added later is optional,
// so a server that has not been updated yet still shows the card.
export function parseStatus(raw: unknown): ServerStatus | null {
  if (!isObject(raw)) return null
  const os = obj(raw.os)
  const host = obj(raw.host)
  const heap = obj(raw.heap)
  const jvm = obj(raw.jvm)
  const states = obj(jvm.threadStates)
  const threads = obj(raw.threads)
  const http = obj(raw.http)
  const gc = obj(raw.gc)
  const cpu = obj(raw.cpu)

  const uptimeMs = num(raw.uptimeMs)
  const heapUsed = num(heap.used)
  const live = num(threads.live)
  if (uptimeMs === null || heapUsed === null || live === null) return null

  const history: HistoryPoint[] = []
  if (Array.isArray(raw.history)) {
    for (const entry of raw.history) {
      const point = obj(entry)
      const t = num(point.t)
      const pointHeap = num(point.heap)
      const pointThreads = num(point.threads)
      if (t !== null && pointHeap !== null && pointThreads !== null) {
        history.push({
          t,
          heap: pointHeap,
          threads: pointThreads,
          busy: num(point.busy),
          cpu: num(point.cpu),
          req: num(point.req),
          mem: num(point.mem),
        })
      }
    }
  }

  return {
    tomcat: text(raw.tomcat),
    java: text(raw.java),
    vm: text(raw.vm),
    vendor: text(raw.vendor),
    uptimeMs,
    os: { name: text(os.name), arch: text(os.arch), uptimeMs: num(os.uptimeMs) },
    host: {
      memTotal: num(host.memTotal),
      memAvailable: num(host.memAvailable),
      swapTotal: num(host.swapTotal),
      swapFree: num(host.swapFree),
      diskTotal: num(host.diskTotal),
      diskUsable: num(host.diskUsable),
      fdOpen: num(host.fdOpen),
      fdMax: num(host.fdMax),
    },
    heap: { used: heapUsed, committed: num(heap.committed) ?? heapUsed, max: num(heap.max) },
    nonHeapUsed: num(raw.nonHeapUsed),
    jvm: {
      metaspace: num(jvm.metaspace),
      classes: num(jvm.classes),
      threadStates: {
        runnable: num(states.runnable),
        waiting: num(states.waiting),
        timedWaiting: num(states.timedWaiting),
        blocked: num(states.blocked),
      },
    },
    threads: { live, peak: num(threads.peak) ?? live, daemon: num(threads.daemon) ?? 0 },
    http: {
      threadsBusy: num(http.threadsBusy),
      threadsMax: num(http.threadsMax),
      requests: num(http.requests),
      errors: num(http.errors),
      avgMs: num(http.avgMs),
      maxMs: num(http.maxMs),
      bytesIn: num(http.bytesIn),
      bytesOut: num(http.bytesOut),
      connections: num(http.connections),
      sessions: num(http.sessions),
    },
    gc: { count: num(gc.count) ?? 0, millis: num(gc.millis) ?? 0 },
    cpu: {
      process: num(cpu.process),
      system: num(cpu.system),
      cores: num(cpu.cores),
      loadAverage: num(cpu.loadAverage),
    },
    history,
  }
}

// Requests per second between neighbouring samples, from the running request count. A pair is skipped when
// either count is missing or the count went down (Tomcat restarted), so the line never shows a false spike.
export function requestRates(history: HistoryPoint[]): number[] {
  const rates: number[] = []
  for (let i = 1; i < history.length; i++) {
    const before = history[i - 1]
    const after = history[i]
    if (before.req === null || after.req === null) continue
    const seconds = (after.t - before.t) / 1000
    const delta = after.req - before.req
    if (seconds <= 0 || delta < 0) continue
    rates.push(delta / seconds)
  }
  return rates
}

export function formatUptime(ms: number): string {
  const seconds = Math.max(0, Math.floor(ms / 1000))
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  if (days > 0) return `${days}일 ${hours}시간`
  if (hours > 0) return `${hours}시간 ${minutes}분`
  if (minutes > 0) return `${minutes}분`
  return `${seconds}초`
}

export function formatBytes(bytes: number): string {
  const mb = bytes / (1024 * 1024)
  if (mb >= 1024) return `${(mb / 1024).toFixed(1)} GB`
  if (mb >= 1) return `${Math.round(mb)} MB`
  return `${Math.round(bytes / 1024)} KB`
}

export function formatMillis(ms: number | null): string {
  if (ms === null) return '-'
  if (ms >= 1000) return `${(ms / 1000).toFixed(1)}초`
  return `${Number.isInteger(ms) ? ms : ms.toFixed(1)}ms`
}

// Requests per second: 0.2 -> "0.2/s", 0.123 -> "0.12/s", 12.4 -> "12/s".
export function formatRate(perSecond: number): string {
  if (perSecond === 0) return '0/s'
  if (perSecond >= 10) return `${Math.round(perSecond)}/s`
  return `${Number(perSecond.toFixed(2))}/s`
}

// A load between 0 and 1 as a percentage: 0.006 -> "0.6%", 0.5 -> "50%".
export function formatPercent(fraction: number | null): string {
  if (fraction === null) return '-'
  const percent = fraction * 100
  return `${percent < 10 ? percent.toFixed(1).replace(/\.0$/, '') : Math.round(percent)}%`
}
