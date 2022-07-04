import p5Types from "p5";

// [R,G,B,A]
export type Pixel = [number, number, number, number];

export function getPixel(img: p5Types.Image, x: number, y: number): Pixel {
  const i = (y * img.width + x) * 4;
  return [
    img.pixels[i],
    img.pixels[i + 1],
    img.pixels[i + 2],
    img.pixels[i + 3],
  ];
}

export function setPixel(
  img: p5Types.Image,
  x: number,
  y: number,
  pixel: Pixel
): void {
  const i = (y * img.width + x) * 4;
  pixel.forEach((n) => (img.pixels[i + n] = pixel[n]));
}

export function getPixelRGBA(p5: p5Types, pixel: Pixel) {
  const r = p5.red(pixel);
  const g = p5.green(pixel);
  const b = p5.blue(pixel);
  const a = p5.alpha(pixel);
  return [r, g, b, a];
}

// export function makeSepiaRGBA() {
//   const nr = p5.min(255, r * 0.393 + g * 0.769 + b * 0.189);
//   const ng = p5.min(255, r * 0.349 + g * 0.686 + b * 0.168);
//   const nb = p5.min(255, r * 0.272 + g * 0.534 + b * 0.131);
// }
