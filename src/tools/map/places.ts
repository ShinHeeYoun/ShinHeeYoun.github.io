// Fixed data and small calculations for the map page, with nothing about the screen or Google in it.

export type LatLng = { lat: number; lng: number }
export type Place = LatLng & { id: string; name: string; zoom: number }

// What the map shows when it opens: the whole world.
export const WORLD_VIEW = { center: { lat: 20, lng: 0 } as LatLng, zoom: 2 }
export const MIN_ZOOM = 2
export const MAX_LAT = 85 // the map (Web Mercator) ends near here; beyond it there is nothing to show

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
