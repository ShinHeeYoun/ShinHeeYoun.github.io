import { describe, it, expect } from 'vitest'
import { formatBytes, formatPercent, formatUptime, parseStatus } from './serverStatus'
import { SERVER_API_BASE, resolveStatusUrl } from './serverApi'

// What the server's /status/api really returned, trimmed to one history point.
const SAMPLE = {
  tomcat: 'Apache Tomcat/9.0.122',
  java: '17.0.20.1',
  now: 1791352589441,
  startedAt: 1791351000000,
  uptimeMs: 1589441,
  heap: { used: 182506016, committed: 536870912, max: 2076180480 },
  nonHeapUsed: 120000000,
  threads: { live: 36, peak: 40, daemon: 21 },
  http: { threadsBusy: 1, threadsMax: 200, requests: 31, errors: 16 },
  gc: { count: 33, millis: 644 },
  cpu: { process: 0.006, system: 0.007, cores: 1, loadAverage: 0.18 },
  history: [{ t: 1791352589441, heap: 182506016, threads: 36, busy: 0 }],
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
    expect(status!.history).toEqual([{ t: 1791352589441, heap: 182506016, threads: 36, busy: 0 }])
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
    expect(status!.history).toEqual([{ t: 1, heap: 2, threads: 3, busy: null }])
    expect(parseStatus({ ...SAMPLE, history: undefined })!.history).toEqual([])
  })

  it('does not trust text that is not text', () => {
    const status = parseStatus({ ...SAMPLE, tomcat: { evil: true }, java: 17 })
    expect(status!.tomcat).toBe('')
    expect(status!.java).toBe('')
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
