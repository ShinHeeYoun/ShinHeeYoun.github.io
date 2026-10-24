import { describe, it, expect } from 'vitest'
import { parseView, viewParams } from './shareLink'

const params = (text: string) => new URLSearchParams(text)

describe('parseView', () => {
  it('reads the view an address asks for', () => {
    expect(parseView(params('lat=37.5665&lng=126.978&z=11&t=satellite'))).toEqual({
      center: { lat: 37.5665, lng: 126.978 },
      zoom: 11,
      mapTypeId: 'satellite',
    })
  })

  it('uses the ordinary map when no type is given', () => {
    expect(parseView(params('lat=1&lng=2&z=5'))?.mapTypeId).toBe('roadmap')
  })

  it('asks for nothing when a number is missing or is not a number', () => {
    for (const text of ['', 'lat=1&lng=2', 'lat=1&z=3', 'lng=2&z=3', 'lat=&lng=2&z=3', 'lat=abc&lng=2&z=3', 'lat=1&lng=2&z=NaN', 'lat=Infinity&lng=2&z=3']) {
      expect(parseView(params(text)), text).toBeNull()
    }
  })

  it('brings numbers that are out of range into range', () => {
    const view = parseView(params('lat=95&lng=190&z=99'))
    expect(view?.center.lat).toBe(85)
    expect(view?.center.lng).toBeCloseTo(-170)
    expect(view?.zoom).toBe(21)
    expect(parseView(params('lat=-95&lng=0&z=-4'))).toMatchObject({ center: { lat: -85 }, zoom: 2 })
  })

  it('only accepts the map types Google has, so that an address cannot say anything else', () => {
    for (const type of ['roadmap', 'satellite', 'hybrid', 'terrain']) {
      expect(parseView(params(`lat=1&lng=2&z=3&t=${type}`))?.mapTypeId).toBe(type)
    }
    for (const type of ['<script>', 'SATELLITE', '', 'x'.repeat(50), '../../etc']) {
      expect(parseView(params(`lat=1&lng=2&z=3&t=${encodeURIComponent(type)}`))?.mapTypeId, type).toBe('roadmap')
    }
  })
})

describe('viewParams', () => {
  it('writes the view into an address', () => {
    expect(viewParams({ center: { lat: 37.5665, lng: 126.978 }, zoom: 11, mapTypeId: 'satellite' }).toString()).toBe(
      'lat=37.56650&lng=126.97800&z=11&t=satellite',
    )
  })

  it('leaves out the type for the ordinary map, and shortens a fractional zoom', () => {
    expect(viewParams({ center: { lat: 1, lng: 2 }, zoom: 4.23456, mapTypeId: 'roadmap' }).toString()).toBe('lat=1.00000&lng=2.00000&z=4.2')
  })

  it('reads back what it wrote', () => {
    const view = { center: { lat: -33.8688, lng: 151.2093 }, zoom: 9, mapTypeId: 'hybrid' }
    const back = parseView(viewParams(view))
    expect(back?.center.lat).toBeCloseTo(view.center.lat, 4)
    expect(back?.center.lng).toBeCloseTo(view.center.lng, 4)
    expect(back?.zoom).toBe(9)
    expect(back?.mapTypeId).toBe('hybrid')
  })

  it('wraps a longitude from a map dragged past the date line', () => {
    expect(viewParams({ center: { lat: 0, lng: 190 }, zoom: 3, mapTypeId: 'roadmap' }).get('lng')).toBe('-170.00000')
  })
})
