import { describe, it, expect } from 'vitest'
import {
  DINO_X,
  FIRE_COOLDOWN,
  JUMP_V,
  MAX_SPEED,
  MIN_SPEED,
  OBSTACLES,
  PX_PER_METER,
  WIDTH,
  getMeters,
  initialState,
  onKey,
  onKeyUp,
  step,
  type ObstacleKind,
  type State,
} from './controller'

const rng0 = () => 0

function texts(logs: { text: string }[]) {
  return logs.map((log) => log.text).join('\n')
}

function run(state: State, steps: number, rng: () => number = rng0) {
  let current = state
  const logs: { text: string }[] = []
  for (let i = 0; i < steps; i++) {
    const update = step(current, rng)
    current = update.state
    logs.push(...update.logs)
  }
  return { state: current, logs }
}

describe('onKey', () => {
  it('jumps on ArrowUp when standing on the ground', () => {
    const { state, logs } = onKey(initialState, 'ArrowUp')
    expect(state.vy).toBe(JUMP_V)
    expect(texts(logs)).toContain('keydown ArrowUp')
    expect(texts(logs)).toContain('vy = JUMP_V')
  })

  it('does not double jump while airborne', () => {
    const airborne: State = { ...initialState, y: 40, vy: 3 }
    const { state, logs } = onKey(airborne, 'ArrowUp')
    expect(state.vy).toBe(3)
    expect(texts(logs)).toContain('ignored')
  })

  it('Space breathes a fireball instead of jumping', () => {
    const { state, logs } = onKey(initialState, 'Space')
    expect(state.vy).toBe(0)
    expect(state.fireballs).toHaveLength(1)
    expect(state.fireCooldown).toBe(FIRE_COOLDOWN)
    expect(texts(logs)).toContain('fireballs.push')
  })

  it('makes the fireball wait for its cooldown', () => {
    const first = onKey(initialState, 'Space').state
    const tooSoon = onKey(first, 'Space')
    expect(tooSoon.state.fireballs).toHaveLength(1)
    expect(texts(tooSoon.logs)).toContain('ignored')
    const ready = run(first, FIRE_COOLDOWN).state
    expect(onKey(ready, 'Space').state.fireballs.length).toBeGreaterThan(ready.fireballs.length)
  })

  it('ducks while ArrowDown is held and stands up on release', () => {
    const down = onKey(initialState, 'ArrowDown')
    expect(down.state.ducking).toBe(true)
    expect(texts(down.logs)).toContain('ducking = true')
    const up = onKeyUp(down.state, 'ArrowDown')
    expect(up.state.ducking).toBe(false)
    expect(texts(up.logs)).toContain('keyup ArrowDown')
  })

  it('ignores the release of keys that do not hold anything', () => {
    const { state, logs } = onKeyUp(initialState, 'ArrowUp')
    expect(state).toBe(initialState)
    expect(logs).toEqual([])
  })

  it('speeds up with ArrowRight and slows down with ArrowLeft', () => {
    const faster = onKey(initialState, 'ArrowRight').state
    expect(faster.speed).toBe(initialState.speed + 1)
    const slower = onKey(initialState, 'ArrowLeft').state
    expect(slower.speed).toBe(initialState.speed - 1)
  })

  it('clamps speed between MIN_SPEED and MAX_SPEED', () => {
    expect(onKey({ ...initialState, speed: MAX_SPEED }, 'ArrowRight').state.speed).toBe(MAX_SPEED)
    expect(onKey({ ...initialState, speed: MIN_SPEED }, 'ArrowLeft').state.speed).toBe(MIN_SPEED)
  })

  it('ignores keys it does not handle', () => {
    const { state, logs } = onKey(initialState, 'KeyA')
    expect(state).toBe(initialState)
    expect(logs).toEqual([])
  })

  it('restarts after game over with ArrowUp or Space and keeps the chosen speed', () => {
    const dead: State = { ...initialState, over: true, speed: 9, distance: 5000, ticks: 800 }
    for (const key of ['ArrowUp', 'Space']) {
      const { state, logs } = onKey(dead, key)
      expect(state.over).toBe(false)
      expect(state.distance).toBe(0)
      expect(state.ticks).toBe(0)
      expect(state.speed).toBe(9)
      expect(texts(logs)).toContain('restart')
    }
  })
})

describe('step', () => {
  it('advances distance and obstacles by the current speed', () => {
    const before: State = { ...initialState, speed: 5, obstacles: [{ x: 300, kind: 'small' }] }
    const { state, logs } = step(before, rng0)
    expect(state.distance).toBe(5)
    expect(state.obstacles[0].x).toBe(295)
    expect(logs).toEqual([])
  })

  it('counts the steps it has run (the view animates the legs from this)', () => {
    expect(run(initialState, 7).state.ticks).toBe(7)
  })

  it('rises, then lands and logs the landing', () => {
    let state = onKey(initialState, 'ArrowUp').state
    let landedLog = ''
    let peak = 0
    for (let i = 0; i < 100 && landedLog === ''; i++) {
      const result = step(state, rng0)
      state = result.state
      peak = Math.max(peak, state.y)
      if (texts(result.logs).includes('landed')) landedLog = texts(result.logs)
    }
    expect(peak).toBeGreaterThan(40)
    expect(state.y).toBe(0)
    expect(state.vy).toBe(0)
    expect(landedLog).toContain('landed')
  })

  it('spawns an obstacle at the right edge when the distance is reached', () => {
    const { state, logs } = step({ ...initialState, nextSpawn: 0 }, rng0)
    expect(state.obstacles).toHaveLength(1)
    expect(state.obstacles[0]).toEqual({ x: WIDTH, kind: 'small' })
    expect(state.nextSpawn).toBeGreaterThan(state.distance)
    expect(texts(logs)).toContain('spawn')
  })

  it('picks the large cactus for high random values at the start', () => {
    const { state } = step({ ...initialState, nextSpawn: 0 }, () => 0.9)
    expect(state.obstacles[0].kind).toBe('large')
  })

  it('freezes after game over', () => {
    const dead: State = { ...initialState, over: true }
    const { state, logs } = step(dead, rng0)
    expect(state).toBe(dead)
    expect(logs).toEqual([])
  })
})

describe('cacti', () => {
  it('end the game when the dino touches one', () => {
    const before: State = { ...initialState, obstacles: [{ x: DINO_X + 4, kind: 'small' }] }
    const { state, logs } = step(before, rng0)
    expect(state.over).toBe(true)
    expect(texts(logs)).toContain('collision')
  })

  it('can be jumped over', () => {
    const before: State = {
      ...initialState,
      y: OBSTACLES.small.h + 20,
      obstacles: [{ x: DINO_X + 4, kind: 'small' }],
    }
    expect(step(before, rng0).state.over).toBe(false)
  })

  it('cannot be ducked under', () => {
    const before: State = { ...initialState, ducking: true, obstacles: [{ x: DINO_X + 4, kind: 'large' }] }
    expect(step(before, rng0).state.over).toBe(true)
  })
})

describe('birds', () => {
  const bird: State = { ...initialState, obstacles: [{ x: DINO_X + 4, kind: 'bird' }] }

  it('hit a dino that stands up', () => {
    expect(step(bird, rng0).state.over).toBe(true)
  })

  it('fly over a dino that ducks', () => {
    expect(step({ ...bird, ducking: true }, rng0).state.over).toBe(false)
  })

  it('only count as ducking while on the ground', () => {
    const jumping: State = { ...bird, ducking: true, y: 20, vy: 2 }
    expect(step(jumping, rng0).state.over).toBe(true)
  })

  it('can be ducked under at every speed', () => {
    for (let speed = MIN_SPEED; speed <= MAX_SPEED; speed++) {
      const start: State = {
        ...initialState,
        speed,
        ducking: true,
        nextSpawn: Infinity,
        obstacles: [{ x: WIDTH, kind: 'bird' }],
      }
      expect(run(start, 300).state.over, `speed ${speed}`).toBe(false)
    }
  })
})

describe('trees', () => {
  const tree: State = { ...initialState, obstacles: [{ x: DINO_X + 4, kind: 'tree' }] }

  it('cannot be stood next to, ducked under or jumped over', () => {
    expect(step(tree, rng0).state.over).toBe(true)
    expect(step({ ...tree, ducking: true }, rng0).state.over).toBe(true)
    expect(step({ ...tree, y: 75, vy: 0 }, rng0).state.over).toBe(true)
  })

  it('cannot be jumped over at any speed, whatever the timing', () => {
    for (let speed = MIN_SPEED; speed <= MAX_SPEED; speed++) {
      for (let delay = 0; delay < 100; delay++) {
        let state: State = {
          ...initialState,
          speed,
          nextSpawn: Infinity,
          obstacles: [{ x: DINO_X + speed * 70, kind: 'tree' }],
        }
        for (let frame = 0; frame < 300 && !state.over; frame++) {
          if (frame === delay) state = onKey(state, 'ArrowUp').state
          state = step(state, rng0).state
        }
        expect(state.over, `speed ${speed}, delay ${delay}`).toBe(true)
      }
    }
  })

  it('burn down when a fireball reaches them, and the fireball is used up', () => {
    const before: State = {
      ...initialState,
      obstacles: [{ x: 300, kind: 'tree' }],
      fireballs: [{ x: 250, y: 32 }],
    }
    const { state, logs } = run(before, 10)
    expect(state.obstacles).toHaveLength(0)
    expect(state.fireballs).toHaveLength(0)
    expect(state.over).toBe(false)
    expect(texts(logs)).toContain('tree burned')
  })

  it('can be cleared at every speed by one fireball breathed at the start', () => {
    for (let speed = MIN_SPEED; speed <= MAX_SPEED; speed++) {
      const start = onKey(
        { ...initialState, speed, nextSpawn: Infinity, obstacles: [{ x: WIDTH, kind: 'tree' }] },
        'Space',
      ).state
      expect(run(start, 300).state.over, `speed ${speed}`).toBe(false)
    }
  })
})

describe('fireballs', () => {
  it('fly right and disappear off the screen', () => {
    const start = onKey(initialState, 'Space').state
    const next = step(start, rng0).state
    expect(next.fireballs[0].x).toBeGreaterThan(start.fireballs[0].x)
    expect(run(start, 120).state.fireballs).toHaveLength(0)
  })

  it('pass through cacti and birds', () => {
    const before: State = {
      ...initialState,
      obstacles: [
        { x: 300, kind: 'small' },
        { x: 360, kind: 'bird' },
      ],
      fireballs: [{ x: 250, y: 32 }],
    }
    const { state } = run(before, 6)
    expect(state.fireballs.length).toBeGreaterThan(0)
    expect(state.obstacles).toHaveLength(2)
  })
})

describe('new obstacles unlock with distance', () => {
  const at = (meters: number): State => ({ ...initialState, distance: meters * PX_PER_METER, nextSpawn: 0 })
  const kinds = (state: State) => {
    const seen = new Set<ObstacleKind>()
    for (let i = 0; i <= 20; i++) {
      const roll = Math.min(i / 20, 0.999) // every kind gets a roll that picks it
      seen.add(step(state, () => roll).state.obstacles[0].kind)
    }
    return seen
  }

  it('starts with cacti only', () => {
    expect(kinds(at(50))).toEqual(new Set(['small', 'large']))
  })

  it('adds birds at 100 m', () => {
    expect(kinds(at(120))).toEqual(new Set(['small', 'large', 'bird']))
  })

  it('adds trees at 200 m', () => {
    expect(kinds(at(250))).toEqual(new Set(['small', 'large', 'bird', 'tree']))
  })
})

describe('distance', () => {
  it('is measured in meters', () => {
    expect(getMeters({ ...initialState, distance: 100 * PX_PER_METER + 5 })).toBe(100)
    expect(getMeters(initialState)).toBe(0)
  })

  it('announces every 100 m', () => {
    const almost: State = { ...initialState, speed: 6, distance: 100 * PX_PER_METER - 3 }
    const { state, logs } = step(almost, rng0)
    expect(state.milestone).toBe(1)
    expect(state.milestoneTick).toBe(state.ticks)
    expect(texts(logs)).toContain('100 m')
    const later = step({ ...almost, distance: 200 * PX_PER_METER - 3 }, rng0)
    expect(later.state.milestone).toBe(2)
    expect(texts(later.logs)).toContain('200 m')
  })

  it('does not announce anything in between', () => {
    expect(step({ ...initialState, distance: 1000 }, rng0).state.milestone).toBe(0)
  })
})

describe('day and night', () => {
  it('logs the moment the sun gives way to the moon, and back', () => {
    // night counts from the halfway point of the fade (night >= 0.5) in both directions
    const dusk = step({ ...initialState, ticks: 1799, nextSpawn: Infinity }, rng0)
    expect(texts(dusk.logs)).toContain('night falls')
    const dawn = step({ ...initialState, ticks: 3600, nextSpawn: Infinity }, rng0)
    expect(texts(dawn.logs)).toContain('day breaks')
  })

  it('logs nothing while the sky stays the same', () => {
    expect(texts(step({ ...initialState, ticks: 900 }, rng0).logs)).not.toContain('night')
  })
})

describe('shooting stars', () => {
  const night: State = { ...initialState, ticks: 2400, nextSpawn: Infinity }

  it('can appear at night', () => {
    const { state, logs } = step(night, rng0)
    expect(state.meteors).toHaveLength(1)
    expect(texts(logs)).toContain('meteor')
  })

  it('do not appear when the roll is high', () => {
    expect(step(night, () => 0.99).state.meteors).toHaveLength(0)
  })

  it('never appear during the day', () => {
    expect(step({ ...night, ticks: 600 }, rng0).state.meteors).toHaveLength(0)
  })

  it('fall diagonally and leave the sky', () => {
    const first = step(night, rng0).state
    const second = step(first, () => 0.99).state
    expect(second.meteors[0].x).toBeLessThan(first.meteors[0].x)
    expect(second.meteors[0].y).toBeGreaterThan(first.meteors[0].y)
    expect(run(first, 200, () => 0.99).state.meteors).toHaveLength(0)
  })
})

// The cacti and the jump have to fit together at every speed the player can pick.
// A single frame-perfect jump is not playable, so require a margin of several frames.
const MIN_WORKING_JUMP_DELAYS = 5

describe('every cactus can be jumped over', () => {
  function workingJumpDelays(kind: ObstacleKind, speed: number) {
    let working = 0
    for (let delay = 0; delay < 120; delay++) {
      // The obstacle starts 70 frames away at every speed, so each one gets a comparable window to jump in.
      let state: State = { ...initialState, speed, obstacles: [{ x: DINO_X + speed * 70, kind }], nextSpawn: Infinity }
      for (let frame = 0; frame < 300 && !state.over; frame++) {
        if (frame === delay) state = onKey(state, 'ArrowUp').state
        state = step(state, rng0).state
      }
      if (!state.over) working++
    }
    return working
  }

  for (const kind of ['small', 'large'] as const) {
    it(`${kind} cactus, from MIN_SPEED to MAX_SPEED`, () => {
      for (let speed = MIN_SPEED; speed <= MAX_SPEED; speed++) {
        expect(workingJumpDelays(kind, speed), `${kind} at speed ${speed}`).toBeGreaterThanOrEqual(
          MIN_WORKING_JUMP_DELAYS,
        )
      }
    })
  }
})
