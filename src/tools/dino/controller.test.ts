import { describe, it, expect } from 'vitest'
import {
  DINO_X,
  MAX_SPEED,
  MIN_SPEED,
  JUMP_V,
  getScore,
  initialState,
  onKey,
  step,
  type State,
} from './controller'

const rng0 = () => 0

function texts(logs: { text: string }[]) {
  return logs.map((log) => log.text).join('\n')
}

describe('onKey', () => {
  it('jumps on ArrowUp when standing on the ground', () => {
    const { state, logs } = onKey(initialState, 'ArrowUp')
    expect(state.vy).toBe(JUMP_V)
    expect(texts(logs)).toContain('keydown ArrowUp')
    expect(texts(logs)).toContain('vy = JUMP_V')
  })

  it('jumps on Space too', () => {
    const { state } = onKey(initialState, 'Space')
    expect(state.vy).toBe(JUMP_V)
  })

  it('does not double jump while airborne', () => {
    const airborne: State = { ...initialState, y: 40, vy: 3 }
    const { state, logs } = onKey(airborne, 'ArrowUp')
    expect(state.vy).toBe(3)
    expect(texts(logs)).toContain('ignored')
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

  it('restarts after game over and keeps the chosen speed', () => {
    const dead: State = { ...initialState, over: true, speed: 9, distance: 5000 }
    const { state, logs } = onKey(dead, 'Space')
    expect(state.over).toBe(false)
    expect(state.distance).toBe(0)
    expect(state.speed).toBe(9)
    expect(texts(logs)).toContain('restart')
  })
})

describe('step', () => {
  it('advances distance and obstacles by the current speed', () => {
    const before: State = { ...initialState, speed: 5, obstacles: [{ x: 300, w: 12, h: 20 }] }
    const { state, logs } = step(before, rng0)
    expect(state.distance).toBe(5)
    expect(state.obstacles[0].x).toBe(295)
    expect(logs).toEqual([])
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
    expect(state.nextSpawn).toBeGreaterThan(state.distance)
    expect(texts(logs)).toContain('spawn')
  })

  it('ends the game when the dino touches an obstacle', () => {
    const before: State = { ...initialState, obstacles: [{ x: DINO_X + 4, w: 14, h: 24 }] }
    const { state, logs } = step(before, rng0)
    expect(state.over).toBe(true)
    expect(texts(logs)).toContain('collision')
  })

  it('does not collide when jumping above the obstacle', () => {
    const before: State = {
      ...initialState,
      y: 60,
      vy: 0,
      obstacles: [{ x: DINO_X + 4, w: 14, h: 30 }],
    }
    expect(step(before, rng0).state.over).toBe(false)
  })

  it('freezes after game over', () => {
    const dead: State = { ...initialState, over: true }
    const { state, logs } = step(dead, rng0)
    expect(state).toBe(dead)
    expect(logs).toEqual([])
  })
})

describe('getScore', () => {
  it('is the scrolled distance divided by 10, rounded down', () => {
    expect(getScore({ ...initialState, distance: 1234 })).toBe(123)
  })
})
