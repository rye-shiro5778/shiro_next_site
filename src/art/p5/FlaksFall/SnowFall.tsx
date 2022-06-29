import { p5CanvasSize } from "@/utils/p5CanvasSize";
import { CanvasSize } from "@/utils/types/canvasSize";
import dynamic from "next/dynamic";
import p5Types from "p5";
import { FlakeCondition } from "./type";
import { makeFlake } from "./utils";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

export type Props = CanvasSize &
  Partial<FlakeCondition> & {
    flakesNum?: number;
  };

export const SnowFall: React.VFC<Props> = ({
  cWidth,
  cHeight,
  flakesNum = 90,
  minSize = 1,
  maxSize = 3,
  maxSpeed = 1.5,
  minSpeed = 1,
  xMove = 1,
}) => {
  let flakes: any[] = [];

  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.background(p5.color("#1e293b"));
    p5.createCanvas(width, height).parent(canvasParentRef);
    for (let i = 0; i < flakesNum; i++) {
      const flake = makeFlake({
        p5,
        width,
        height,
        minSize,
        maxSize,
        maxSpeed,
        minSpeed,
        xMove,
        depiction: (p5, x, y, r) => {
          if (!r) return;
          p5.ellipse(x, y, r * 2, r * 2);
        },
      });
      flakes.push(flake);
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(p5.color("#1e293b"));
    for (let flake of flakes) {
      flake.move();
      flake.show();
    }
  };

  const windowResized = (p5: p5Types) => {
    p5.clear();
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.resizeCanvas(width, height);
    p5.background(p5.color("#1e293b"));
    flakes = [];
    for (let i = 0; i < flakesNum; i++) {
      const flake = makeFlake({
        p5,
        width,
        height,
        minSize,
        maxSize,
        maxSpeed,
        minSpeed,
        xMove,
        depiction: (p5, x, y, r) => {
          if (!r) return;
          p5.ellipse(x, y, r * 2, r * 2);
        },
      });
      flakes.push(flake);
    }
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      //  mouseClicked={mouseClicked}
    />
  );
};
