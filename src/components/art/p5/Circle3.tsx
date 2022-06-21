import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

export const Circle3: React.VFC = () => {
  const preload = (p: p5Types) => {};

  const setup = (p: p5Types, canvasParentRef: Element) => {
    const width = p.windowWidth;
    const height = p.windowHeight;
    p.createCanvas(width, height).parent(canvasParentRef);
    p.background(0);
    p.blendMode(p.DIFFERENCE);
    p.stroke(5, 3, 2);
    for (let n = 0; n < 8; n++) {
      for (let m = 0; m < 3; m++) {
        const noise = p.noise(m / 100, n);
        p.line(m, width * 2, m, 200 + n * 6 - 240 * noise);
        p.noStroke();
        p.fill("#f0f8ff");
        p.blendMode(p.SCREEN);
        for (let j = 0; j < width / 2; j++) {
          p.circle(p.random(width), p.random(width), p.random(height / 20));
        }
      }
    }
  };

  const draw = (p: p5Types) => {};

  return <Sketch preload={preload} setup={setup} draw={draw} />;
};
