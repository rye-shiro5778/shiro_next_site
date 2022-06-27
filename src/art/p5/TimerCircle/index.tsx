import { p5CanvasSize } from "@/utils/p5CanvasSize";
import { CanvasSize } from "@/utils/types/canvasSize";
import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

type Props = CanvasSize & {
  arms?: number;
  nodes?: number;
  armLen?: number;
  speed?: number;
  colorNum?: number;
};

export const TimerCircle1: React.VFC<Props> = ({
  cWidth,
  cHeight,
  arms = 2,
  nodes = 16,
  armLen = 0.2,
  speed = 0.02,
  colorNum = 244,
}) => {
  let stopNum = 1;
  let timer: NodeJS.Timeout;

  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.frameRate(30);
    p5.noFill();
    p5.stroke(colorNum);
    p5.strokeWeight(2);
    p5.background(p5.color("#1e293b"));

    stopNum = 1;
  };

  const draw = (p5: p5Types) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    const time = p5.frameCount * speed;
    p5.background(p5.color("#1e293b"));
    p5.translate(width * 0.5, height * 0.5);
    for (let node = 0; node < nodes; node++) {
      let nRatio = p5.map(node, 0, nodes, 0.0, 1.0);
      let nSize = nRatio * width * 0.1;
      let radius = width * armLen * nRatio;
      for (let arm = 0; arm < arms; arm++) {
        let theta = ((p5.TWO_PI * (arm + nRatio)) / arms) * time;
        let x = radius * p5.cos(theta);
        let y = radius * p5.sin(theta);
        p5.circle(x, y, nSize);
      }
    }

    if (time >= stopNum) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        stopNum++;
        p5.loop();
      }, 1000);
      p5.noLoop();
    }
  };

  const windowResized = (p5: p5Types) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.resizeCanvas(width, height);
    p5.background(p5.color("#1e293b"));
    p5.frameCount = 0;
    p5.loop();
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      //   mouseClicked={mouseClicked}
    />
  );
};
