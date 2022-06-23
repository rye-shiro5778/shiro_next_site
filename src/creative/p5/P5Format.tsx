import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

export const P5Format: React.VFC = () => {
  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.stroke(p5.random(255));
  };

  // const windowResized = (p5: p5Types) => {
  //   p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  //   p5.background(255)
  //   p5.frameCount = 0
  //   p5.loop()
  // }

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
      //  windowResized={windowResized}
      //  mouseClicked={mouseClicked}
    />
  );
};
