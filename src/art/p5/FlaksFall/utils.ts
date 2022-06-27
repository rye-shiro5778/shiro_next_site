import { FlakeCondition } from "./type";

type Props = FlakeCondition;

export const makeFlake = ({
  p5,
  width,
  height,
  minSize,
  maxSize,
  maxSpeed = 1,
  minSpeed = 1,
  isRaise = false,
  xMove = 0,
  depiction,
}: Props) => {
  let x = p5.random(width);
  let y = p5.random(height);
  let r = p5.random(minSize, maxSize);
  let speedY = p5.random(maxSpeed, minSpeed);

  function move() {
    const xPlusOrMinus = p5.random(0, 1) < 0.5 ? -1 : 1;
    const yPlusOrMinus = isRaise ? -1 : 1;
    x += p5.random(0, xMove) * xPlusOrMinus;
    y += speedY * yPlusOrMinus;

    isRaise && y < 0 && Reset();
    !isRaise && y > height && Reset();
  }

  function Reset() {
    x = p5.random(width);
    y = 0;
    r = p5.random(minSize, maxSize);
  }

  function show() {
    depiction(p5, x, y, r, speedY);
  }

  return {
    move,
    show,
  };
};
