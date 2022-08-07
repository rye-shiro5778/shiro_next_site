import { p5CanvasSize } from "@/utils/p5CanvasSize";
import { CanvasSize } from "@/utils/types/canvasSize";
import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

type Props = {
  maxBallCount?: number;
  defaultBallCount?: number;
  maxSpeedLevel?: 1 | 2 | 3 | 4;
} & CanvasSize;

type Ball = {
  color: p5Types.Color;
  position: [number, number];
  speed: [number, number];
  size?: number;
};

export const Bound: React.VFC<Props> = ({
  cWidth,
  cHeight,
  maxBallCount = 10,
  defaultBallCount = 7,
  maxSpeedLevel = 4,
}) => {
  const preload = (p5: p5Types) => {};

  let balls: Ball[] = [];

  const createBall = (p5: p5Types, width: number, height: number): Ball => {
    const plusOrMinus = () => (p5.random(0, 1) < 0.5 ? -1 : 1);
    const randomColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    return {
      color: p5.color(randomColor),
      position: [p5.random(1, width), p5.random(1, height)],
      speed: [
        10 * p5.random(1, maxSpeedLevel) * plusOrMinus(),
        10 * p5.random(1, maxSpeedLevel) * plusOrMinus(),
      ],
    };
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(p5.color("#1e293b"));

    for (let cnt = 0; cnt < defaultBallCount; cnt++) {
      balls.push(createBall(p5, width, height));
    }
  };

  const draw = (p5: p5Types) => {
    p5.clear();
    p5.frameRate(50);
    p5.background(p5.color("#1e293b"));
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    balls.forEach(({ position, speed, color, size = 30 }, index) => {
      position[0] += speed[0];
      position[1] += speed[1];
      if (position[0] > width + 20 || position[0] < -20) {
        speed[0] *= -1;
      }
      if (position[1] > height + 20 || position[1] < -20) {
        speed[1] *= -1;
      }
      for (let i = 0; i < balls.length; i++) {
        const x = position[0];
        const comapareX = balls[i].position[0];
        const xDiff = x - comapareX >= 0 ? x - comapareX : comapareX - x;
        const y = position[1];
        const comapareY = balls[i].position[1];
        const yDiff = x - comapareY >= 0 ? y - comapareY : comapareY - y;
        if (xDiff < 31 && xDiff >= 0 && yDiff < 31 && yDiff >= 0) {
          speed[0] *= -1;
          balls[i].speed[0] *= -1;
        }
      }
      p5.fill(color);
      p5.circle(position[0], position[1], size);
    });
  };

  const windowResized = (p5: p5Types) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.colorMode(p5.RGB);
    p5.background(p5.color("#1e293b"));
    p5.resizeCanvas(width, height);
  };

  const mouseClicked = (p5: p5Types) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    if (maxBallCount > balls.length) {
      balls.push(createBall(p5, width, height));
    }
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
