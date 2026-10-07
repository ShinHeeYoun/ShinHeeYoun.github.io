import { nightAmount } from './daynight'

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
export const PX_PER_METER = 40
export const FIRE_COOLDOWN = 30 // steps between fireballs (0.5 s)

const FIREBALL_SPEED = 10
const FIREBALL_W = 10
const MOUTH_X = DINO_X + 44
const MOUTH_STANDING = 32 // height of the mouth above the feet
const MOUTH_DUCKING = 14
const METEOR_CHANCE = 1 / 600 // per step at night, about once every 10 s

// Hitboxes are a little smaller than the sprites so near misses feel fair.
const DINO_HIT_X = DINO_X + 8
const DINO_HIT = { w: 28, h: 43 }
const DUCK_HIT = { w: 40, h: 24 }
const INSET = 2

// y is the height of the bottom edge above the ground. Birds fly at head height: they hit a standing
// dino (hitbox 43) but pass over a ducking one (24). A tree reaches the top of the screen.
export const OBSTACLES = {
  small: { w: 17, h: 35, y: 0 },
  large: { w: 25, h: 50, y: 0 },
  bird: { w: 46, h: 40, y: 32 },
  tree: { w: 30, h: 130, y: 0 },
}
export type ObstacleKind = keyof typeof OBSTACLES
export type Obstacle = { x: number; kind: ObstacleKind }

// Birds and trees only show up once the player has run this far.
const UNLOCK_METERS: Record<ObstacleKind, number> = { small: 0, large: 0, bird: 100, tree: 200 }

export type Fireball = { x: number; y: number } // y: height above the ground
export type Meteor = { x: number; y: number } // y: canvas coordinates

export type State = {
  y: number // height above the ground, 0 = standing
  vy: number
  ducking: boolean // ArrowDown is held; only counts while on the ground
  speed: number // pixels per frame
  distance: number // total pixels scrolled; the background is drawn from this
  ticks: number // steps run so far; the legs, the sky and the effects are animated from this
  nextSpawn: number // distance at which the next obstacle appears
  obstacles: Obstacle[]
  fireballs: Fireball[]
  fireCooldown: number
  meteors: Meteor[]
  milestone: number // how many 100 m marks have been passed
  milestoneTick: number // ticks when the last mark was passed (the view flashes for a moment after)
  over: boolean
}

// 'event' lines render as "$ ...", 'code' lines render as "> ..."
export type LogLine = { type: 'event' | 'code'; text: string }
export type Update = { state: State; logs: LogLine[] }

export const initialState: State = {
  y: 0,
  vy: 0,
  ducking: false,
  speed: DEFAULT_SPEED,
  distance: 0,
  ticks: 0,
  nextSpawn: 400,
  obstacles: [],
  fireballs: [],
  fireCooldown: 0,
  meteors: [],
  milestone: 0,
  milestoneTick: 0,
  over: false,
}

export const getMeters = (state: State) => Math.floor(state.distance / PX_PER_METER)
export const isDucking = (state: State) => state.ducking && state.y === 0

const event = (text: string): LogLine => ({ type: 'event', text })
const code = (text: string): LogLine => ({ type: 'code', text })

export const START_KEYS = ['ArrowUp', 'Space']
export const CONTROL_KEYS = [...START_KEYS, 'ArrowDown', 'ArrowLeft', 'ArrowRight']

export function onKey(state: State, key: string): Update {
  if (!CONTROL_KEYS.includes(key)) return { state, logs: [] }
  const logs = [event(`keydown ${key}`)]

  if (key === 'ArrowLeft' || key === 'ArrowRight') {
    const speed = Math.min(MAX_SPEED, Math.max(MIN_SPEED, state.speed + (key === 'ArrowRight' ? 1 : -1)))
    const expr = key === 'ArrowRight' ? 'Math.min(MAX_SPEED, speed + 1)' : 'Math.max(MIN_SPEED, speed - 1)'
    logs.push(code(`speed = ${expr}   // speed=${speed}`))
    return { state: { ...state, speed }, logs }
  }

  if (key === 'ArrowDown') {
    logs.push(code(`ducking = true   // hitbox h=${DUCK_HIT.h} while on the ground`))
    return { state: { ...state, ducking: true }, logs }
  }

  if (state.over) {
    logs.push(code(`if (over) state = restart(speed)   // restart, speed=${state.speed}`))
    return { state: { ...initialState, speed: state.speed }, logs }
  }

  if (key === 'ArrowUp') {
    if (state.y === 0) {
      logs.push(code(`if (y === 0) vy = JUMP_V   // vy=${JUMP_V}`))
      return { state: { ...state, vy: JUMP_V }, logs }
    }
    logs.push(code(`if (y === 0) vy = JUMP_V   // ignored: y=${state.y.toFixed(1)} (airborne)`))
    return { state, logs }
  }

  // Space
  if (state.fireCooldown > 0) {
    logs.push(code(`if (fireCooldown === 0) fireballs.push(...)   // ignored: cooldown=${state.fireCooldown}`))
    return { state, logs }
  }
  const mouth = state.y + (isDucking(state) ? MOUTH_DUCKING : MOUTH_STANDING)
  logs.push(code(`if (fireCooldown === 0) fireballs.push({ x: ${MOUTH_X}, y: ${mouth} })   // cooldown=${FIRE_COOLDOWN}`))
  return {
    state: { ...state, fireballs: [...state.fireballs, { x: MOUTH_X, y: mouth }], fireCooldown: FIRE_COOLDOWN },
    logs,
  }
}

export function onKeyUp(state: State, key: string): Update {
  if (key !== 'ArrowDown') return { state, logs: [] }
  return { state: { ...state, ducking: false }, logs: [event(`keyup ${key}`), code('ducking = false')] }
}

export function step(state: State, rng: () => number = Math.random): Update {
  if (state.over) return { state, logs: [] }
  const logs: LogLine[] = []
  let { y, vy, nextSpawn } = state
  const ticks = state.ticks + 1
  const distance = state.distance + state.speed
  let obstacles = state.obstacles
    .map((o) => ({ ...o, x: o.x - state.speed }))
    .filter((o) => o.x + OBSTACLES[o.kind].w > 0)

  if (y > 0 || vy > 0) {
    y += vy
    vy -= GRAVITY
    if (y <= 0) {
      y = 0
      vy = 0
      logs.push(event('landed'), code('if (y <= 0) { y = 0; vy = 0 }   // on the ground again'))
    }
  }

  // A fireball is used up when it burns a tree; it flies through everything else.
  const fireballs: Fireball[] = []
  for (const fireball of state.fireballs) {
    const moved = { ...fireball, x: fireball.x + FIREBALL_SPEED }
    const tree = obstacles.findIndex(
      (o) => o.kind === 'tree' && moved.x + FIREBALL_W > o.x + INSET && moved.x < o.x + OBSTACLES.tree.w,
    )
    if (tree >= 0) {
      logs.push(
        event('tree burned'),
        code(`if (fireball.x + ${FIREBALL_W} > tree.x) obstacles.remove(tree)   // tree.x=${Math.round(obstacles[tree].x)}`),
      )
      obstacles = obstacles.filter((_, i) => i !== tree)
    } else if (moved.x < WIDTH) {
      fireballs.push(moved)
    }
  }

  if (distance >= nextSpawn) {
    const meters = Math.floor(distance / PX_PER_METER)
    const kinds = (Object.keys(OBSTACLES) as ObstacleKind[]).filter((kind) => meters >= UNLOCK_METERS[kind])
    const kind = kinds[Math.min(kinds.length - 1, Math.floor(rng() * kinds.length))]
    obstacles.push({ x: WIDTH, kind })
    nextSpawn = distance + state.speed * (45 + rng() * 30)
    logs.push(
      event('spawn obstacle'),
      code(`obstacles.push({ x: WIDTH, kind: '${kind}' })   // next at distance=${Math.round(nextSpawn)}`),
    )
  }

  const before = Math.floor(state.distance / PX_PER_METER / 100)
  const reached = Math.floor(distance / PX_PER_METER / 100)
  let { milestone, milestoneTick } = state
  if (reached > before) {
    milestone = reached
    milestoneTick = ticks
    logs.push(
      event(`${reached * 100} m`),
      code(`if (meters % 100 === 0) effect('${reached * 100} m')   // meters=${Math.floor(distance / PX_PER_METER)}`),
    )
  }

  const night = nightAmount(ticks)
  if (night >= 0.5 !== nightAmount(state.ticks) >= 0.5) {
    logs.push(
      event(night >= 0.5 ? 'night falls' : 'day breaks'),
      code(`sky = night >= 0.5 ? 'night' : 'day'   // night=${night.toFixed(2)}`),
    )
  }

  let meteors = state.meteors
    .map((m) => ({ x: m.x - 6, y: m.y + 3.5 }))
    .filter((m) => m.y < GROUND_Y && m.x > -60)
  if (night > 0.6 && rng() < METEOR_CHANCE) {
    const meteor = { x: 250 + Math.floor(rng() * 400), y: -10 }
    meteors = [...meteors, meteor]
    logs.push(
      event('meteor'),
      code(`if (night > 0.6 && rng() < 1 / 600) meteors.push({ x: ${meteor.x}, y: ${meteor.y} })   // night=${night.toFixed(2)}`),
    )
  }

  const hitbox = isDucking({ ...state, y }) ? DUCK_HIT : DINO_HIT
  const hit = obstacles.some((o) => {
    const { w, h, y: bottom } = OBSTACLES[o.kind]
    return (
      DINO_HIT_X < o.x + w - INSET &&
      DINO_HIT_X + hitbox.w > o.x + INSET &&
      y < bottom + h - INSET &&
      y + hitbox.h > bottom + INSET
    )
  })
  if (hit) {
    logs.push(event('collision'), code(`if (overlaps(dino, obstacle)) over = true   // meters=${Math.floor(distance / PX_PER_METER)}`))
  }

  return {
    state: {
      ...state,
      y,
      vy,
      distance,
      ticks,
      nextSpawn,
      obstacles,
      fireballs,
      fireCooldown: Math.max(0, state.fireCooldown - 1),
      meteors,
      milestone,
      milestoneTick,
      over: hit,
    },
    logs,
  }
}
