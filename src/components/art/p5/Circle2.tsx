import { randomUUID } from "crypto";
import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

export const Circle2: React.VFC = () => {
  const preload = (p5: p5Types) => {};

  let d: number;
  let circleColor: number;
  let bgColor: number;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    d = 0;
    p5.frameRate(1000);
    circleColor = p5.random(255);
    bgColor = 0;
  };

  const draw = (p5: p5Types) => {
    d += 5;
    p5.clear();
    p5.background(bgColor);
    p5.fill(circleColor);
    p5.circle(p5.windowWidth / 2, p5.windowHeight / 2, d);

    if (d > p5.dist(0, 0, p5.windowWidth, p5.windowHeight)) {
      reset(p5);
    }
  };

  const reset = (p5: p5Types) => {
    d = 0;
    bgColor = circleColor;
    circleColor = p5.random(255);
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(255);
    p5.frameCount = 0;
    p5.loop();
  };

  const mouseClicked = (_p5: p5Types) => {
    reset(_p5);
  };
  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      mouseClicked={mouseClicked}
    />
  );
};
