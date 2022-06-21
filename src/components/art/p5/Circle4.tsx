import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

export const Circle4: React.VFC = () => {
  const preload = (p: p5Types) => {};

  const width = 500;
  const height = 500;

  const setup = (p: p5Types, canvasParentRef: Element) => {
    p.createCanvas(width, height).parent(canvasParentRef);
    p.background(0);
    p.blendMode(p.ADD);
    p.stroke(5, 32, 95);
  };

  let x = 0.05;
  let y = 0.05;
  const draw = (p: p5Types) => {
    p.clear();
    for (let i = 0; i < 50000; i++) {
      const u = 0.8 + x * (0.9 - 0.8 * x - 0.4 * y) + y * (-0.8 + 0.8 * y);
      const v = 0.5 + x * (-0.2 - 0.4 * x + 0.7 * y) + y * (-1.2 + 0.8 * y);
      p.point(189 * (u + 0.8), 209 * (v + 0.7));
      x = u;
      y = v;
    }
  };

  return <Sketch preload={preload} setup={setup} draw={draw} />;
};
