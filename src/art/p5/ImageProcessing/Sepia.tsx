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
    img = p5.loadImage("/profile.png");
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.createCanvas(width, height).parent(canvasParentRef);
    const dest = p5.createImage(img.width, img.height);
    dest.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
    dest.loadPixels();

    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < dest.width; x++) {
        const [r, g, b, a] = getPixel(img, x, y);

        const nr = p5.min(255, r * 0.393 + g * 0.769 + b * 0.189);
        const ng = p5.min(255, r * 0.349 + g * 0.686 + b * 0.168);
        const nb = p5.min(255, r * 0.272 + g * 0.534 + b * 0.131);

        setPixel(dest, x, y, [nr, ng, nb, a]);
      }
    }
    dest.updatePixels();
    p5.image(dest, 0, 0, width, height);
  };

  const draw = (p5: p5Types) => {
    let n = 1 * (p5.frameCount / 200);

    if (p5.frameCount < 201) {
      p5.frameCount = 0;
    }

    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    img.loadPixels();

    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        const [r, g, b, a] = getPixel(img, x, y);

        const sr = p5.min(255, r * 0.393 + g * 0.769 + b * 0.189);
        const sg = p5.min(255, r * 0.349 + g * 0.686 + b * 0.168);
        const sb = p5.min(255, r * 0.272 + g * 0.534 + b * 0.131);

        const r2 = r - (r - sr) * n;
        const g2 = r - (g - sg) * n;
        const b2 = r - (b - sb) * n;
        setPixel(img, x, y, [r2, g2, b2, a]);
      }
    }
    img.updatePixels();
    p5.image(img, 0, 0, width, height);
  };

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
      // draw={draw}
      // windowResized={windowResized}
      //  mouseClicked={mouseClicked}
    />
  );
};
