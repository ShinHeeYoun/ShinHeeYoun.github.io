// Distances and areas on the globe, with nothing about the screen or Google in it.
//
// The Earth is taken as a sphere with its mean radius. That is within about half a percent of the truth, which is
// plenty for a map page.

import type { LatLng } from './places'

export const EARTH_RADIUS_KM = 6371.0088

const radians = (degrees: number) => (degrees * Math.PI) / 180

// The shortest way between two points over the surface (the great circle), by the haversine formula.
export function distanceKm(a: LatLng, b: LatLng): number {
  const dLat = radians(b.lat - a.lat)
  const dLng = radians(b.lng - a.lng)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(radians(a.lat)) * Math.cos(radians(b.lat)) * Math.sin(dLng / 2) ** 2
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(h)))
}

// The length of a path through the points in order. `closed` adds the way from the last point back to the first.
export function pathLengthKm(points: LatLng[], closed = false): number {
  let total = 0
  for (let i = 1; i < points.length; i++) total += distanceKm(points[i - 1], points[i])
  if (closed && points.length > 2) total += distanceKm(points[points.length - 1], points[0])
  return total
}

type Vec = [number, number, number]
const toVec = ({ lat, lng }: LatLng): Vec => {
  const phi = radians(lat)
  const lambda = radians(lng)
  return [Math.cos(phi) * Math.cos(lambda), Math.cos(phi) * Math.sin(lambda), Math.sin(phi)]
}
const dot = (a: Vec, b: Vec) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
const cross = (a: Vec, b: Vec): Vec => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]

// The area of the polygon whose corners are the points, joined by great-circle edges. The polygon is cut into
// triangles from the first corner, and each triangle's area on the sphere comes from its spherical excess
// (Van Oosterom and Strackee). A polygon can be said to enclose either of the two parts the sphere is cut into: the
// smaller one is taken.
export function polygonAreaKm2(points: LatLng[]): number {
  if (points.length < 3) return 0
  const v = points.map(toVec)
  let excess = 0
  for (let i = 1; i < v.length - 1; i++) {
    const triple = dot(v[0], cross(v[i], v[i + 1]))
    const denominator = 1 + dot(v[0], v[i]) + dot(v[i], v[i + 1]) + dot(v[i + 1], v[0])
    excess += 2 * Math.atan2(triple, denominator)
  }
  const area = Math.abs(excess)
  return Math.min(area, 4 * Math.PI - area) * EARTH_RADIUS_KM ** 2
}

const withCommas = (n: number) => Math.round(n).toLocaleString('en-US')

export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`
  if (km < 100) return `${km.toFixed(1)} km`
  return `${withCommas(km)} km`
}

export function formatArea(km2: number): string {
  if (km2 < 1) return `${withCommas(km2 * 1_000_000)} m²`
  if (km2 < 100) return `${km2.toFixed(1)} km²`
  return `${withCommas(km2)} km²`
}
