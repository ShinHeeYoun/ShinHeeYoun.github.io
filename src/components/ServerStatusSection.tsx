import { useEffect, useState, type ReactNode } from 'react'
import Sparkline from './Sparkline'
import { SERVER_API_BASE, resolveStatusUrl } from '../lib/serverApi'
import {
  formatBytes,
  formatMillis,
  formatPercent,
  formatRate,
  formatUptime,
  parseStatus,
  requestRates,
  type ServerStatus,
} from '../lib/serverStatus'

const POLL_MS = 10_000
const TIMEOUT_MS = 5_000

type View =
  | { kind: 'loading' }
  | { kind: 'preparing' } // the server cannot be called from this page yet (see serverApi.ts)
  | { kind: 'offline' }
  | { kind: 'online'; status: ServerStatus }

// Asks the server for its status now and every 10 seconds, but only while the tab is visible.
// A server that is down must never break the page, so every failure just becomes "offline".
function useServerStatus(): View {
  const url = resolveStatusUrl(SERVER_API_BASE, window.location.protocol, import.meta.env.DEV)
  const [view, setView] = useState<View>(url ? { kind: 'loading' } : { kind: 'preparing' })

  useEffect(() => {
    if (!url) return
    let stopped = false
    let timer = 0
    let controller: AbortController | undefined

    async function load() {
      controller = new AbortController()
      const timeout = window.setTimeout(() => controller?.abort(), TIMEOUT_MS)
      try {
        const response = await fetch(url!, { signal: controller.signal })
        const status = response.ok ? parseStatus(await response.json()) : null
        if (!stopped) setView(status ? { kind: 'online', status } : { kind: 'offline' })
      } catch {
        if (!stopped) setView({ kind: 'offline' })
      } finally {
        window.clearTimeout(timeout)
      }
    }

    function schedule() {
      timer = window.setTimeout(async () => {
        if (document.visibilityState === 'visible') await load()
        if (!stopped) schedule()
      }, POLL_MS)
    }

    function onVisible() {
      if (document.visibilityState === 'visible') void load()
    }

    void load().then(() => {
      if (!stopped) schedule()
    })
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      stopped = true
      window.clearTimeout(timer)
      controller?.abort()
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [url])

  return view
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div>
      <div className="font-mono text-xs text-muted">{label}</div>
      <div className="font-mono text-lg font-semibold">{value}</div>
      {sub && <div className="font-mono text-xs text-muted">{sub}</div>}
    </div>
  )
}

// A thin bar showing how full something is.
function Bar({ label, percent }: { label: string; percent: number }) {
  return (
    <div role="img" aria-label={`${label} ${Math.round(percent)}%`} className="mt-1 h-1.5 w-full overflow-hidden rounded bg-border">
      <div className="h-full bg-accent" style={{ width: `${Math.min(100, percent)}%` }} />
    </div>
  )
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-xs font-semibold text-accent">{title}</h3>
      <dl className="mt-2 space-y-1.5">{children}</dl>
    </div>
  )
}

function Row({ label, value, bar }: { label: string; value: string; bar?: { label: string; percent: number } | null }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 font-mono text-xs">
        <dt className="shrink-0 text-muted">{label}</dt>
        <dd className="text-right">{value}</dd>
      </div>
      {bar && <Bar label={bar.label} percent={bar.percent} />}
    </div>
  )
}

const dash = (value: number | null, format: (n: number) => string) => (value === null ? '-' : format(value))
const count = (value: number | null) => dash(value, (n) => n.toLocaleString('ko-KR'))
const bytes = (value: number | null) => dash(value, formatBytes)

// "used / total" and how full it is, when both are known.
function usage(used: number | null, total: number | null): { text: string; percent: number | null } {
  if (used === null || total === null || total <= 0) return { text: '-', percent: null }
  return { text: `${formatBytes(used)} / ${formatBytes(total)}`, percent: (used / total) * 100 }
}

function Online({ status }: { status: ServerStatus }) {
  const { heap, threads, http, cpu, gc, history, host, jvm, os } = status
  const heapPercent = heap.max ? Math.min(100, (heap.used / heap.max) * 100) : null
  const span = history.length > 1 ? history[history.length - 1].t - history[0].t : 0

  const memUsed = host.memTotal !== null && host.memAvailable !== null ? host.memTotal - host.memAvailable : null
  const swapUsed = host.swapTotal !== null && host.swapFree !== null ? host.swapTotal - host.swapFree : null
  const diskUsed = host.diskTotal !== null && host.diskUsable !== null ? host.diskTotal - host.diskUsable : null
  const mem = usage(memUsed, host.memTotal)
  const swap = usage(swapUsed, host.swapTotal)
  const disk = usage(diskUsed, host.diskTotal)
  const heapUsage = usage(heap.used, heap.max)

  const rates = requestRates(history)
  const lastRate = rates.length > 0 ? rates[rates.length - 1] : null
  const cpuSeries = history.filter((point) => point.cpu !== null).map((point) => point.cpu as number)
  const memSeries = history.filter((point) => point.mem !== null).map((point) => point.mem as number)
  const busySeries = history.filter((point) => point.busy !== null).map((point) => point.busy as number)
  const lastOf = (series: number[]) => (series.length > 0 ? series[series.length - 1] : null)
  const states = jvm.threadStates
  const stateText = [
    ['실행', states.runnable],
    ['대기', states.waiting],
    ['시간 대기', states.timedWaiting],
    ['차단', states.blocked],
  ]
    .map(([name, value]) => `${name} ${value ?? '-'}`)
    .join(' · ')

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono text-sm">
        <span>
          <span className="text-accent" aria-hidden="true">
            ●{' '}
          </span>
          online
        </span>
        <span className="text-muted">
          {status.tomcat} · Java {status.java}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Stat label="업타임" value={formatUptime(status.uptimeMs)} sub="Tomcat 시작 후" />
        <div>
          <Stat
            label="힙 메모리"
            value={formatBytes(heap.used)}
            sub={heap.max ? `최대 ${formatBytes(heap.max)}` : undefined}
          />
          {heapPercent !== null && (
            <div
              role="img"
              aria-label={`힙 사용률 ${Math.round(heapPercent)}%`}
              className="mt-1 h-1.5 w-full overflow-hidden rounded bg-border"
            >
              <div className="h-full bg-accent" style={{ width: `${heapPercent}%` }} />
            </div>
          )}
        </div>
        <Stat label="스레드" value={String(threads.live)} sub={`최고 ${threads.peak}개`} />
        <Stat
          label="HTTP 요청"
          value={http.requests === null ? '-' : http.requests.toLocaleString('ko-KR')}
          sub={`오류 ${http.errors ?? '-'} · 처리 중 ${http.threadsBusy ?? '-'}/${http.threadsMax ?? '-'}`}
        />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Sparkline
          label="힙 사용량"
          current={formatBytes(heap.used)}
          window={formatUptime(span)}
          values={history.map((point) => point.heap)}
        />
        <Sparkline
          label="스레드 수"
          current={`${threads.live}개`}
          window={formatUptime(span)}
          values={history.map((point) => point.threads)}
        />
        <Sparkline
          label="CPU (서버 전체)"
          current={formatPercent(lastOf(cpuSeries) ?? cpu.system)}
          window={formatUptime(span)}
          values={cpuSeries}
        />
        <Sparkline
          label="서버 메모리 사용량"
          current={bytes(lastOf(memSeries) ?? memUsed)}
          window={formatUptime(span)}
          values={memSeries}
        />
        <Sparkline
          label="초당 요청"
          current={lastRate === null ? '-' : formatRate(lastRate)}
          window={formatUptime(span)}
          values={rates}
        />
        <Sparkline
          label="처리 중인 요청"
          current={dash(lastOf(busySeries), (n) => `${n}개`)}
          window={formatUptime(span)}
          values={busySeries}
        />
      </div>

      <div className="mt-6 grid gap-6 border-t border-border pt-5 md:grid-cols-3">
        <Group title="서버 (호스트)">
          <Row label="운영체제" value={[os.name, os.arch].filter(Boolean).join(' ') || '-'} />
          <Row label="서버 가동" value={dash(os.uptimeMs, formatUptime)} />
          <Row
            label="메모리"
            value={mem.text}
            bar={mem.percent === null ? null : { label: '서버 메모리 사용률', percent: mem.percent }}
          />
          <Row
            label="스왑"
            value={host.swapTotal === 0 ? '없음' : swap.text}
            bar={swap.percent === null || host.swapTotal === 0 ? null : { label: '스왑 사용률', percent: swap.percent }}
          />
          <Row
            label="디스크"
            value={disk.text}
            bar={disk.percent === null ? null : { label: '디스크 사용률', percent: disk.percent }}
          />
          <Row label="CPU" value={`서버 ${formatPercent(cpu.system)} · JVM ${formatPercent(cpu.process)}`} />
          <Row
            label="코어 · 부하 평균"
            value={`${cpu.cores ?? '-'}개 · ${cpu.loadAverage === null ? '-' : cpu.loadAverage.toFixed(2)}`}
          />
          <Row label="열린 파일" value={host.fdOpen === null ? '-' : `${count(host.fdOpen)} / ${count(host.fdMax)}`} />
        </Group>

        <Group title="JVM">
          <Row label="가상 머신" value={[status.vm, status.vendor].filter(Boolean).join(' · ') || '-'} />
          <Row
            label="힙"
            value={heapUsage.text}
            bar={heapUsage.percent === null ? null : { label: '힙 사용률', percent: heapUsage.percent }}
          />
          <Row label="힙 확보량" value={formatBytes(heap.committed)} />
          <Row label="힙 밖 메모리" value={bytes(status.nonHeapUsed)} />
          <Row label="메타스페이스" value={bytes(jvm.metaspace)} />
          <Row label="로드된 클래스" value={count(jvm.classes)} />
          <Row label="스레드" value={`${threads.live}개 (최고 ${threads.peak} · 데몬 ${threads.daemon})`} />
          <Row label="스레드 상태" value={stateText} />
          <Row label="GC" value={`${gc.count.toLocaleString('ko-KR')}회 · ${gc.millis.toLocaleString('ko-KR')}ms`} />
        </Group>

        <Group title="HTTP · Tomcat">
          <Row label="요청 수" value={count(http.requests)} />
          <Row label="오류 응답" value={count(http.errors)} />
          <Row label="평균 처리 시간" value={formatMillis(http.avgMs)} />
          <Row label="가장 느렸던 요청" value={formatMillis(http.maxMs)} />
          <Row label="받은 데이터" value={bytes(http.bytesIn)} />
          <Row label="보낸 데이터" value={bytes(http.bytesOut)} />
          <Row label="연결 수" value={count(http.connections)} />
          <Row label="처리 스레드" value={`${http.threadsBusy ?? '-'} / ${http.threadsMax ?? '-'}`} />
          <Row label="세션 수" value={count(http.sessions)} />
        </Group>
      </div>

      <p className="mt-5 font-mono text-[11px] text-muted">
        요청 수와 처리 시간에는 이 카드가 10초마다 보내는 요청도 포함됩니다. 호스트 이름, 경로, IP, 앱 이름은 보여주지
        않습니다.
      </p>
    </div>
  )
}

export default function ServerStatusSection() {
  const view = useServerStatus()

  return (
    <section>
      <h2 className="text-xl font-semibold">라이브 서버 상태</h2>
      <div className="card mt-4">
        {view.kind === 'online' && <Online status={view.status} />}
        {view.kind === 'loading' && <p className="font-mono text-sm text-muted">서버에 물어보는 중...</p>}
        {view.kind === 'preparing' && <p className="font-mono text-sm text-muted">서버 연결을 준비하고 있습니다.</p>}
        {view.kind === 'offline' && (
          <p className="font-mono text-sm text-muted">
            서버에 연결할 수 없습니다. 점검 중이거나 꺼져 있을 수 있어요. 이 사이트의 다른 기능에는 영향이 없습니다.
          </p>
        )}
      </div>
    </section>
  )
}
