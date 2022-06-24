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

const FlakesFall: React.VFC<Props> = ({
  cWidth,
  cHeight,
  flakesNum = 100,
  minSize = 0.5,
  maxSize = 0.5,
}) => {
  let flakes: any[] = [];

  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.background(p5.color("#1e293b"));
    p5.createCanvas(width, height).parent(canvasParentRef);
    for (let i = 0; i < flakesNum; i++) {
      const flake = makeFlake(p5, {
        width,
        height,
        minSize,
        maxSize,
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
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.resizeCanvas(width, height);
    p5.background(p5.color("#1e293b"));
    flakes = [];
    for (let i = 0; i < flakesNum; i++) {
      const flake = makeFlake(p5, {
        width,
        height,
        minSize,
        maxSize,
      });
      flakes.push(flake);
    }
    p5.loop();
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

export default FlakesFall;
