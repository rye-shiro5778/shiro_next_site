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
    /**
     * 粒の数
     */
    flakesNum?: number;
  };

export const Rain: React.VFC<Props> = ({
  cWidth,
  cHeight,
  flakesNum = 100,
  minSize = 0.5,
  maxSize = 0.5,
  maxSpeed = 6,
  minSpeed = 3,
  xMove = 0,
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
        depiction: (p5, x: number, y: number) => {
          let txt = "あめ";
          let txt0 = ""; //空の文字列
          for (let i = 0; i < txt.length; i++) {
            txt0 += txt.slice(i, i + 1) + "\n";
          }
          txt = txt0.slice(0, txt0.length - 1);
          p5.text(txt, x, y);
          p5.fill(p5.color("#d1e8f8"));
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
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.resizeCanvas(width, height);
    // p5.background(p5.color("#1e293b"));
    // flakes = [];
    // for (let i = 0; i < flakesNum; i++) {
    //   const flake = makeFlake({
    //     p5,
    //     width,
    //     height,
    //     minSize,
    //     maxSize,
    //     maxSpeed,
    //     minSpeed,
    //     xMove,
    //     depiction: (p5, x: number, y: number) => {
    //       let txt = "あめ";
    //       let txt0 = "";
    //       for (let i = 0; i < txt.length; i++) {
    //         txt0 += txt.slice(i, i + 1) + "\n";
    //       }
    //       txt = txt0.slice(0, txt0.length - 1);
    //       p5.text(txt, x, y);
    //       p5.fill(p5.color("#d1e8f8"));
    //     },
    //   });
    //   flakes.push(flake);
    // }
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
