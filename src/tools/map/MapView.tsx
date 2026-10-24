import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GOOGLE_MAPS_KEY } from './config'
import { loadGoogleMaps } from './loader'
import MapCanvas, { type Jump, type LineSpec, type MarkerSpec } from './MapCanvas'
import { ExplorePanel, MeasurePanel, QuizPanel, type WeatherState } from './MapPanels'
import {
  WORLD_VIEW,
  clampLatitude,
  formatCoordinates,
  plainCoordinates,
  type LatLng,
  type Place,
} from './places'
import { answer, cryptoRng, isFinished, newQuiz, next, parseBest, totalScore, type Quiz } from './quiz'
import { parseView, viewParams, type View } from './shareLink'
import { fetchWeather } from './weather'

type Mode = 'explore' | 'measure' | 'quiz'
const MODES: { id: Mode; label: string }[] = [
  { id: 'explore', label: '탐색' },
  { id: 'measure', label: '거리·면적 재기' },
  { id: 'quiz', label: '지도 퀴즈' },
]

const BEST_KEY = 'map_quiz_best'
const isDark = () => document.documentElement.classList.contains('dark')

function loadBest(): number {
  try {
    return parseBest(localStorage.getItem(BEST_KEY))
  } catch {
    return 0
  }
}

const button =
  'rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent disabled:opacity-50'

function locateError(code: number): string {
  if (code === 1) return '위치 권한이 거부되었습니다. 브라우저 설정에서 이 사이트의 위치 권한을 허용해 주세요.'
  if (code === 3) return '위치를 찾는 데 너무 오래 걸렸습니다. 다시 시도해 주세요.'
  return '현재 위치를 알 수 없습니다.'
}

export default function MapView() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'ready' | 'refused' | 'error'>(GOOGLE_MAPS_KEY ? 'loading' : 'error')
  const [dark, setDark] = useState(isDark)
  const [mode, setMode] = useState<Mode>('explore')
  const [jump, setJump] = useState<Jump | null>(null)

  // explore
  const [picked, setPicked] = useState<LatLng | null>(null)
  const [weather, setWeather] = useState<WeatherState>({ status: 'idle' })
  const [now, setNow] = useState(() => new Date())
  const [copied, setCopied] = useState<'coords' | 'link' | null>(null)
  const [locating, setLocating] = useState(false)
  const [locateMessage, setLocateMessage] = useState<string | null>(null)

  // measure
  const [points, setPoints] = useState<LatLng[]>([])
  const [closed, setClosed] = useState(false)

  // quiz
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [best, setBest] = useState(loadBest)
  const [newRecord, setNewRecord] = useState(false)

  // Where the map is. The address can ask for a view (a shared link); it is read once, when the page opens.
  const view = useRef<View | null>(null)
  if (view.current === null) view.current = parseView(searchParams) ?? { ...WORLD_VIEW, mapTypeId: 'roadmap' }
  const lastParams = useRef('')
  const nonce = useRef(0)
  const locked = mode === 'quiz'
  const lockedRef = useRef(locked)
  lockedRef.current = locked

  useEffect(() => {
    if (!GOOGLE_MAPS_KEY) return
    let alive = true
    loadGoogleMaps(GOOGLE_MAPS_KEY, () => alive && setStatus('refused')).then(
      () => alive && setStatus((current) => (current === 'refused' ? current : 'ready')),
      () => alive && setStatus('error'),
    )
    return () => {
      alive = false
    }
  }, [])

  // The theme is switched in the navigation bar, which is outside this page: watch the page for it.
  useEffect(() => {
    const observer = new MutationObserver(() => setDark(isDark()))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // The time and weather at the picked point. Clicking quickly asks only for the last place clicked.
  useEffect(() => {
    if (!picked) {
      setWeather({ status: 'idle' })
      return
    }
    let cancelled = false
    setWeather({ status: 'loading' })
    const timer = window.setTimeout(() => {
      fetchWeather(picked).then(
        (data) => !cancelled && setWeather({ status: 'ready', weather: data }),
        () => !cancelled && setWeather({ status: 'error' }),
      )
    }, 300)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [picked])

  // The clock of the picked place keeps time.
  useEffect(() => {
    if (weather.status !== 'ready') return
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [weather.status])

  // A shape needs three points: with fewer, "closed" is switched off, so that it does not come back by itself.
  useEffect(() => {
    if (points.length < 3) setClosed(false)
  }, [points.length])

  function handleView(nextView: View) {
    // The quiz changes the map type; that is not the player's choice and does not go into the address.
    const mapTypeId = lockedRef.current ? (view.current?.mapTypeId ?? 'roadmap') : nextView.mapTypeId
    view.current = { ...nextView, mapTypeId }
    if (lockedRef.current) return
    const text = viewParams(view.current).toString()
    if (text !== lastParams.current) {
      lastParams.current = text
      setSearchParams(new URLSearchParams(text), { replace: true })
    }
  }

  function handleClick(point: LatLng) {
    if (mode === 'explore') setPicked(point)
    else if (mode === 'measure') setPoints((current) => [...current, point])
    else setQuiz((current) => (current ? answer(current, point) : current))
  }

  function goTo(place: Place) {
    nonce.current += 1
    setJump({ place, nonce: nonce.current })
  }

  function locate() {
    if (!('geolocation' in navigator)) {
      setLocateMessage('이 브라우저는 위치 기능을 지원하지 않습니다.')
      return
    }
    setLocating(true)
    setLocateMessage(null)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const here = { lat: clampLatitude(position.coords.latitude), lng: position.coords.longitude }
        setPicked(here)
        goTo({ id: 'me', name: '내 위치', ...here, zoom: 14 })
        setLocating(false)
      },
      (error) => {
        setLocateMessage(locateError(error.code))
        setLocating(false)
      },
      { timeout: 10000, maximumAge: 60000 },
    )
  }

  async function copy(what: 'coords' | 'link') {
    const text = what === 'link' ? window.location.href : picked ? plainCoordinates(picked) : ''
    if (!text) return
    try {
      await navigator.clipboard.writeText(text)
      setCopied(what)
      window.setTimeout(() => setCopied(null), 1500)
    } catch {
      // clipboard not allowed here: the address bar (or the screen) has what would have been copied
    }
  }

  function startQuiz() {
    setQuiz(newQuiz(cryptoRng()))
    setNewRecord(false)
  }

  function nextQuestion() {
    if (!quiz) return
    const moved = next(quiz)
    setQuiz(moved)
    if (isFinished(moved)) {
      const total = totalScore(moved)
      if (total > best) {
        setBest(total)
        setNewRecord(true)
        try {
          localStorage.setItem(BEST_KEY, String(total))
        } catch {
          // storage unavailable: the best score is just not kept
        }
      }
    }
  }

  const markers = useMemo<MarkerSpec[]>(() => {
    if (mode === 'explore' && picked) {
      return [{ id: 'picked', position: picked, kind: 'pin', color: '#3b82f6', title: formatCoordinates(picked) }]
    }
    if (mode === 'measure') {
      return points.map((position, i) => ({ id: `point-${i}`, position, kind: 'dot', color: '#f59e0b', title: `점 ${i + 1}` }))
    }
    if (mode === 'quiz' && quiz?.revealed) {
      const last = quiz.results[quiz.results.length - 1]
      return [
        { id: 'guess', position: last.guess, kind: 'pin', color: '#3b82f6', glyph: '나', title: '내 답' },
        {
          id: 'answer',
          position: { lat: last.place.lat, lng: last.place.lng },
          kind: 'pin',
          color: '#16a34a',
          glyph: '✓',
          title: `정답: ${last.place.name}`,
        },
      ]
    }
    return []
  }, [mode, picked, points, quiz])

  const lines = useMemo<LineSpec[]>(() => {
    if (mode === 'measure' && points.length >= 2) {
      return [{ id: 'path', path: points, closed: closed && points.length >= 3, color: '#f59e0b' }]
    }
    if (mode === 'quiz' && quiz?.revealed) {
      const last = quiz.results[quiz.results.length - 1]
      return [{ id: 'miss', path: [last.guess, { lat: last.place.lat, lng: last.place.lng }], closed: false, color: '#ef4444', dashed: true }]
    }
    return []
  }, [mode, points, closed, quiz])

  if (!GOOGLE_MAPS_KEY) {
    return (
      <div className="rounded-lg border border-border bg-surface p-4 text-sm">
        <p className="font-semibold">지도를 보려면 Google Maps API 키가 필요합니다.</p>
        <p className="mt-2 text-muted">
          아직 이 사이트에는 키가 설정되지 않았습니다. 키는 <code className="font-mono">src/tools/map/config.ts</code>에서 설정합니다
          (README의 &quot;Google Maps 키&quot; 참고).
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="지도 기능">
        {MODES.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={mode === item.id}
            onClick={() => setMode(item.id)}
            className={`rounded-md border px-3 py-1.5 text-sm font-semibold transition-colors ${
              mode === item.id ? 'border-accent bg-accent text-background' : 'border-border bg-surface hover:border-accent'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {mode !== 'quiz' && (
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={locate} disabled={locating} className={button}>
            {locating ? '찾는 중...' : '내 위치'}
          </button>
          <button type="button" onClick={() => void copy('link')} className={button}>
            {copied === 'link' ? '복사했습니다' : '이 화면 링크 복사'}
          </button>
        </div>
      )}
      {locateMessage && mode !== 'quiz' && (
        <p role="alert" className="mt-2 text-sm text-red-500">
          {locateMessage}
        </p>
      )}

      <div className="mt-4">
        {status === 'ready' && (
          <MapCanvas
            key={dark ? 'dark' : 'light'}
            dark={dark}
            initial={view.current}
            restoreType={view.current.mapTypeId}
            locked={locked}
            onView={handleView}
            onClick={handleClick}
            markers={markers}
            lines={lines}
            jump={jump}
            onJumped={() => setJump(null)}
          />
        )}
        {status === 'loading' && (
          <div className="flex h-[65vh] min-h-[22rem] items-center justify-center rounded-lg border border-border bg-surface text-sm text-muted">
            지도를 불러오는 중...
          </div>
        )}
        {status === 'refused' && (
          <p role="alert" className="rounded-lg border border-border bg-surface p-4 text-sm">
            Google이 이 API 키를 받아주지 않았습니다. 키가 맞는지, 이 사이트 주소가 키의 허용 목록에 있는지, Maps JavaScript API가 켜져
            있는지 확인하세요.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="rounded-lg border border-border bg-surface p-4 text-sm">
            Google 지도를 불러오지 못했습니다. 인터넷 연결을 확인하고 새로고침해 보세요.
          </p>
        )}
      </div>

      <div className="mt-4 min-h-[14rem]">
        {mode === 'explore' && (
          <ExplorePanel
            picked={picked}
            weather={weather}
            now={now}
            copied={copied === 'coords'}
            onCopy={() => void copy('coords')}
            onClear={() => setPicked(null)}
          />
        )}
        {mode === 'measure' && (
          <MeasurePanel
            points={points}
            closed={closed}
            onToggleClosed={() => setClosed((current) => !current)}
            onUndo={() => setPoints((current) => current.slice(0, -1))}
            onClear={() => {
              setPoints([])
              setClosed(false)
            }}
          />
        )}
        {mode === 'quiz' && (
          <QuizPanel quiz={quiz} best={best} newRecord={newRecord} onStart={startQuiz} onNext={nextQuestion} onQuit={() => setQuiz(null)} />
        )}
      </div>
      <p className="mt-3 text-xs text-muted">지도는 Google Maps를 사용합니다. 휠이나 두 손가락으로 확대·축소하고, 왼쪽 위에서 일반 지도와 위성 사진을 바꿀 수 있습니다.</p>
    </div>
  )
}
