// The part of the map that goes into the page's address, so that a link opens the same view.
//   #/tools/map?lat=37.56650&lng=126.97800&z=11&t=satellite

import { MAX_LAT, MIN_ZOOM, wrapLongitude, type LatLng } from './places'

export const MAP_TYPES = ['roadmap', 'satellite', 'hybrid', 'terrain'] as const
export type MapType = (typeof MAP_TYPES)[number]
export type View = { center: LatLng; zoom: number; mapTypeId: string }

const MAX_ZOOM = 21

// The view an address asks for, or null when it does not ask for one (or asks for nonsense). Anyone can write
// anything into an address, so every number is checked and brought into range.
export function parseView(params: URLSearchParams): View | null {
  const read = (name: string) => {
    const text = params.get(name)
    if (text === null || text.trim() === '') return null
    const value = Number(text)
    return Number.isFinite(value) ? value : null
  }
  const lat = read('lat')
  const lng = read('lng')
  const zoom = read('z')
  if (lat === null || lng === null || zoom === null) return null
  const type = params.get('t') ?? 'roadmap'
  return {
    center: { lat: Math.min(MAX_LAT, Math.max(-MAX_LAT, lat)), lng: wrapLongitude(lng) },
    zoom: Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom)),
    mapTypeId: (MAP_TYPES as readonly string[]).includes(type) ? type : 'roadmap',
  }
}

export function viewParams(view: View): URLSearchParams {
  const params = new URLSearchParams()
  params.set('lat', view.center.lat.toFixed(5))
  params.set('lng', wrapLongitude(view.center.lng).toFixed(5))
  params.set('z', String(Math.round(view.zoom * 10) / 10))
  if (view.mapTypeId !== 'roadmap') params.set('t', view.mapTypeId)
  return params
}
