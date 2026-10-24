import { describe, it, expect } from 'vitest'
import { EARTH_RADIUS_KM, distanceKm, formatArea, formatDistance, pathLengthKm, polygonAreaKm2 } from './geo'

const seoul = { lat: 37.5665, lng: 126.978 }
const tokyo = { lat: 35.6762, lng: 139.6503 }
const newYork = { lat: 40.7128, lng: -74.006 }
const london = { lat: 51.5072, lng: -0.1276 }

describe('distanceKm', () => {
  it('is zero from a point to itself', () => {
    expect(distanceKm(seoul, seoul)).toBe(0)
  })

  it('knows the distance between well-known cities', () => {
    expect(Math.abs(distanceKm(seoul, tokyo) - 1149)).toBeLessThan(3)
    expect(Math.abs(distanceKm(newYork, london) - 5570)).toBeLessThan(5)
  })

  it('is the same in either direction', () => {
    expect(distanceKm(seoul, tokyo)).toBeCloseTo(distanceKm(tokyo, seoul), 9)
  })

  it('takes the short way round the date line', () => {
    const d = distanceKm({ lat: 0, lng: 179 }, { lat: 0, lng: -179 })
    expect(d).toBeCloseTo((2 * Math.PI * EARTH_RADIUS_KM * 2) / 360, 3) // two degrees of the equator
  })

  it('is a quarter of the way round from the equator to the pole, and half way round to the other side', () => {
    expect(distanceKm({ lat: 0, lng: 0 }, { lat: 90, lng: 0 })).toBeCloseTo((Math.PI * EARTH_RADIUS_KM) / 2, 6)
    expect(distanceKm({ lat: 0, lng: 0 }, { lat: 0, lng: 180 })).toBeCloseTo(Math.PI * EARTH_RADIUS_KM, 6)
  })
})

describe('pathLengthKm', () => {
  it('adds up the legs', () => {
    expect(pathLengthKm([seoul, tokyo, newYork])).toBeCloseTo(distanceKm(seoul, tokyo) + distanceKm(tokyo, newYork), 6)
  })

  it('is zero for no points or one', () => {
    expect(pathLengthKm([])).toBe(0)
    expect(pathLengthKm([seoul])).toBe(0)
  })

  it('adds the way back to the start when the path is closed (with at least three points)', () => {
    const triangle = [seoul, tokyo, { lat: 34.6937, lng: 135.5023 }]
    expect(pathLengthKm(triangle, true)).toBeCloseTo(pathLengthKm(triangle) + distanceKm(triangle[2], triangle[0]), 6)
    expect(pathLengthKm([seoul, tokyo], true)).toBeCloseTo(pathLengthKm([seoul, tokyo]), 6)
  })
})

describe('polygonAreaKm2', () => {
  it('is zero for fewer than three points', () => {
    expect(polygonAreaKm2([])).toBe(0)
    expect(polygonAreaKm2([seoul, tokyo])).toBe(0)
  })

  it('is an eighth of the sphere for the triangle from the pole to two points on the equator a quarter apart', () => {
    const triangle = [
      { lat: 90, lng: 0 },
      { lat: 0, lng: 0 },
      { lat: 0, lng: 90 },
    ]
    expect(polygonAreaKm2(triangle)).toBeCloseTo((4 * Math.PI * EARTH_RADIUS_KM ** 2) / 8, 0)
  })

  it('is about 12,300 km² for a square of one degree at the equator', () => {
    const square = [
      { lat: 0, lng: 0 },
      { lat: 0, lng: 1 },
      { lat: 1, lng: 1 },
      { lat: 1, lng: 0 },
    ]
    const side = (2 * Math.PI * EARTH_RADIUS_KM) / 360
    expect(polygonAreaKm2(square)).toBeCloseTo(side * side, -2) // within about 100 km²
  })

  it('does not depend on which way round the corners are listed, or where they start', () => {
    const square = [
      { lat: 10, lng: 10 },
      { lat: 10, lng: 12 },
      { lat: 12, lng: 12 },
      { lat: 12, lng: 10 },
    ]
    const area = polygonAreaKm2(square)
    expect(polygonAreaKm2([...square].reverse())).toBeCloseTo(area, 6)
    expect(polygonAreaKm2([square[2], square[3], square[0], square[1]])).toBeCloseTo(area, 6)
  })

  it('works across the date line', () => {
    const across = [
      { lat: 0, lng: 179 },
      { lat: 0, lng: -179 },
      { lat: 2, lng: -179 },
      { lat: 2, lng: 179 },
    ]
    const plain = [
      { lat: 0, lng: 0 },
      { lat: 0, lng: 2 },
      { lat: 2, lng: 2 },
      { lat: 2, lng: 0 },
    ]
    expect(polygonAreaKm2(across)).toBeCloseTo(polygonAreaKm2(plain), 3)
  })

  it('agrees with another way of working out the area of a triangle (from its three side lengths)', () => {
    const beijing = { lat: 39.9042, lng: 116.4074 }
    const a = distanceKm(tokyo, beijing) / EARTH_RADIUS_KM
    const b = distanceKm(seoul, beijing) / EARTH_RADIUS_KM
    const c = distanceKm(seoul, tokyo) / EARTH_RADIUS_KM
    const s = (a + b + c) / 2
    // L'Huilier's theorem for the spherical excess
    const t = Math.sqrt(Math.tan(s / 2) * Math.tan((s - a) / 2) * Math.tan((s - b) / 2) * Math.tan((s - c) / 2))
    const expected = 4 * Math.atan(t) * EARTH_RADIUS_KM ** 2
    expect(polygonAreaKm2([seoul, tokyo, beijing])).toBeCloseTo(expected, 0)
    expect(expected).toBeGreaterThan(100_000) // and it is the size of a small country, not nothing
  })
})

describe('formatDistance', () => {
  it('uses metres under a kilometre, one decimal under 100 and whole kilometres above', () => {
    expect(formatDistance(0.5)).toBe('500 m')
    expect(formatDistance(0)).toBe('0 m')
    expect(formatDistance(12.34)).toBe('12.3 km')
    expect(formatDistance(99.94)).toBe('99.9 km')
    expect(formatDistance(1158.4)).toBe('1,158 km')
    expect(formatDistance(20015.1)).toBe('20,015 km')
  })
})

describe('formatArea', () => {
  it('uses square metres under a square kilometre, one decimal under 100 and whole numbers above', () => {
    expect(formatArea(0.25)).toBe('250,000 m²')
    expect(formatArea(12.34)).toBe('12.3 km²')
    expect(formatArea(12300.4)).toBe('12,300 km²')
  })
})
