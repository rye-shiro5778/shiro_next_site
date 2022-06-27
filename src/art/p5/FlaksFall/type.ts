import p5Types from "p5";
export type FlakeCondition = {
  p5: p5Types;
  minSize: number;
  maxSize: number;
  width: number;
  height: number;
  isRaise?: boolean;
  xMove?: number;
  minSpeed?: number;
  maxSpeed?: number;
  depiction: (
    p5: p5Types,
    x: number,
    y: number,
    r?: number,
    speedY?: number
  ) => void;
};
