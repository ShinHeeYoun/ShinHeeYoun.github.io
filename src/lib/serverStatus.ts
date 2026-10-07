// What the status card needs from the server's /status/api response, and how to show it.

export type HistoryPoint = { t: number; heap: number; threads: number; busy: number | null }

export type ServerStatus = {
  tomcat: string
  java: string
  uptimeMs: number
  heap: { used: number; committed: number; max: number | null }
  threads: { live: number; peak: number; daemon: number }
  http: { threadsBusy: number | null; threadsMax: number | null; requests: number | null; errors: number | null }
  gc: { count: number; millis: number }
  cpu: { process: number | null; system: number | null; cores: number | null; loadAverage: number | null }
  history: HistoryPoint[]
}

const isObject = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null
const num = (value: unknown): number | null => (typeof value === 'number' && Number.isFinite(value) ? value : null)
const text = (value: unknown) => (typeof value === 'string' ? value : '')
const obj = (value: unknown): Record<string, unknown> => (isObject(value) ? value : {})

// The response comes from another server, so nothing in it is trusted: numbers must be numbers and text must be
// text. Returns null when the essentials (uptime, heap, threads) are missing.
export function parseStatus(raw: unknown): ServerStatus | null {
  if (!isObject(raw)) return null
  const heap = obj(raw.heap)
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
    for (const point of raw.history) {
      const t = num(obj(point).t)
      const pointHeap = num(obj(point).heap)
      const pointThreads = num(obj(point).threads)
      if (t !== null && pointHeap !== null && pointThreads !== null) {
        history.push({ t, heap: pointHeap, threads: pointThreads, busy: num(obj(point).busy) })
      }
    }
  }

  return {
    tomcat: text(raw.tomcat),
    java: text(raw.java),
    uptimeMs,
    heap: { used: heapUsed, committed: num(heap.committed) ?? heapUsed, max: num(heap.max) },
    threads: { live, peak: num(threads.peak) ?? live, daemon: num(threads.daemon) ?? 0 },
    http: {
      threadsBusy: num(http.threadsBusy),
      threadsMax: num(http.threadsMax),
      requests: num(http.requests),
      errors: num(http.errors),
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

// A load between 0 and 1 as a percentage: 0.006 -> "0.6%", 0.5 -> "50%".
export function formatPercent(fraction: number | null): string {
  if (fraction === null) return '-'
  const percent = fraction * 100
  return `${percent < 10 ? percent.toFixed(1).replace(/\.0$/, '') : Math.round(percent)}%`
}
