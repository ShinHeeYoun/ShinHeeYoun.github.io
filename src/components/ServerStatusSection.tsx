import { useEffect, useState } from 'react'
import Sparkline from './Sparkline'
import { SERVER_API_BASE, resolveStatusUrl } from '../lib/serverApi'
import { formatBytes, formatPercent, formatUptime, parseStatus, type ServerStatus } from '../lib/serverStatus'

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

function Online({ status }: { status: ServerStatus }) {
  const { heap, threads, http, cpu, gc, history } = status
  const heapPercent = heap.max ? Math.min(100, (heap.used / heap.max) * 100) : null
  const span = history.length > 1 ? history[history.length - 1].t - history[0].t : 0

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

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
      </div>

      <p className="mt-4 font-mono text-xs text-muted">
        CPU(JVM) {formatPercent(cpu.process)} · 부하 평균 {cpu.loadAverage === null ? '-' : cpu.loadAverage.toFixed(2)}
        {cpu.cores ? ` (코어 ${cpu.cores}개)` : ''} · GC {gc.count}회 / {gc.millis}ms
      </p>
    </div>
  )
}

export default function ServerStatusSection() {
  const view = useServerStatus()

  return (
    <section>
      <h2 className="text-xl font-semibold">라이브 서버 상태</h2>
      <p className="mt-2 text-sm text-muted">
        이 사이트는 정적 파일만 올린 GitHub Pages예요. 아래 숫자는 따로 운영하는 Oracle Cloud 무료 서버의 Tomcat이 알려주는 실시간 값이고, 10초마다 갱신됩니다.
      </p>
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
