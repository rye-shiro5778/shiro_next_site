import Circle from "components/art/p5/Circle";
import Timer1 from "components/art/p5/Timer1";
import { GallraryList } from "utils/types/gallary";

export const gallraryList: GallraryList = {
  randomcircle1: {
    id: "randomcircle1",
    title: "Random Circle",
    Sketch: <Circle />,
    description: "",
    postedDate: "2022-0522",
    updatedDate: "2022-0522",
  },
  timercircle1: {
    id: "timercircle1",
    title: "Timer Circle",
    description: "",
    Sketch: <Timer1 />,
    postedDate: "2022-0522",
    updatedDate: "2022-0522",
  },
};
