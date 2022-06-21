import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

const Circle: React.VFC = () => {
  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

    // p5.text("Dive", p5.windowWidth / 2, p5.windowHeight / 2);
    p5.textAlign("center");
    p5.background(p5.color(30, 41, 59));
    p5.noFill();
  };

  const draw = (p5: p5Types) => {
    p5.frameRate(15);
    p5.colorMode(p5.HSB);
    p5.stroke(
      p5.color(p5.random(20, 60), p5.random(50, 60), p5.random(50, 60))
    );
    p5.ellipse(
      p5.random(p5.windowWidth),
      p5.windowHeight / 2,
      p5.random(320),
      p5.random(420)
    );
    if (p5.frameCount > 140) {
      p5.clear();
      p5.frameCount = 0;
      p5.frameRate(25);
    }
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.frameCount = 0;
    p5.loop();
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

export default Circle;
