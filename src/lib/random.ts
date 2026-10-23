// A function that gives a number from 0 up to, but not including, 1.
export type Rng = () => number

// The random numbers for a real game. They come from the browser's secure generator, so nobody can predict the
// next one from the earlier ones.
export function cryptoRng(): Rng {
  return () => {
    const buffer = new Uint32Array(1)
    crypto.getRandomValues(buffer)
    return buffer[0] / 4294967296
  }
}
