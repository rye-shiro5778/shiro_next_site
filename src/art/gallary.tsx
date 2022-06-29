import { Circle } from "@/art/p5/RandomCircle";
import { GallraryList } from "@/utils/types/gallary";
import { Rain } from "./p5/FlaksFall/Rain";
import { SnowFall } from "./p5/FlaksFall/SnowFall";
import { RandomBrush } from "./p5/RandomWalk/RandomBrush";
import { TimerCircle1 } from "./p5/TimerCircle";

export const gallraryList: GallraryList = {
  randomcircle1: {
    id: "randomcircle1",
    title: "Random Circle",
    sketch: <Circle cWidth={"windowWidth"} cHeight={"windowHeight"} />,
    card: <Circle cWidth={400} cHeight={250} />,
    description: "",
    postedDate: "2022-0521",
    updatedDate: "2022-0521",
    ogp: undefined,
    tags: ["p5js"],
  },
  timercircle1: {
    id: "timercircle1",
    title: "Timer Circle",
    description: "円と時間",
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
    description: "雨が降る",
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
    title: "Brsuh",
    description: "雨が降る",
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
