export const HALF_CYCLE = 1800 // steps in 30 s (the game runs 60 steps per second): day, then night, then day...
const FADE = 240 // 4 s of blending around each switch

const smoothstep = (t: number) => t * t * (3 - 2 * t)

// 0 = full day, 1 = full night. The switches sit exactly at 30 s, 60 s, 90 s...
export function nightAmount(ticks: number): number {
  const shifted = ticks + FADE / 2
  const switches = Math.floor(shifted / HALF_CYCLE) // the k-th switch is at k * HALF_CYCLE
  const sinceFadeStart = shifted - switches * HALF_CYCLE
  const after = switches % 2
  if (sinceFadeStart >= FADE) return after
  const before = switches === 0 ? 0 : (switches - 1) % 2
  return before + (after - before) * smoothstep(sinceFadeStart / FADE)
}

// Position on the sky arc: 0 = rising on the left, 1 = setting on the right. It runs a little past both ends
// while the sky fades, so the sun is still setting as the moon starts to rise.
function arc(ticks: number, start: number) {
  const cycle = HALF_CYCLE * 2
  const since = (((ticks - start + FADE / 2) % cycle) + cycle) % cycle
  return (since - FADE / 2) / HALF_CYCLE
}
export const sunProgress = (ticks: number) => arc(ticks, 0)
export const moonProgress = (ticks: number) => arc(ticks, HALF_CYCLE)
