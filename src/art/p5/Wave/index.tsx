import { p5CanvasSize } from "@/utils/p5CanvasSize";
import { CanvasSize } from "@/utils/types/canvasSize";
import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});
type Props = {
  waveNum?: number;
} & CanvasSize;

export const Wave: React.VFC<Props> = ({ cWidth, cHeight, waveNum = 4 }) => {
  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(p5.color("#1e293b"));
    p5.frameRate(10);
  };
  var yoff = 0;

  const draw = (p5: p5Types) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.background(p5.color("#1e293b"));
    p5.noStroke();
    p5.beginShape();
    p5.fill(182, 208, 220, 70);
    //波を描画する
    var xoff = 0;
    for (var x = 0; x <= width + 300; x += 40) {
      var y = p5.map(p5.noise(xoff, yoff), 0, 1, height * 0.1, height * 0.5);
      // 曲線の頂点座標を指定する
      var distX = p5.mouseX - x;
      var gaussianX = p5.map(distX, -width, width, -5, 5);
      var gaussianY = p5.map(Gaussian(p5, gaussianX), 0, 0.4, p5.mouseY / 4, 0);
      p5.curveVertex(x, y + gaussianY);
      xoff += 0.05;
    }
    p5.curveVertex(width, height);
    p5.curveVertex(0, height);
    p5.endShape(p5.CLOSE);
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
