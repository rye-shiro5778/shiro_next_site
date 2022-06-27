import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { RandomBrush } from "./RandomBrush";

export default {
  title: "p5/RandomWalk/Brush",
  component: RandomBrush,
} as ComponentMeta<typeof RandomBrush>;

const Template: ComponentStory<typeof RandomBrush> = (args) => (
  <RandomBrush {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cHeight: 300,
  cWidth: 400,
};

export const Full = Template.bind({});
Full.args = {
  cHeight: "windowHeight",
  cWidth: "windowWidth",
  drawSpeed: 50,
  num: 200,
  maxFrameCount: 350,
};
