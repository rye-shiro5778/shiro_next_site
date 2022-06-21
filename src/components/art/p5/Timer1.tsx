import { randomUUID } from "crypto";
import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

const Timer1: React.VFC = () => {
  const arms = 2; // arm number
  const nodes = 16; // node number on arm
  const armLen = 0.2; // arm length
  const speed = 0.02;
  let stopNum = 1;
  let timer: NodeJS.Timeout;

  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(30);
    p5.noFill();
    p5.stroke(244);
    p5.strokeWeight(2);

    stopNum = 1;
  };

  const draw = (p5: p5Types) => {
    const time = p5.frameCount * speed;
    const w = p5.windowWidth;
    const h = p5.windowHeight;
    p5.background(10);
    p5.translate(w * 0.5, h * 0.5);
    for (let node = 0; node < nodes; node++) {
      let nRatio = p5.map(node, 0, nodes, 0.0, 1.0);
      let nSize = nRatio * w * 0.1;
      let radius = w * armLen * nRatio;
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
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.frameCount = 0;
    p5.loop();
  };

  //   const mouseClicked = (_p5: p5Types) => {
  //     reset(_p5);
  //   };
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

export default Timer1;
