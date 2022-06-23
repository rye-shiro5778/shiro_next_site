import Circle from "@/creative/p5/RandomCircle1";
import Timer1 from "@/creative/p5/Timer1";
import { GallraryList } from "@/utils/types/gallary";

export const gallraryList: GallraryList = {
  randomcircle1: {
    id: "randomcircle1",
    title: "Random Circle",
    sketch: <Circle cWidth={"windowWidth"} cHeight={"windowHeight"} />,
    card: <Circle cWidth={300} cHeight={250} />,
    description: "",
    postedDate: "2022-0521",
    updatedDate: "2022-0521",
    ogp: undefined,
    tags: ["p5js"],
  },
  timercircle1: {
    id: "timercircle1",
    title: "Timer Circle",
    description: "",
    sketch: <Timer1 cWidth={"windowWidth"} cHeight={"windowHeight"} />,
    card: <Timer1 cWidth={300} cHeight={250} />,
    postedDate: "2022-0522",
    updatedDate: "2022-0522",
    ogp: undefined,
    tags: ["p5js"],
  },
};
