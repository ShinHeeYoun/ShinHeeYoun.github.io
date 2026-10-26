// The pieces of the yellow burst that appears where the page background is clicked. This file only works out where
// every piece is and when it is gone; drawing it is up to the component.

export type Particle = {
  x: number
  y: number
  vx: number // pixels per second
  vy: number
  size: number
  color: string
  angle: number // radians
  spin: number // radians per second
  round: boolean // a dot, rather than a small strip
  age: number // seconds
  life: number // seconds it lasts
}

// Yellows that can be seen on both the dark and the light page: the palette's own #ffc300 and #ffd60a, and warmer
// ones that do not vanish into white.
export const COLORS = ['#ffc300', '#ffd60a', '#ffb703', '#ffca3a', '#f59e0b']

export const PARTICLES_PER_BURST = 36
export const MAX_PARTICLES = 420 // however fast the reader clicks, there is never more than this on the screen
const GRAVITY = 900 // pixels per second, per second
const DRAG = 2.2 // per second: the fraction of speed lost grows with time, so the burst slows as it spreads

// A burst from one point. `random` returns a number from 0 up to (not including) 1.
export function createBurst(x: number, y: number, random: () => number = Math.random, count = PARTICLES_PER_BURST): Particle[] {
  return Array.from({ length: count }, () => {
    const direction = random() * Math.PI * 2
    const speed = 160 + random() * 420
    return {
      x,
      y,
      vx: Math.cos(direction) * speed,
      vy: Math.sin(direction) * speed - 120, // a little upward, like a firework
      size: 4 + random() * 5,
      color: COLORS[Math.floor(random() * COLORS.length)],
      angle: random() * Math.PI * 2,
      spin: (random() - 0.5) * 16,
      round: random() < 0.35,
      age: 0,
      life: 0.9 + random() * 0.8,
    }
  })
}

// The piece `seconds` later.
export function stepParticle(p: Particle, seconds: number): Particle {
  const slow = Math.exp(-DRAG * seconds)
  const vx = p.vx * slow
  const vy = p.vy * slow + GRAVITY * seconds
  return { ...p, x: p.x + vx * seconds, y: p.y + vy * seconds, vx, vy, angle: p.angle + p.spin * seconds, age: p.age + seconds }
}

export const isAlive = (p: Particle) => p.age < p.life

// How visible a piece is: fully for most of its life, then fading out.
export function opacityOf(p: Particle): number {
  const left = (p.life - p.age) / p.life
  return Math.max(0, Math.min(1, left / 0.4))
}

// Adds a burst to the pieces already flying, dropping the oldest if there would be too many.
export function addBurst(current: Particle[], burst: Particle[]): Particle[] {
  const all = current.concat(burst)
  return all.length > MAX_PARTICLES ? all.slice(all.length - MAX_PARTICLES) : all
}
