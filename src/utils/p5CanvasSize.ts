import p5Types from "p5";
import { CanvasSize } from "./types/canvasSize";
export function p5CanvasSize({
  p5,
  cWidth,
  cHeight,
}: CanvasSize & { p5: p5Types }) {
  const width = cWidth === "windowWidth" ? p5.windowWidth : cWidth;
  const height = cHeight === "windowHeight" ? p5.windowHeight : cHeight;
  return { width, height };
}
