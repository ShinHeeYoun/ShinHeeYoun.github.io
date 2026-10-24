// Fixed data and small calculations for the map page, with nothing about the screen or Google in it.

export type LatLng = { lat: number; lng: number }
export type Place = LatLng & { id: string; name: string; zoom: number }

// What the map shows when it opens: the whole world.
export const WORLD_VIEW = { center: { lat: 20, lng: 0 } as LatLng, zoom: 2 }
export const MIN_ZOOM = 2
export const WORLD_PLACE: Place = { id: 'world', name: '세계', ...WORLD_VIEW.center, zoom: WORLD_VIEW.zoom }
export const MAX_LAT = 85 // the map (Web Mercator) ends near here; beyond it there is nothing to show

// Places to jump to. `zoom` is how close the view comes (3 is a continent, 10 a city).
export const PLACES: readonly Place[] = [
  { id: 'seoul', name: '서울', lat: 37.5665, lng: 126.978, zoom: 11 },
  { id: 'tokyo', name: '도쿄', lat: 35.6762, lng: 139.6503, zoom: 10 },
  { id: 'beijing', name: '베이징', lat: 39.9042, lng: 116.4074, zoom: 10 },
  { id: 'singapore', name: '싱가포르', lat: 1.3521, lng: 103.8198, zoom: 11 },
  { id: 'dubai', name: '두바이', lat: 25.2048, lng: 55.2708, zoom: 10 },
  { id: 'paris', name: '파리', lat: 48.8566, lng: 2.3522, zoom: 11 },
  { id: 'london', name: '런던', lat: 51.5072, lng: -0.1276, zoom: 10 },
  { id: 'newyork', name: '뉴욕', lat: 40.7128, lng: -74.006, zoom: 10 },
  { id: 'sanfrancisco', name: '샌프란시스코', lat: 37.7749, lng: -122.4194, zoom: 11 },
  { id: 'sydney', name: '시드니', lat: -33.8688, lng: 151.2093, zoom: 10 },
  { id: 'saopaulo', name: '상파울루', lat: -23.5505, lng: -46.6333, zoom: 10 },
  { id: 'cairo', name: '카이로', lat: 30.0444, lng: 31.2357, zoom: 10 },
]

// A longitude brought into -180 to 180. Dragging the map past the date line gives numbers outside that range.
export function wrapLongitude(lng: number): number {
  if (lng >= -180 && lng < 180) return lng // already in range: unchanged, not changed by rounding
  return ((((lng + 180) % 360) + 360) % 360) - 180
}

export function clampLatitude(lat: number): number {
  return Math.min(MAX_LAT, Math.max(-MAX_LAT, lat))
}

// "37.56650° N, 126.97800° E" for the point the player clicked.
export function formatCoordinates({ lat, lng }: LatLng): string {
  const wrapped = wrapLongitude(lng)
  const ns = lat < 0 ? 'S' : 'N'
  const ew = wrapped < 0 ? 'W' : 'E'
  return `${Math.abs(lat).toFixed(5)}° ${ns}, ${Math.abs(wrapped).toFixed(5)}° ${ew}`
}

// "37.56650, 126.97800": the form that can be pasted into a map search box.
export function plainCoordinates({ lat, lng }: LatLng): string {
  return `${lat.toFixed(5)}, ${wrapLongitude(lng).toFixed(5)}`
}
