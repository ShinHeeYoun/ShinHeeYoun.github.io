// The rules of the roulette, with nothing about the screen in it (see RouletteView.tsx for that).
//
// The wheel has one slice for each name, all the same size. Angles are in degrees, measured clockwise from the top,
// where the pointer is. At rotation 0 slice 0 starts at the top and the slices follow clockwise. Turning the wheel by
// `rotation` clockwise brings the part of the wheel that was at angle `-rotation` under the pointer.

import type { Rng } from '../../lib/random'

export const MIN_ITEMS = 2
export const MAX_ITEMS = 20
export const MAX_NAME = 20 // characters in a name
export const DEFAULT_ROWS = ['짜장면', '짬뽕', '볶음밥', '탕수육']
export const SPIN_MS = 5000
const MIN_TURNS = 4 // whole turns before the wheel settles, so that every spin looks like a spin
const MAX_TURNS = 6
const EDGE = 0.1 // how much of a slice, at each end, a landing keeps clear of, so that it never stops on a line

// --- The names the player typed ---

export type Entry = { row: number; name: string }

// The names that count: trimmed, cut to MAX_NAME characters, and without the empty rows. `row` is where each one was typed.
export function entriesOf(rows: string[]): Entry[] {
  const entries: Entry[] = []
  rows.forEach((text, row) => {
    const name = [...text.trim()].slice(0, MAX_NAME).join('')
    if (name !== '') entries.push({ row, name })
  })
  return entries
}

export function canSpin(rows: string[]): boolean {
  return entriesOf(rows).length >= MIN_ITEMS
}

// A new empty row after `after` (at the end if not given). Nothing changes once there are MAX_ITEMS rows.
export function addRow(rows: string[], after?: number): string[] {
  if (rows.length >= MAX_ITEMS) return rows
  const at = after === undefined ? rows.length : Math.min(rows.length, Math.max(0, after + 1))
  return [...rows.slice(0, at), '', ...rows.slice(at)]
}

// Takes a row away. At MIN_ITEMS rows it only empties the row, so the player always has two to type into.
export function removeRow(rows: string[], index: number): string[] {
  if (index < 0 || index >= rows.length) return rows
  if (rows.length <= MIN_ITEMS) return rows.map((text, i) => (i === index ? '' : text))
  return rows.filter((_, i) => i !== index)
}

export function setRow(rows: string[], index: number, text: string): string[] {
  return rows.map((current, i) => (i === index ? text : current))
}

// Rows read back from storage. Anything that is not a list of texts gives null; a list that is too long or too
// short is fixed.
export function parseRows(raw: unknown): string[] | null {
  if (!Array.isArray(raw) || !raw.every((item) => typeof item === 'string')) return null
  const rows = (raw as string[]).slice(0, MAX_ITEMS)
  while (rows.length < MIN_ITEMS) rows.push('')
  return rows
}

// --- Spinning ---

// Which slice wins. Every slice has the same chance, and this is decided before the wheel moves: the turning is only
// the way of showing it.
export function pickWinner(count: number, rng: Rng): number {
  return Math.min(count - 1, Math.floor(rng() * count))
}

export function normalizeAngle(degrees: number): number {
  return ((degrees % 360) + 360) % 360
}

// The slice that is under the pointer when the wheel has been turned by `rotation`.
export function sliceAtPointer(rotation: number, count: number): number {
  return Math.min(count - 1, Math.floor(normalizeAngle(-rotation) / (360 / count)))
}

// The rotation to turn to so that the pointer ends up on `winner`, somewhere inside that slice (not always the
// middle). It is always at least MIN_TURNS whole turns clockwise from `current`.
export function landingRotation(current: number, count: number, winner: number, rng: Rng): number {
  const size = 360 / count
  const target = winner * size + size * (EDGE + (1 - 2 * EDGE) * rng()) // an angle of the wheel, inside the slice
  const turns = MIN_TURNS + Math.min(MAX_TURNS - MIN_TURNS, Math.floor(rng() * (MAX_TURNS - MIN_TURNS + 1)))
  const forward = normalizeAngle(-target - current) // how far on to bring `target` under the pointer
  return current + turns * 360 + forward
}

// --- Drawing ---

const point = (cx: number, cy: number, radius: number, degrees: number): [number, number] => {
  const radians = (degrees * Math.PI) / 180
  return [cx + radius * Math.sin(radians), cy - radius * Math.cos(radians)]
}

const round = (value: number) => Math.round(value * 100) / 100

// The outline of one slice, from `from` to `to` degrees.
export function slicePath(cx: number, cy: number, radius: number, from: number, to: number): string {
  const [x1, y1] = point(cx, cy, radius, from)
  const [x2, y2] = point(cx, cy, radius, to)
  const largeArc = to - from > 180 ? 1 : 0
  return `M ${cx} ${cy} L ${round(x1)} ${round(y1)} A ${radius} ${radius} 0 ${largeArc} 1 ${round(x2)} ${round(y2)} Z`
}

// Neighbouring slices get hues far apart; dark enough for white text.
export function sliceColor(index: number): string {
  return `hsl(${Math.round((index * 137.5) % 360)} 55% 38%)`
}

// How much of a name fits on its slice: fewer letters when the slices are narrow.
export function labelFor(name: string, count: number): string {
  const max = count <= 6 ? 12 : count <= 10 ? 9 : count <= 14 ? 7 : 5
  const letters = [...name]
  return letters.length <= max ? name : `${letters.slice(0, max - 1).join('')}…`
}

export function labelSize(count: number): number {
  return count <= 6 ? 20 : count <= 10 ? 16 : count <= 14 ? 13 : 11
}
