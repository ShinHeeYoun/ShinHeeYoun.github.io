// Chromium's sheet paints the running and standing dino on opaque white instead of leaving the cells
// transparent. Repainting such a sheet in one color would fill the gap in front of the arm and every other
// hole, so near-white pixels are made transparent first. The greys (dino, cacti, clouds) are darker than this.
const WHITE_THRESHOLD = 240

export function makeWhiteTransparent(rgba: Uint8ClampedArray) {
  for (let i = 0; i < rgba.length; i += 4) {
    if (rgba[i] > WHITE_THRESHOLD && rgba[i + 1] > WHITE_THRESHOLD && rgba[i + 2] > WHITE_THRESHOLD) {
      rgba[i + 3] = 0
    }
  }
}
