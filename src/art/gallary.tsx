import RandomCircle from "@/art/p5/RandomCircle";
import Timer1 from "@/art/p5/Timer1";
import { GallraryList } from "@/utils/types/gallary";
import FlakesFall from "./p5/FlaksFall";

export const gallraryList: GallraryList = {
  randomcircle1: {
    id: "randomcircle1",
    title: "Random Circle",
    sketch: <RandomCircle cWidth={"windowWidth"} cHeight={"windowHeight"} />,
    card: <RandomCircle cWidth={400} cHeight={250} />,
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
    sketch: <Timer1 cWidth={"windowWidth"} cHeight={"windowHeight"} />,
    card: <Timer1 cWidth={400} cHeight={250} />,
    postedDate: "2022-0522",
    updatedDate: "2022-0522",
    ogp: undefined,
    tags: ["p5js"],
  },
  snowflakes1: {
    id: "snowflakes1",
    title: "SnowFall",
    description: "雨が降る",
    sketch: <FlakesFall cWidth={"windowWidth"} cHeight={"windowHeight"} />,
    card: <FlakesFall cWidth={400} cHeight={250} />,
    postedDate: "2022-0622",
    updatedDate: "2022-0622",
    ogp: undefined,
    tags: ["p5js", "TypeScript"],
  },
};
