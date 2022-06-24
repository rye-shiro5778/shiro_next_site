import p5Types from "p5";
import { FlakeCondition } from "./type";

type Props = FlakeCondition;

export const makeFlake = (
  p5: p5Types,
  { width, height, minSize, maxSize }: Props
) => {
  let x = p5.random(width);
  let y = p5.random(height);
  let r = p5.random(minSize, maxSize);
  let speedY = p5.random(-6, -3);

  function move() {
    const plusOrMinus = p5.random(0, 1) < 0.5 ? -1 : 1;
    // x += p5.noise(5) * plusOrMinus;
    y -= speedY;

    if (y > height) {
      x = p5.random(width);
      y = 0;
      r = p5.random(minSize, maxSize);
    }
  }

  function show() {
    p5.stroke(255, 255, 255);
    // p5.ellipse(x, y, r, r * 40);
    let txt = "あめ";
    let txt0 = ""; //空の文字列
    for (let i = 0; i < txt.length; i++) {
      txt0 += txt.slice(i, i + 1) + "\n";
    }
    txt = txt0.slice(0, txt0.length - 1);
    p5.text(txt, x, y);
    p5.fill(p5.color("#d1e8f8"));
  }

  return {
    move,
    show,
  };
};
// class Bubble {
//   constructor() {
//     this.x = random(width); // x座標の位置はランダムにする
//     this.y = height; // バブルの初期位置はキャンバスの一番下とする
//     this.r = random(MIN_SIZE, MAX_SIZE); // バブルの半径
//     this.speedY = random(-2, -1); // 上昇する速度
//     this.lightX = random([-1, 1]); // バブルに描画する光のx座標の位置
//     this.lightY = random([-1, 1]); // バブルに描画する光のy座標の位置
//   }

//   move() {
//     this.x += random(-1, 1);
//     this.y -= this.speedY;

//     if (this.isOffScreen()) {
//       this.x = random(width);
//       this.y = 0;
//       this.r = random(MIN_SIZE, MAX_SIZE);
//     }
//   }

//   show() {
//     stroke(255, 255, 255);
//     ellipse(this.x, this.y, this.r * 2);
//     fill(255)
//   drawingContext.shadowBlur = 20;
//   drawingContext.shadowColor = color(255, 255, 255);
//   }

//   isOffScreen() {
//     return this.y > 480;
//   }
// }
