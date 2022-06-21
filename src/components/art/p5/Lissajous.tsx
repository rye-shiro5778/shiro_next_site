import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

export const Lissajous: React.VFC = () => {
  let R = 150;
  let a = 3;
  let b = 4;
  let d = 1;
  let u = 0.003;

  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

    p5.background(0);
    p5.noFill();
    p5.colorMode(p5.HSB, 250);
    p5.textAlign(p5.CENTER, p5.CENTER);
    d = p5.PI / 6;
  };

  const draw = (p5: p5Types) => {
    p5.noStroke();
    p5.push();
    p5.translate(170, 200);
    const t = p5.frameCount * u;
    const s = (p5.frameCount - 1) * u;
    var preX =
      R * p5.sin(a * s + d) * p5.sin(a * s + d) * p5.cos(b * s + d) +
      p5.frameCount * 0.001;
    var preY = R * p5.sin(b * s) * p5.sin(a * s);
    var x =
      R * p5.sin(a * t + d) * p5.sin(a * t + d) * p5.cos(b * t + d) +
      p5.frameCount * 0.001;
    var y = R * p5.sin(b * t) * p5.sin(a * t);
    p5.stroke(p5.color((p5.frameCount / 10) % 250, 200, 250));
    p5.line(preX, preY, x, y);
    p5.pop();
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      //  windowResized={windowResized}
      //  mouseClicked={mouseClicked}
    />
  );
};
