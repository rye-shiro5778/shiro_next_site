import { p5CanvasSize } from "@/utils/p5CanvasSize";
import { CanvasSize } from "@/utils/types/canvasSize";
import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});
type Props = {
  waveNum?: 1 | 2;
} & CanvasSize;

export const Wave: React.VFC<Props> = ({ cWidth, cHeight, waveNum = 2 }) => {
  const colorPallet = ["#7FCBEE", "#6667FF"];
  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(p5.color("#1e293b"));
    p5.frameRate(20);
  };

  var yoff = 0;
  const draw = (p5: p5Types) => {
    p5.clear();
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.background(p5.color("#1e293b"));
    p5.noStroke();
    for (let i = 0; i < 2; i++) {
      p5.beginShape();
      p5.fill(p5.color(colorPallet[1]));
      let xoff = 0;
      for (let x = 0; x <= width + 200; x += 80) {
        let y = p5.map(
          p5.noise(xoff, yoff),
          0,
          1,
          height * 0.1 * (i + 1),
          height * 0.9
        );
        let distX = p5.mouseX - x;
        let gaussianX = p5.map(distX, -width, width, -5, 5);
        let gaussianY = p5.map(
          Gaussian(p5, gaussianX),
          0,
          0.4,
          p5.mouseY / 5,
          0
        );
        p5.curveVertex(x, y + gaussianY);
        xoff += 0.05;
      }
      p5.curveVertex(width, height);
      p5.curveVertex(0, height);
      p5.endShape(p5.CLOSE);
    }
    yoff += 0.1;
  };

  const windowResized = (p5: p5Types) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.resizeCanvas(width, height);
    p5.background(p5.color("#1e293b"));
  };

  function Gaussian(p5: p5Types, x: number) {
    return (1 / p5.pow(2 * p5.PI, 1 / 2)) * Math.exp(-p5.pow(x, 2) / 2);
  }

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
