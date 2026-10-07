import { describe, it, expect } from 'vitest'
import { makeWhiteTransparent } from './sprite'

describe('makeWhiteTransparent', () => {
  it('turns white and near-white pixels transparent and keeps the rest', () => {
    // RGBA: white, the sheet's grey, a near-white, an already transparent pixel
    const data = new Uint8ClampedArray([255, 255, 255, 255, 83, 83, 83, 255, 247, 247, 247, 255, 0, 0, 0, 0])
    makeWhiteTransparent(data)
    expect(Array.from(data)).toEqual([255, 255, 255, 0, 83, 83, 83, 255, 247, 247, 247, 0, 0, 0, 0, 0])
  })

  it('keeps light greys that are drawn on purpose (the clouds)', () => {
    const data = new Uint8ClampedArray([214, 214, 214, 255])
    makeWhiteTransparent(data)
    expect(data[3]).toBe(255)
  })
})
