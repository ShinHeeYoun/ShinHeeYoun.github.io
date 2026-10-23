import { describe, it, expect } from 'vitest'
import { formatBytes, formatMillis, formatPercent, formatRate, formatUptime, parseStatus, requestRates } from './serverStatus'
import { SERVER_API_BASE, resolveStatusUrl, scoresBase } from './serverApi'

// What the server's /status/api returns, trimmed to one history point.
const SAMPLE = {
  tomcat: 'Apache Tomcat/9.0.122',
  java: '17.0.20.1',
  vm: 'OpenJDK 64-Bit Server VM',
  vendor: 'Oracle Corporation',
  now: 1791352589441,
  startedAt: 1791351000000,
  uptimeMs: 1589441,
  os: { name: 'Linux', arch: 'amd64', uptimeMs: 9_000_000 },
  host: {
    memTotal: 8_000_000_000,
    memAvailable: 6_000_000_000,
    swapTotal: 4_000_000_000,
    swapFree: 3_900_000_000,
    diskTotal: 50_000_000_000,
    diskUsable: 30_000_000_000,
    fdOpen: 120,
    fdMax: 65536,
  },
  heap: { used: 182506016, committed: 536870912, max: 2076180480 },
  nonHeapUsed: 120000000,
  jvm: { metaspace: 60_000_000, classes: 9000, threadStates: { runnable: 10, waiting: 20, timedWaiting: 5, blocked: 1 } },
  threads: { live: 36, peak: 40, daemon: 21 },
  http: {
    threadsBusy: 1,
    threadsMax: 200,
    requests: 31,
    errors: 16,
    avgMs: 4.5,
    maxMs: 120,
    bytesIn: 5000,
    bytesOut: 90000,
    connections: 3,
    sessions: 2,
  },
  gc: { count: 33, millis: 644 },
  cpu: { process: 0.006, system: 0.007, cores: 1, loadAverage: 0.18 },
  history: [{ t: 1791352589441, heap: 182506016, threads: 36, busy: 0, cpu: 0.007, req: 31, mem: 2_000_000_000 }],
}

describe('parseStatus', () => {
  it('reads a complete response', () => {
    const status = parseStatus(SAMPLE)
    expect(status).not.toBeNull()
    expect(status!.tomcat).toBe('Apache Tomcat/9.0.122')
    expect(status!.uptimeMs).toBe(1589441)
    expect(status!.heap).toEqual({ used: 182506016, committed: 536870912, max: 2076180480 })
    expect(status!.threads.live).toBe(36)
    expect(status!.http.requests).toBe(31)
    expect(status!.history).toEqual([
      { t: 1791352589441, heap: 182506016, threads: 36, busy: 0, cpu: 0.007, req: 31, mem: 2_000_000_000 },
    ])
  })

  it('reads the host, JVM and HTTP details', () => {
    const status = parseStatus(SAMPLE)!
    expect(status.vm).toBe('OpenJDK 64-Bit Server VM')
    expect(status.os).toEqual({ name: 'Linux', arch: 'amd64', uptimeMs: 9_000_000 })
    expect(status.host.memAvailable).toBe(6_000_000_000)
    expect(status.host.diskUsable).toBe(30_000_000_000)
    expect(status.host.fdMax).toBe(65536)
    expect(status.nonHeapUsed).toBe(120000000)
    expect(status.jvm.metaspace).toBe(60_000_000)
    expect(status.jvm.threadStates).toEqual({ runnable: 10, waiting: 20, timedWaiting: 5, blocked: 1 })
    expect(status.http.avgMs).toBe(4.5)
    expect(status.http.bytesOut).toBe(90000)
    expect(status.http.sessions).toBe(2)
  })

  it('still understands an older server that sends only the first fields', () => {
    const old = {
      tomcat: 'Apache Tomcat/9.0.122',
      java: '17.0.20.1',
      uptimeMs: 1000,
      heap: { used: 1, committed: 2, max: 3 },
      threads: { live: 4, peak: 5, daemon: 1 },
    }
    const status = parseStatus(old)!
    expect(status.os).toEqual({ name: '', arch: '', uptimeMs: null })
    expect(status.host.memTotal).toBeNull()
    expect(status.jvm.threadStates.runnable).toBeNull()
    expect(status.http.avgMs).toBeNull()
  })

  it('keeps unavailable numbers as null instead of failing', () => {
    const status = parseStatus({
      ...SAMPLE,
      heap: { ...SAMPLE.heap, max: null },
      http: { threadsBusy: null, threadsMax: null, requests: null, errors: null },
      cpu: { process: null, system: null, cores: 1, loadAverage: null },
    })
    expect(status!.heap.max).toBeNull()
    expect(status!.http.threadsBusy).toBeNull()
    expect(status!.cpu.process).toBeNull()
  })

  it('rejects anything that is not the expected shape', () => {
    expect(parseStatus(null)).toBeNull()
    expect(parseStatus('hello')).toBeNull()
    expect(parseStatus({})).toBeNull()
    expect(parseStatus({ ...SAMPLE, uptimeMs: 'soon' })).toBeNull()
    expect(parseStatus({ ...SAMPLE, heap: undefined })).toBeNull()
  })

  it('drops history points that are not numbers and tolerates a missing history', () => {
    const status = parseStatus({
      ...SAMPLE,
      history: [{ t: 1, heap: 2, threads: 3, busy: null }, { t: 'x', heap: 2, threads: 3 }, 'junk'],
    })
    expect(status!.history).toEqual([{ t: 1, heap: 2, threads: 3, busy: null, cpu: null, req: null, mem: null }])
    expect(parseStatus({ ...SAMPLE, history: undefined })!.history).toEqual([])
  })

  it('does not trust text that is not text', () => {
    const status = parseStatus({ ...SAMPLE, tomcat: { evil: true }, java: 17, os: { name: ['x'], arch: 5 } })
    expect(status!.tomcat).toBe('')
    expect(status!.java).toBe('')
    expect(status!.os.name).toBe('')
    expect(status!.os.arch).toBe('')
  })
})

describe('formatUptime', () => {
  it('shows the two largest units', () => {
    expect(formatUptime(12_000)).toBe('12초')
    expect(formatUptime(35 * 60_000)).toBe('35분')
    expect(formatUptime((4 * 60 + 12) * 60_000)).toBe('4시간 12분')
    expect(formatUptime((3 * 24 + 4) * 3_600_000)).toBe('3일 4시간')
  })

  it('never goes negative', () => {
    expect(formatUptime(-5)).toBe('0초')
  })
})

describe('formatBytes', () => {
  it('uses MB below 1 GB and GB above', () => {
    expect(formatBytes(182_506_016)).toBe('174 MB')
    expect(formatBytes(2_076_180_480)).toBe('1.9 GB')
    expect(formatBytes(512 * 1024)).toBe('512 KB')
  })
})

describe('formatMillis', () => {
  it('shows milliseconds below a second and seconds above', () => {
    expect(formatMillis(4.5)).toBe('4.5ms')
    expect(formatMillis(120)).toBe('120ms')
    expect(formatMillis(2400)).toBe('2.4초')
    expect(formatMillis(null)).toBe('-')
  })
})

describe('formatRate', () => {
  it('keeps small rates readable', () => {
    expect(formatRate(0)).toBe('0/s')
    expect(formatRate(0.2)).toBe('0.2/s')
    expect(formatRate(0.123)).toBe('0.12/s')
    expect(formatRate(12.4)).toBe('12/s')
  })
})

describe('requestRates', () => {
  const point = (t: number, req: number | null) => ({ t, heap: 0, threads: 0, busy: null, cpu: null, req, mem: null })

  it('turns a running request count into requests per second between samples', () => {
    expect(requestRates([point(0, 10), point(5000, 15), point(10000, 15), point(15000, 30)])).toEqual([1, 0, 3])
  })

  it('skips gaps and counters that went back to zero after a restart', () => {
    expect(requestRates([point(0, 100), point(5000, 2), point(10000, 7)])).toEqual([1])
    expect(requestRates([point(0, null), point(5000, 5), point(10000, 10)])).toEqual([1])
  })

  it('needs at least two points', () => {
    expect(requestRates([])).toEqual([])
    expect(requestRates([point(0, 1)])).toEqual([])
  })
})

describe('formatPercent', () => {
  it('turns a 0..1 load into a percentage, and null into a dash', () => {
    expect(formatPercent(0.006)).toBe('0.6%')
    expect(formatPercent(0.5)).toBe('50%')
    expect(formatPercent(null)).toBe('-')
  })
})

describe('SERVER_API_BASE', () => {
  it('can be called from the https site, or the card would never show anything there', () => {
    expect(resolveStatusUrl(SERVER_API_BASE, 'https:', false)).toBe(`${SERVER_API_BASE}/status/api`)
  })
})

describe('resolveStatusUrl', () => {
  const BASE = 'http://161.33.194.138:8080'

  it('uses the Vite proxy during development, whatever the base is', () => {
    expect(resolveStatusUrl(BASE, 'http:', true)).toBe('/server-api/status/api')
  })

  it('refuses to call a plain-http server from an https page (the browser would block it)', () => {
    expect(resolveStatusUrl(BASE, 'https:', false)).toBeNull()
  })

  it('calls the server directly once it has an https address', () => {
    expect(resolveStatusUrl('https://example.duckdns.org', 'https:', false)).toBe('https://example.duckdns.org/status/api')
  })

  it('allows plain http between plain http pages', () => {
    expect(resolveStatusUrl(BASE, 'http:', false)).toBe(`${BASE}/status/api`)
  })
})

describe('scoresBase', () => {
  it('is the server itself once the site is published', () => {
    expect(scoresBase(SERVER_API_BASE, 'https:', false)).toBe(SERVER_API_BASE)
  })

  it('goes through the Vite proxy during development, like the status card', () => {
    expect(scoresBase(SERVER_API_BASE, 'http:', true)).toBe('/server-api')
  })

  it('is null when a plain-http server could not be called from an https page', () => {
    expect(scoresBase('http://161.33.194.138:8080', 'https:', false)).toBeNull()
    expect(scoresBase('http://161.33.194.138:8080', 'http:', false)).toBe('http://161.33.194.138:8080')
  })
})
