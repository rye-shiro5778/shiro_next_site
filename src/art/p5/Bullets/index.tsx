import { p5CanvasSize } from "@/utils/p5CanvasSize";
import { CanvasSize } from "@/utils/types/canvasSize";
import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});
type Props = CanvasSize;

export const Wave: React.VFC<Props> = ({ cWidth, cHeight }) => {
  let bullets: {
    x: number;
    y: number;
    angle: number;
    speed: number;
  }[] = [];
  const Bullet = {
    create: function (
      p5: p5Types,
      x: number,
      y: number,
      angle: number,
      speed: number
    ) {
      return { x, y, angle, speed };
    },

    update: function (p5: p5Types, bullet: any) {
      bullet.x += p5.cos(bullet.angle) * bullet.speed;
      bullet.y += p5.sin(bullet.angle) * bullet.speed;
    },

    draw: function (p5: p5Types, bullet: any) {
      p5.circle(bullet.x, bullet.y, 10);
    },
  };
  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(p5.color("#1e293b"));
  };

  let a = 0;
  const draw = (p5: p5Types) => {
    p5.clear();
    p5.fill("red");
    p5.circle(p5.mouseX, p5.mouseY, 20);
    p5.fill("white");
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    if (p5.frameCount % 10 === 0) {
      const r = 15;
      const x = p5.cos(a) * r;
      const y = p5.sin(a) * r;

      const angle = p5.atan2(p5.mouseY, p5.mouseX - width / 2);
      const bullet = Bullet.create(p5, width / 2, 0, angle, 15);
      bullets.push(bullet);
      a += 0.01;
    }
    if (p5.frameCount % 20 === 0) {
      const r = 15;
      const x = p5.cos(a) * r;
      const y = p5.sin(a) * r;

      const angle = p5.atan2(p5.mouseY, p5.mouseX - width / 2);
      const bullet = Bullet.create(p5, width / 2, 0, -angle, 15);
      bullets.push(bullet);
      a += 0.01;
    }
    for (let i = 0; i < bullets.length; i++) {
      const bullet = bullets[i];
      Bullet.update(p5, bullet);
      Bullet.draw(p5, bullet);
    }

    bullets = bullets.filter((bullet) => {
      return (
        bullet.x >= 0 && bullet.x < width && bullet.y >= 0 && bullet.y < height
      );
    });
  };

  const windowResized = (p5: p5Types) => {
    const { width, height } = p5CanvasSize({ p5, cWidth, cHeight });
    p5.resizeCanvas(width, height);
    p5.background(p5.color("#1e293b"));
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
