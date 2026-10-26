import { describe, expect, it } from 'vitest'
import { COLORS, MAX_PARTICLES, PARTICLES_PER_BURST, addBurst, createBurst, isAlive, opacityOf, stepParticle } from './confetti'

// A repeatable "random": 0.1, 0.2, ... 0.9, then round again.
function sequence() {
  let i = 0
  return () => {
    i = (i % 9) + 1
    return i / 10
  }
}

describe('createBurst', () => {
  it('makes the usual number of pieces, all starting at the click', () => {
    const burst = createBurst(120, 340, sequence())
    expect(burst).toHaveLength(PARTICLES_PER_BURST)
    for (const p of burst) {
      expect(p.x).toBe(120)
      expect(p.y).toBe(340)
      expect(p.age).toBe(0)
    }
  })

  it('uses only the yellows, and gives every piece a life and a size', () => {
    for (const p of createBurst(0, 0, Math.random, 200)) {
      expect(COLORS).toContain(p.color)
      expect(p.life).toBeGreaterThanOrEqual(0.9)
      expect(p.life).toBeLessThan(1.7)
      expect(p.size).toBeGreaterThanOrEqual(4)
      expect(p.size).toBeLessThan(9)
    }
  })

  it('spreads the pieces in every direction', () => {
    const burst = createBurst(0, 0, Math.random, 300)
    expect(burst.some((p) => p.vx > 100)).toBe(true)
    expect(burst.some((p) => p.vx < -100)).toBe(true)
    expect(burst.some((p) => p.vy > 100)).toBe(true)
    expect(burst.some((p) => p.vy < -100)).toBe(true)
  })
})

describe('stepParticle', () => {
  const start = { x: 0, y: 0, vx: 300, vy: 0, size: 5, color: COLORS[0], angle: 0, spin: 2, round: false, age: 0, life: 1 }

  it('moves the piece along its speed, and ages it', () => {
    const next = stepParticle(start, 0.1)
    expect(next.x).toBeGreaterThan(0)
    expect(next.x).toBeLessThan(30) // it would be 30 without slowing down
    expect(next.age).toBeCloseTo(0.1)
    expect(next.angle).toBeCloseTo(0.2)
  })

  it('pulls it down, and slows it sideways', () => {
    let p = start
    for (let i = 0; i < 30; i += 1) p = stepParticle(p, 1 / 60)
    expect(p.vy).toBeGreaterThan(0)
    expect(p.y).toBeGreaterThan(0)
    expect(p.vx).toBeLessThan(start.vx)
    expect(p.vx).toBeGreaterThan(0)
  })

  it('leaves the piece it was given unchanged', () => {
    stepParticle(start, 0.5)
    expect(start.x).toBe(0)
    expect(start.age).toBe(0)
  })
})

describe('life and fading', () => {
  const piece = (age: number) => ({ x: 0, y: 0, vx: 0, vy: 0, size: 5, color: COLORS[0], angle: 0, spin: 0, round: true, age, life: 1 })

  it('is alive until its life is over', () => {
    expect(isAlive(piece(0.99))).toBe(true)
    expect(isAlive(piece(1))).toBe(false)
  })

  it('is fully visible at first, then fades to nothing', () => {
    expect(opacityOf(piece(0))).toBe(1)
    expect(opacityOf(piece(0.5))).toBe(1)
    expect(opacityOf(piece(0.8))).toBeCloseTo(0.5)
    expect(opacityOf(piece(1))).toBe(0)
    expect(opacityOf(piece(2))).toBe(0)
  })
})

describe('addBurst', () => {
  it('adds the new pieces after the ones flying', () => {
    const flying = createBurst(1, 1, sequence(), 5)
    const added = createBurst(2, 2, sequence(), 3)
    const all = addBurst(flying, added)
    expect(all).toHaveLength(8)
    expect(all.slice(5)).toEqual(added)
  })

  it('never keeps more than the limit, dropping the oldest', () => {
    const flying = createBurst(1, 1, Math.random, MAX_PARTICLES - 5)
    const added = createBurst(2, 2, Math.random, 20)
    const all = addBurst(flying, added)
    expect(all).toHaveLength(MAX_PARTICLES)
    expect(all.slice(-20)).toEqual(added)
  })
})
