import { GallraryList } from "@/utils/types/gallary";
import dynamic from "next/dynamic";

const Circle = dynamic(async () => {
  const { Circle } = await import("@/art/p5/RandomCircle");
  return Circle;
});

const TimerCircle1 = dynamic(async () => {
  const { TimerCircle1 } = await import("@/art/p5/TimerCircle");
  return TimerCircle1;
});

const RandomBrush = dynamic(async () => {
  const { RandomBrush } = await import("@/art/p5/RandomWalk/RandomBrush");
  return RandomBrush;
});

const SnowFall = dynamic(async () => {
  const { SnowFall } = await import("@/art/p5/FlaksFall/SnowFall");
  return SnowFall;
});

const Rain = dynamic(async () => {
  const { Rain } = await import("@/art/p5/FlaksFall/Rain");
  return Rain;
});

export const gallraryList: GallraryList = {
  randomcircle1: {
    id: "randomcircle1",
    title: "Random Circle",
    sketch: <Circle cWidth={"windowWidth"} cHeight={"windowHeight"} />,
    card: <Circle cWidth={400} cHeight={250} />,
    description: "p5jsでランダムに楕円を描写",
    postedDate: "2022-0521",
    updatedDate: "2022-0521",
    ogp: undefined,
    tags: ["p5js"],
  },
  timercircle1: {
    id: "timercircle1",
    title: "Timer Circle",
    description: "p5jsによる円と時間",
    sketch: <TimerCircle1 cWidth={"windowWidth"} cHeight={"windowHeight"} />,
    card: <TimerCircle1 cWidth={400} cHeight={250} />,
    postedDate: "2022-0522",
    updatedDate: "2022-0522",
    ogp: undefined,
    tags: ["p5js"],
  },
  snowflakes1: {
    id: "snowflakes1",
    title: "SnowFall",
    description: "雪が降る",
    sketch: <SnowFall cWidth={"windowWidth"} cHeight={"windowHeight"} />,
    card: <SnowFall cWidth={400} cHeight={250} />,
    postedDate: "2022-0622",
    updatedDate: "2022-0622",
    ogp: undefined,
    tags: ["p5js", "TypeScript"],
  },
  rain1: {
    id: "rain1",
    title: "Ame",
    description: "雨が降る",
    sketch: <Rain cWidth={"windowWidth"} cHeight={"windowHeight"} />,
    card: <Rain cWidth={400} cHeight={250} />,
    postedDate: "2022-0624",
    updatedDate: "2022-0624",
    ogp: undefined,
    tags: ["p5js", "TypeScript"],
  },
  randombrush1: {
    id: "randombrush1",
    title: "Brush",
    description: "p5jsで実装したランダムウォークによる描写",
    sketch: (
      <RandomBrush cWidth={"windowWidth"} cHeight={"windowHeight"} num={200} />
    ),
    card: (
      <RandomBrush
        cWidth={400}
        cHeight={250}
        drawSpeed={10}
        maxFrameCount={350}
      />
    ),
    postedDate: "2022-0625",
    updatedDate: "2022-0625",
    ogp: undefined,
    tags: ["p5js", "TypeScript"],
  },
};
