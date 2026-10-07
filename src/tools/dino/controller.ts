export const WIDTH = 600
export const HEIGHT = 150
export const GROUND_Y = 130 // y of the dino's feet
export const DINO_X = 40 // the sprite is 44 x 47
export const JUMP_V = 9
export const GRAVITY = 0.5
// Slower than this the large cactus (50px) can hardly be jumped over, see the "jumped over" tests.
export const MIN_SPEED = 4
export const MAX_SPEED = 14
export const DEFAULT_SPEED = 6

// Hitboxes are a little smaller than the sprites so near misses feel fair.
const DINO_HIT_X = DINO_X + 8
const DINO_HIT_W = 28
const CACTUS_INSET = 2

export const CACTI = {
  small: { w: 17, h: 35 },
  large: { w: 25, h: 50 },
}
export type CactusKind = keyof typeof CACTI
export type Obstacle = { x: number; kind: CactusKind }

export type State = {
  y: number // height above the ground, 0 = standing
  vy: number
  speed: number // pixels per frame
  distance: number // total pixels scrolled; the background is drawn from this
  nextSpawn: number // distance at which the next obstacle appears
  obstacles: Obstacle[]
  over: boolean
}

// 'event' lines render as "$ ...", 'code' lines render as "> ..."
export type LogLine = { type: 'event' | 'code'; text: string }
export type Update = { state: State; logs: LogLine[] }

export const initialState: State = {
  y: 0,
  vy: 0,
  speed: DEFAULT_SPEED,
  distance: 0,
  nextSpawn: 400,
  obstacles: [],
  over: false,
}

export const getScore = (state: State) => Math.floor(state.distance / 10)

const event = (text: string): LogLine => ({ type: 'event', text })
const code = (text: string): LogLine => ({ type: 'code', text })

export const JUMP_KEYS = ['ArrowUp', 'Space']
export const CONTROL_KEYS = [...JUMP_KEYS, 'ArrowLeft', 'ArrowRight']

export function onKey(state: State, key: string): Update {
  if (!CONTROL_KEYS.includes(key)) return { state, logs: [] }
  const logs = [event(`keydown ${key}`)]

  if (key === 'ArrowLeft' || key === 'ArrowRight') {
    const speed = Math.min(MAX_SPEED, Math.max(MIN_SPEED, state.speed + (key === 'ArrowRight' ? 1 : -1)))
    const expr = key === 'ArrowRight' ? 'Math.min(MAX_SPEED, speed + 1)' : 'Math.max(MIN_SPEED, speed - 1)'
    logs.push(code(`speed = ${expr}   // speed=${speed}`))
    return { state: { ...state, speed }, logs }
  }

  if (state.over) {
    logs.push(code(`if (over) state = restart(speed)   // restart, speed=${state.speed}`))
    return { state: { ...initialState, speed: state.speed }, logs }
  }
  if (state.y === 0) {
    logs.push(code(`if (y === 0) vy = JUMP_V   // vy=${JUMP_V}`))
    return { state: { ...state, vy: JUMP_V }, logs }
  }
  logs.push(code(`if (y === 0) vy = JUMP_V   // ignored: y=${state.y.toFixed(1)} (airborne)`))
  return { state, logs }
}

export function step(state: State, rng: () => number = Math.random): Update {
  if (state.over) return { state, logs: [] }
  const logs: LogLine[] = []
  let { y, vy, nextSpawn } = state
  const distance = state.distance + state.speed
  const obstacles = state.obstacles
    .map((o) => ({ ...o, x: o.x - state.speed }))
    .filter((o) => o.x + CACTI[o.kind].w > 0)

  if (y > 0 || vy > 0) {
    y += vy
    vy -= GRAVITY
    if (y <= 0) {
      y = 0
      vy = 0
      logs.push(event('landed'), code('if (y <= 0) { y = 0; vy = 0 }   // on the ground again'))
    }
  }

  if (distance >= nextSpawn) {
    const kind: CactusKind = rng() < 0.5 ? 'small' : 'large'
    obstacles.push({ x: WIDTH, kind })
    nextSpawn = distance + state.speed * (45 + rng() * 30)
    logs.push(
      event('spawn obstacle'),
      code(`obstacles.push({ x: WIDTH, kind: '${kind}' })   // next at distance=${Math.round(nextSpawn)}`),
    )
  }

  const hit = obstacles.some((o) => {
    const { w, h } = CACTI[o.kind]
    return DINO_HIT_X < o.x + w - CACTUS_INSET && DINO_HIT_X + DINO_HIT_W > o.x + CACTUS_INSET && y < h - CACTUS_INSET
  })
  if (hit) {
    logs.push(event('collision'), code(`if (overlaps(dino, obstacle)) over = true   // score=${Math.floor(distance / 10)}`))
  }

  return { state: { ...state, y, vy, distance, nextSpawn, obstacles, over: hit }, logs }
}
