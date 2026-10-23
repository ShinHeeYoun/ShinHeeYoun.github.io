import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent,
} from 'react'
import { cryptoRng } from '../../lib/random'
import {
  CATEGORIES,
  CATEGORY_HINT,
  CATEGORY_LABEL,
  DICE_COUNT,
  FLIP_MS,
  MAX_HOLD_MS,
  MAX_ROLLS,
  MIN_FLIPS,
  UPPER_BONUS,
  UPPER_BONUS_THRESHOLD,
  UPPER_CATEGORIES,
  buildRecord,
  chooseCategory,
  flipCountFor,
  initialGame,
  isGameOver,
  isRolled,
  nextFace,
  potentialScores,
  rollFinal,
  scoreFor,
  toggleHold,
  totalScore,
  upperBonus,
  upperSum,
  type Category,
  type GameState,
} from './controller'
import { LOCAL_MAX, LocalScoreStore, summarize, type ScoreSummary } from './scoreStore'
import { createSound } from './sound'

const SOUND_KEY = 'yacht_sound'

// Where the dots of each face go, in a 100 x 100 square.
const PIPS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[27, 27], [73, 73]],
  3: [[27, 27], [50, 50], [73, 73]],
  4: [[27, 27], [73, 27], [27, 73], [73, 73]],
  5: [[27, 27], [73, 27], [50, 50], [27, 73], [73, 73]],
  6: [[27, 24], [73, 24], [27, 50], [73, 50], [27, 76], [73, 76]],
}

type Roll = { startedAt: number; flips: number; released: boolean; needed: number; timer: number }

function newId(): string {
  return typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

function Die({
  value,
  held,
  rolling,
  canHold,
  index,
  onToggle,
}: {
  value: number
  held: boolean
  rolling: boolean
  canHold: boolean
  index: number
  onToggle: () => void
}) {
  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={onToggle}
        disabled={!canHold}
        aria-pressed={held}
        aria-label={`주사위 ${index + 1}: ${value === 0 ? '굴리기 전' : `${value}`}${held ? ', 고정됨' : ''}`}
        className="rounded-xl outline-none transition-transform duration-150 focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-default"
        style={{ transform: held ? 'translateY(-10px)' : 'none' }}
      >
        <svg
          viewBox="0 0 100 100"
          className="block h-12 w-12 sm:h-16 sm:w-16"
          role="img"
          aria-hidden="true"
          data-testid={`die-${index}`}
          data-value={value}
        >
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="18"
            fill={value === 0 ? 'rgb(var(--color-surface))' : '#f5f5f4'}
            stroke={held ? 'rgb(var(--color-accent))' : value === 0 ? 'rgb(var(--color-border))' : '#a8a29e'}
            strokeWidth={held ? 6 : 3}
            strokeDasharray={value === 0 ? '6 6' : undefined}
          />
          {(PIPS[value] ?? []).map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={value === 1 ? 11 : 9} fill={rolling && !held ? '#44403c' : '#1c1917'} />
          ))}
        </svg>
      </button>
      <span className={`mt-1 h-4 text-xs ${held ? 'text-accent' : 'text-transparent'}`} aria-hidden="true">
        고정
      </span>
    </div>
  )
}

export default function YachtView() {
  const [game, setGame] = useState<GameState>(initialGame)
  const [faces, setFaces] = useState<number[] | null>(null)
  const [rolling, setRolling] = useState(false)
  const [pending, setPending] = useState<Category | null>(null)
  const [banner, setBanner] = useState<string | null>(null)
  const [summaries, setSummaries] = useState<ScoreSummary[]>([])
  const [result, setResult] = useState<{ total: number; newBest: boolean } | null>(null)
  const [soundOn, setSoundOn] = useState(() => {
    try {
      return localStorage.getItem(SOUND_KEY) === '1'
    } catch {
      return false
    }
  })

  // The timers and key handlers outlive a render, so they read the latest values from here.
  const gameRef = useRef(game)
  const facesRef = useRef<number[]>(game.dice)
  const rollRef = useRef<Roll | null>(null)
  const soundOnRef = useRef(soundOn)
  const soundRef = useRef(createSound(() => soundOnRef.current))
  const summariesRef = useRef(summaries)
  // Where the scores are kept. To keep them on the score server instead, this is the only line to change:
  // new RemoteScoreStore('https://...') (see src/tools/yacht/scoreStore.ts and server/scores).
  const store = useMemo(() => new LocalScoreStore(), [])

  soundOnRef.current = soundOn
  summariesRef.current = summaries

  function commit(next: GameState) {
    gameRef.current = next
    setGame(next)
  }

  useEffect(() => {
    let alive = true
    void store.recent(LOCAL_MAX).then((list) => alive && setSummaries(list))
    return () => {
      alive = false
    }
  }, [store])

  useEffect(() => {
    return () => {
      if (rollRef.current) window.clearInterval(rollRef.current.timer)
    }
  }, [])

  // --- Rolling: the faces change while the button is held, and the dice stop the moment it is let go ---

  function settle(roll: Roll) {
    window.clearInterval(roll.timer)
    rollRef.current = null
    // The faces are drawn only now. What flickered on the way was for show, and how long the button was held
    // decided only how many times it flickered.
    const next = rollFinal(gameRef.current, cryptoRng())
    commit(next)
    facesRef.current = next.dice
    setFaces(null)
    setRolling(false)
    soundRef.current.settle()
    if (scoreFor('yacht', next.dice) === 50) {
      setBanner('Yacht: 주사위 5개가 모두 같습니다. Yacht 칸에 기록하면 50점입니다.')
      soundRef.current.yacht()
    }
  }

  function tick(roll: Roll) {
    const current = gameRef.current
    const rng = cryptoRng()
    const shown = current.dice.map((value, i) => (current.held[i] ? value : nextFace(facesRef.current[i] ?? 0, rng)))
    facesRef.current = shown
    setFaces(shown)
    roll.flips += 1
    soundRef.current.tick()
    if (roll.released) {
      if (roll.flips >= roll.needed) settle(roll)
    } else if (performance.now() - roll.startedAt >= MAX_HOLD_MS) {
      endRoll()
    }
  }

  function startRoll() {
    const current = gameRef.current
    if (rollRef.current || isGameOver(current) || current.rollsLeft <= 0) return
    const roll: Roll = { startedAt: performance.now(), flips: 0, released: false, needed: MIN_FLIPS, timer: 0 }
    rollRef.current = roll
    facesRef.current = current.dice
    setRolling(true)
    setPending(null)
    setBanner(null)
    roll.timer = window.setInterval(() => tick(roll), FLIP_MS)
    tick(roll)
  }

  function endRoll() {
    const roll = rollRef.current
    if (!roll || roll.released) return
    roll.released = true
    roll.needed = flipCountFor(performance.now() - roll.startedAt)
    if (roll.flips >= roll.needed) settle(roll)
  }

  function holdDie(index: number) {
    if (rollRef.current) return
    commit(toggleHold(gameRef.current, index))
  }

  // --- Scoring ---

  function finish(finished: GameState) {
    const previous = summarize(summariesRef.current)
    const record = buildRecord(finished, newId(), new Date().toISOString())
    setResult({ total: record.total, newBest: previous.games > 0 && record.total > previous.best })
    void store
      .save(record)
      .then(() => store.recent(LOCAL_MAX))
      .then(setSummaries)
  }

  function confirmCategory(category: Category) {
    const before = gameRef.current
    const next = chooseCategory(before, category)
    if (next === before) return
    commit(next)
    setPending(null)
    setBanner(null)
    if (isGameOver(next)) finish(next)
  }

  function pickCategory(category: Category) {
    if (rollRef.current) return
    if (pending === category) confirmCategory(category)
    else setPending(category)
  }

  function newGame() {
    const current = gameRef.current
    if (current.history.length > 0 && !isGameOver(current) && !window.confirm('진행 중인 게임을 버리고 새로 시작할까요?')) {
      return
    }
    if (rollRef.current) window.clearInterval(rollRef.current.timer)
    rollRef.current = null
    const fresh = initialGame()
    commit(fresh)
    facesRef.current = fresh.dice
    setFaces(null)
    setRolling(false)
    setPending(null)
    setBanner(null)
    setResult(null)
  }

  function toggleSound() {
    const next = !soundOn
    setSoundOn(next)
    soundOnRef.current = next
    try {
      localStorage.setItem(SOUND_KEY, next ? '1' : '0')
    } catch {
      // storage unavailable: the choice just is not kept
    }
    if (next) soundRef.current.tick()
  }

  // Space (held down) rolls and 1 to 5 hold a die, unless the player is typing or pressing a button.
  const actions = useRef({ startRoll, endRoll, holdDie })
  actions.current = { startRoll, endRoll, holdDie }
  useEffect(() => {
    const onBody = (event: globalThis.KeyboardEvent) => event.target === document.body
    const down = (event: globalThis.KeyboardEvent) => {
      if (!onBody(event) || event.repeat) return
      if (event.code === 'Space') {
        event.preventDefault()
        actions.current.startRoll()
      } else if (/^Digit[1-5]$/.test(event.code)) {
        actions.current.holdDie(Number(event.code.slice(5)) - 1)
      }
    }
    const up = (event: globalThis.KeyboardEvent) => {
      if (event.code === 'Space' && onBody(event)) actions.current.endRoll()
    }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [])

  const over = isGameOver(game)
  const rolled = isRolled(game)
  const potential = potentialScores(game)
  const shownDice = rolling && faces ? faces : game.dice
  const canHold = rolled && !rolling && game.rollsLeft > 0 && !over
  const turn = Math.min(game.history.length + 1, CATEGORIES.length)
  const upper = upperSum(game)
  const stats = summarize(summaries)
  const pendingPoints = pending ? scoreFor(pending, game.dice) : 0

  const rollKeys = {
    onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => {
      if ((event.key === ' ' || event.key === 'Enter') && !event.repeat) {
        event.preventDefault()
        startRoll()
      }
    },
    onKeyUp: (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === ' ' || event.key === 'Enter') endRoll()
    },
  }
  const rollPointer = {
    onPointerDown: (event: PointerEvent<HTMLButtonElement>) => {
      try {
        event.currentTarget.setPointerCapture(event.pointerId) // so that the release is seen wherever the pointer ends up
      } catch {
        // not every pointer can be captured; the roll still starts
      }
      startRoll()
    },
    onPointerUp: () => endRoll(),
    onPointerCancel: () => endRoll(),
    onContextMenu: (event: ReactMouseEvent) => event.preventDefault(), // a long press on a phone
  }

  const scoreRow = (category: Category) => {
    const used = game.scores[category] !== null
    const available = !used && rolled && !rolling && !over
    const isPending = pending === category
    const shown = used ? game.scores[category] : available ? potential[category] : null
    return (
      <li key={category}>
        <button
          type="button"
          disabled={!available}
          aria-pressed={isPending}
          onClick={() => pickCategory(category)}
          className={`flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-left transition-colors ${
            isPending
              ? 'border-accent bg-accent/10'
              : available
                ? 'border-border hover:border-accent'
                : 'border-transparent'
          } disabled:cursor-default`}
        >
          <span className="min-w-0">
            <span className={used ? 'font-semibold' : 'font-medium'}>{CATEGORY_LABEL[category]}</span>
            <span className="block text-xs text-muted">{CATEGORY_HINT[category]}</span>
          </span>
          <span
            className={`shrink-0 font-mono text-lg ${
              used ? 'font-semibold' : available ? 'italic text-muted' : 'text-muted'
            } ${isPending ? '!text-accent !not-italic font-semibold' : ''}`}
          >
            {shown === null ? '-' : shown}
          </span>
        </button>
      </li>
    )
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-sm" aria-live="polite">
          턴 {turn} / {CATEGORIES.length}
          {!over && <span className="ml-4">남은 굴리기 {game.rollsLeft}</span>}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-pressed={soundOn}
            onClick={toggleSound}
            className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent"
          >
            소리 {soundOn ? '끄기' : '켜기'}
          </button>
          <button
            type="button"
            onClick={newGame}
            className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent"
          >
            새 게임
          </button>
        </div>
      </div>

      <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
        <div>
          <div className="rounded-lg border border-border bg-surface px-3 pb-3 pt-6">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 sm:gap-x-5">
              {Array.from({ length: DICE_COUNT }, (_, i) => (
                <Die
                  key={i}
                  index={i}
                  value={shownDice[i]}
                  held={game.held[i]}
                  rolling={rolling}
                  canHold={canHold}
                  onToggle={() => holdDie(i)}
                />
              ))}
            </div>
          </div>

          {!over && (
            <div className="mt-4">
              <button
                type="button"
                disabled={game.rollsLeft <= 0}
                aria-pressed={rolling}
                {...rollPointer}
                {...rollKeys}
                className={`w-full touch-none select-none rounded-lg px-4 py-4 text-lg font-semibold transition-colors disabled:opacity-50 ${
                  rolling ? 'bg-accent-hover text-background' : 'bg-accent text-background hover:bg-accent-hover'
                }`}
              >
                {game.rollsLeft <= 0
                  ? '점수 칸을 선택하세요'
                  : rolling
                    ? '굴리는 중... 손을 떼면 결정됩니다'
                    : '굴리기 (누르고 있기)'}
              </button>
              <p className="mt-2 text-xs text-muted">
                버튼을 누르고 있는 동안 주사위 눈이 바뀌고, 떼는 순간 결정됩니다. 단축키: Space(누르고 있기) 굴리기, 1~5 주사위
                고정.
              </p>
            </div>
          )}

          {banner && (
            <p role="status" className="mt-3 rounded-md border border-accent bg-accent/10 px-3 py-2 text-sm font-semibold">
              {banner}
            </p>
          )}

          {pending && !over && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => confirmCategory(pending)}
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
              >
                {CATEGORY_LABEL[pending]}에 {pendingPoints}점 기록
              </button>
              <button
                type="button"
                onClick={() => setPending(null)}
                className="rounded-md border border-border bg-surface px-3 py-2 text-sm transition-colors hover:border-accent"
              >
                취소
              </button>
              {pendingPoints === 0 && <span className="text-xs text-muted">조건에 맞지 않아 0점으로 기록됩니다.</span>}
            </div>
          )}

          {over && (
            <div className="mt-4 rounded-lg border border-accent bg-accent/10 p-4" role="status">
              <p className="text-sm text-muted">게임 종료</p>
              <p className="mt-1 font-mono text-4xl font-bold">{result?.total ?? totalScore(game)}점</p>
              <p className="mt-2 text-sm">
                상단 합계 {upper} / {UPPER_BONUS_THRESHOLD} · 보너스 {upperBonus(upper)}
                {result?.newBest && <span className="ml-2 font-semibold">최고 기록을 넘었습니다.</span>}
              </p>
              <p className="mt-1 text-xs text-muted">이번 기록은 이 브라우저에 저장되었습니다.</p>
              <button
                type="button"
                onClick={newGame}
                className="mt-3 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
              >
                새 게임
              </button>
            </div>
          )}
        </div>

        <section aria-label="점수판">
          <ul className="space-y-1">{UPPER_CATEGORIES.map(scoreRow)}</ul>
          <p className="my-2 flex items-center justify-between rounded-md bg-surface px-3 py-2 font-mono text-sm">
            <span>
              상단 합계 {upper} / {UPPER_BONUS_THRESHOLD}
            </span>
            <span className={upperBonus(upper) > 0 ? 'font-semibold text-accent' : 'text-muted'}>
              {upperBonus(upper) > 0
                ? `보너스 +${UPPER_BONUS}`
                : `보너스까지 ${Math.max(0, UPPER_BONUS_THRESHOLD - upper)}점`}
            </span>
          </p>
          <ul className="space-y-1">{CATEGORIES.filter((category) => !UPPER_CATEGORIES.includes(category)).map(scoreRow)}</ul>
          <p className="mt-3 flex items-center justify-between border-t border-border px-3 pt-3 font-mono text-lg font-bold">
            <span>합계</span>
            <span>{totalScore(game)}</span>
          </p>
        </section>
      </div>

      <section className="mt-10 border-t border-border pt-6">
        <h2 className="text-lg font-semibold">내 기록</h2>
        <p className="mt-1 text-xs text-muted">이 브라우저에만 저장됩니다. 최근 {LOCAL_MAX}게임까지 남습니다.</p>
        {stats.games === 0 ? (
          <p className="mt-3 text-sm text-muted">아직 끝낸 게임이 없습니다.</p>
        ) : (
          <>
            <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm">
              <div>
                <dt className="text-xs text-muted">플레이</dt>
                <dd>{stats.games}회</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">최고</dt>
                <dd>{stats.best}점</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">평균</dt>
                <dd>{stats.average}점</dd>
              </div>
            </dl>
            <table className="mt-4 w-full max-w-md border-collapse text-sm">
              <caption className="sr-only">최근 게임</caption>
              <thead>
                <tr className="border-b border-border text-left text-xs text-muted">
                  <th className="py-1 pr-3 font-normal">날짜</th>
                  <th className="py-1 pr-3 text-right font-normal">점수</th>
                  <th className="py-1 text-right font-normal">상단 합계</th>
                </tr>
              </thead>
              <tbody>
                {summaries
                  .slice()
                  .sort((a, b) => Date.parse(b.playedAt) - Date.parse(a.playedAt))
                  .slice(0, 5)
                  .map((entry) => (
                    <tr key={entry.id} className="border-b border-border/60">
                      <td className="py-1 pr-3 font-mono">{formatDate(entry.playedAt)}</td>
                      <td className="py-1 pr-3 text-right font-mono">{entry.total}</td>
                      <td className="py-1 text-right font-mono">{entry.upperSum}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
      </section>

      <section className="mt-10 border-t border-border pt-6">
        <h2 className="text-lg font-semibold">규칙</h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed">
          <li>주사위 5개를 한 턴에 최대 {MAX_ROLLS}번 굴린다.</li>
          <li>굴린 뒤 남길 주사위를 눌러 고정하고, 나머지만 다시 굴릴 수 있다.</li>
          <li>한 턴이 끝나면 점수판의 칸 하나를 골라 점수를 기록한다. 각 칸은 한 번만 쓸 수 있다.</li>
          <li>조건에 맞지 않는 칸에도 기록할 수 있으며, 이때는 0점이다.</li>
          <li>12개 칸을 모두 채우면 게임이 끝나고, 점수의 합계가 최종 점수이다.</li>
        </ul>
        <h3 className="mt-5 text-sm font-semibold">점수 계산</h3>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed">
          <li>Aces, Deuces, Threes, Fours, Fives, Sixes: 해당 눈이 나온 주사위 눈의 합</li>
          <li>상단 보너스: 위 여섯 칸의 합이 63점 이상이면 35점을 더한다.</li>
          <li>Choice: 주사위 5개 눈의 합</li>
          <li>4 of a Kind: 같은 눈이 4개 이상이면 주사위 5개 눈의 합</li>
          <li>Full House: 같은 눈 3개와 다른 눈 2개이면 주사위 5개 눈의 합. 5개가 모두 같으면 해당하지 않는다.</li>
          <li>Small Straight: 4개가 연속이면 15점</li>
          <li>Large Straight: 5개가 연속이면 30점</li>
          <li>Yacht: 5개가 모두 같으면 50점</li>
          <li>최고 점수는 323점이다.</li>
        </ul>
      </section>
    </div>
  )
}
