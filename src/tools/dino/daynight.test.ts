import { describe, it, expect } from 'vitest'
import { HALF_CYCLE, moonProgress, nightAmount, sunProgress } from './daynight'

describe('nightAmount', () => {
  it('starts in full daylight and stays there until just before 30 seconds', () => {
    expect(nightAmount(0)).toBe(0)
    expect(nightAmount(900)).toBe(0)
    expect(nightAmount(HALF_CYCLE - 150)).toBe(0)
  })

  it('is exactly halfway between day and night at 30 s, then full night', () => {
    expect(nightAmount(HALF_CYCLE)).toBeCloseTo(0.5)
    expect(nightAmount(HALF_CYCLE + 300)).toBe(1)
    expect(nightAmount(HALF_CYCLE * 1.5)).toBe(1)
  })

  it('returns to day at 60 s and keeps swapping every 30 s', () => {
    expect(nightAmount(HALF_CYCLE * 2)).toBeCloseTo(0.5)
    expect(nightAmount(HALF_CYCLE * 2 + 300)).toBe(0)
    expect(nightAmount(HALF_CYCLE * 3)).toBeCloseTo(0.5)
    expect(nightAmount(HALF_CYCLE * 3 + 300)).toBe(1)
  })

  it('changes smoothly and stays between 0 and 1', () => {
    let previous = nightAmount(0)
    for (let ticks = 1; ticks < HALF_CYCLE * 6; ticks++) {
      const value = nightAmount(ticks)
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThanOrEqual(1)
      expect(Math.abs(value - previous)).toBeLessThan(0.03)
      previous = value
    }
  })
})

describe('sunProgress and moonProgress', () => {
  it('the sun crosses the sky during the day, rising on the left and setting on the right', () => {
    expect(sunProgress(0)).toBe(0)
    expect(sunProgress(HALF_CYCLE / 2)).toBe(0.5)
    expect(sunProgress(HALF_CYCLE)).toBe(1)
  })

  it('the moon does the same during the night', () => {
    expect(moonProgress(HALF_CYCLE)).toBe(0)
    expect(moonProgress(HALF_CYCLE * 1.5)).toBe(0.5)
    expect(moonProgress(HALF_CYCLE * 2)).toBe(1)
  })

  it('the sun is still near the right edge as night falls, and the next one rises before dawn ends', () => {
    expect(sunProgress(HALF_CYCLE + 60)).toBeGreaterThan(1)
    expect(sunProgress(HALF_CYCLE * 2 - 60)).toBeLessThan(0)
    expect(sunProgress(HALF_CYCLE * 2 - 60)).toBeGreaterThan(-0.1)
  })

  it('repeats every 60 s', () => {
    expect(sunProgress(HALF_CYCLE * 2 + 900)).toBeCloseTo(0.5)
    expect(moonProgress(HALF_CYCLE * 3 + 900)).toBeCloseTo(0.5)
  })
})
