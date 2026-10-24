import { describe, it, expect } from 'vitest'
import { mapsScriptUrl } from './loader'
import {
  MAX_LAT,
  PLACES,
  WORLD_PLACE,
  WORLD_VIEW,
  clampLatitude,
  formatCoordinates,
  plainCoordinates,
  wrapLongitude,
} from './places'

describe('wrapLongitude', () => {
  it('leaves a longitude inside -180 to 180 as it is', () => {
    expect(wrapLongitude(0)).toBe(0)
    expect(wrapLongitude(126.978)).toBeCloseTo(126.978)
    expect(wrapLongitude(-74.006)).toBeCloseTo(-74.006)
    expect(wrapLongitude(-180)).toBe(-180)
  })

  it('brings a longitude from a dragged-around map back into range', () => {
    expect(wrapLongitude(190)).toBeCloseTo(-170)
    expect(wrapLongitude(-190)).toBeCloseTo(170)
    expect(wrapLongitude(360 + 30)).toBeCloseTo(30)
    expect(wrapLongitude(-720 - 45)).toBeCloseTo(-45)
    expect(wrapLongitude(180)).toBe(-180) // the date line is written as west
  })
})

describe('clampLatitude', () => {
  it('keeps the latitude where the map has something to show', () => {
    expect(clampLatitude(37.5)).toBe(37.5)
    expect(clampLatitude(90)).toBe(MAX_LAT)
    expect(clampLatitude(-90)).toBe(-MAX_LAT)
  })
})

describe('formatCoordinates', () => {
  it('writes the hemisphere with each number', () => {
    expect(formatCoordinates({ lat: 37.5665, lng: 126.978 })).toBe('37.56650° N, 126.97800° E')
    expect(formatCoordinates({ lat: -33.8688, lng: 151.2093 })).toBe('33.86880° S, 151.20930° E')
    expect(formatCoordinates({ lat: 40.7128, lng: -74.006 })).toBe('40.71280° N, 74.00600° W')
    expect(formatCoordinates({ lat: 0, lng: 0 })).toBe('0.00000° N, 0.00000° E')
  })

  it('wraps a longitude outside the range', () => {
    expect(formatCoordinates({ lat: 10, lng: 190 })).toBe('10.00000° N, 170.00000° W')
  })
})

describe('plainCoordinates', () => {
  it('gives numbers that can be pasted into a map search', () => {
    expect(plainCoordinates({ lat: 37.5665, lng: 126.978 })).toBe('37.56650, 126.97800')
    expect(plainCoordinates({ lat: -33.8688, lng: -190 })).toBe('-33.86880, 170.00000')
  })
})

describe('PLACES', () => {
  it('has places with real coordinates and a zoom the map can show', () => {
    expect(PLACES.length).toBeGreaterThanOrEqual(10)
    for (const place of PLACES) {
      expect(place.lat, place.name).toBeGreaterThanOrEqual(-MAX_LAT)
      expect(place.lat, place.name).toBeLessThanOrEqual(MAX_LAT)
      expect(place.lng, place.name).toBeGreaterThanOrEqual(-180)
      expect(place.lng, place.name).toBeLessThanOrEqual(180)
      expect(place.zoom, place.name).toBeGreaterThanOrEqual(3)
      expect(place.zoom, place.name).toBeLessThanOrEqual(15)
    }
  })

  it('has no two places with the same id or name', () => {
    expect(new Set(PLACES.map((place) => place.id)).size).toBe(PLACES.length)
    expect(new Set(PLACES.map((place) => place.name)).size).toBe(PLACES.length)
  })

  it('knows where a few well-known cities are', () => {
    const seoul = PLACES.find((place) => place.id === 'seoul')
    expect(seoul?.lat).toBeCloseTo(37.57, 1)
    expect(seoul?.lng).toBeCloseTo(126.98, 1)
    const sydney = PLACES.find((place) => place.id === 'sydney')
    expect(sydney?.lat).toBeLessThan(0) // south
    expect(PLACES.find((place) => place.id === 'newyork')?.lng).toBeLessThan(0) // west
  })

  it('has a view of the whole world to come back to', () => {
    expect(WORLD_PLACE.zoom).toBe(WORLD_VIEW.zoom)
    expect(WORLD_PLACE.lat).toBe(WORLD_VIEW.center.lat)
  })
})

describe('mapsScriptUrl', () => {
  it('asks Google for the Maps JavaScript API with the key, in Korean, loaded without blocking the page', () => {
    const url = new URL(mapsScriptUrl('MY_KEY'))
    expect(url.origin).toBe('https://maps.googleapis.com')
    expect(url.pathname).toBe('/maps/api/js')
    expect(url.searchParams.get('key')).toBe('MY_KEY')
    expect(url.searchParams.get('loading')).toBe('async')
    expect(url.searchParams.get('language')).toBe('ko')
    expect(url.searchParams.get('callback')).toBeTruthy()
  })

  it('encodes a key, so that nothing in it can add a parameter or change the address', () => {
    const url = new URL(mapsScriptUrl('a&b=c#d'))
    expect(url.searchParams.get('key')).toBe('a&b=c#d')
    expect(url.searchParams.get('b')).toBeNull()
    expect(url.hash).toBe('')
  })
})
