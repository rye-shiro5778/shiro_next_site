import { p5CanvasSize } from "@/utils/p5CanvasSize";
import { CanvasSize } from "@/utils/types/canvasSize";
import dynamic from "next/dynamic";
import p5Types from "p5";
import { getPixel, setPixel } from "./utils";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

type Props = CanvasSize;

export const Sepia: React.VFC<Props> = ({ cWidth, cHeight }) => {
  let img: p5Types.Image;

  const preload = (p5: p5Types) => {
    img = p5.loadImage("./flower.png");
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.createCanvas(width, height).parent(canvasParentRef);
    if (!img) return;

    img?.loadPixels();
    p5.image(img, 0, 0, width, height);

    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        const [r, g, b, a] = getPixel(img, x, y);

        const nr = p5.min(255, r * 0.393 + g * 0.769 + b * 0.189);
        const ng = p5.min(255, r * 0.349 + g * 0.686 + b * 0.168);
        const nb = p5.min(255, r * 0.272 + g * 0.534 + b * 0.131);

        setPixel(img, x, y, [nr, ng, nb, a]);
      }
    }
    img.updatePixels();
    p5.image(img, 0, 0, width, height);
  };

  //   const draw = (p5: p5Types) => {
  //     // const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
  //     // p5.frameRate(15);
  //     // p5.colorMode(p5.HSB);
  //     // p5.stroke(
  //     //   p5.color(p5.random(20, 60), p5.random(50, 60), p5.random(50, 60))
  //     // );
  //     // p5.ellipse(p5.random(width), height / 2, p5.random(320), p5.random(420));
  //     // if (p5.frameCount > 100) {
  //     //   p5.clear();
  //     //   p5.background(p5.color("#1e293b"));
  //     //   p5.frameCount = 0;
  //     //   p5.frameRate(25);
  //     // }
  //   };

  //   function setPixel(x:number, y:number, ) {
  //     const i = (y * img.width + x) * 4;
  //     img.pixels[i + 0] = pixel[0];
  //     img.pixels[i + 1] = pixel[1];
  //     img.pixels[i + 2] = pixel[2];
  //   }

  // const windowResized = (p5: p5Types) => {
  //   const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
  //   p5.background(p5.color("#1e293b"));
  //   p5.resizeCanvas(width, height);
  //   p5.frameCount = 0;
  //   p5.loop();
  // };

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
      //   draw={draw}
      // windowResized={windowResized}
      //  mouseClicked={mouseClicked}
    />
  );
};
