import { p5CanvasSize } from "@/utils/p5CanvasSize";
import { CanvasSize } from "@/utils/types/canvasSize";
import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

type Props = CanvasSize & {
  num?: number;
  drawSpeed?: number;
  maxFrameCount?: number;
};

export const RandomBrush: React.VFC<Props> = ({
  cWidth,
  cHeight,
  num = 100,
  drawSpeed = 40,
  maxFrameCount = 320,
}) => {
  let points: { width: number; height: number; color: p5Types.Color }[] = [];
  const preload = (p5: p5Types) => {};

  const makePoint = ({
    p5,
    width,
    height,
  }: {
    p5: p5Types;
    width: number;
    height: number;
  }) => {
    const pointX = p5.random(width);
    const pointY = p5.random(height);
    const pointColor = p5.color(p5.random(256), p5.random(256), p5.random(256));
    p5.stroke(pointColor);
    p5.point(pointX, pointY);
    points.push({ width: pointX, height: pointY, color: pointColor });
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(p5.color("#1e293b"));
    for (let i = 0; i < num; i++) {
      makePoint({ p5, width, height });
    }
  };

  const reset = (p5: p5Types) => {
    p5.clear();
    points = [];
    for (let i = 0; i < num; i++) {
      const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
      makePoint({ p5, width, height });
    }
    p5.frameCount = 0;
    p5.background(p5.color("#1e293b"));
  };

  const draw = (p5: p5Types) => {
    if (p5.frameCount > maxFrameCount) {
      reset(p5);
    }
    for (let i = 0; i < drawSpeed; i++) {
      for (const point of points) {
        const { width, height, color } = point;
        point.width += p5.random([-1, 1]);
        point.height += p5.random([-1, 1]);
        p5.stroke(color);
        p5.point(width, height);
      }
    }
  };

  const windowResized = (p5: p5Types) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.resizeCanvas(width, height);
    reset(p5);
  };

  // const mouseClicked = (_p5: p5Types)  => {
  //   let link = document.createElement("a");
  //   let canvas = document.getElementById("defaultCanvas0") as HTMLCanvasElement;
  //   let ts = Date.now()
  //   if(canvas) {
  //     link.href = canvas.toDataURL("image/png");
  //     link.download = `楕円アート${ts.toString()}.png`;
  //     link.click();
  //   }
  // }

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
