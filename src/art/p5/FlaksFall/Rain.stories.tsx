import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Rain } from "./Rain";

export default {
  title: "p5/Rain",
  component: Rain,
} as ComponentMeta<typeof Rain>;

const Template: ComponentStory<typeof Rain> = (args) => <Rain {...args} />;

export const Default = Template.bind({});
Default.args = {
  cHeight: 400,
  cWidth: 500,
  flakesNum: undefined,
  minSize: undefined,
  maxSize: undefined,
  maxSpeed: undefined,
  minSpeed: undefined,
  xMove: undefined,
};

export const Full = Template.bind({});
Full.args = {
  cHeight: "windowHeight",
  cWidth: "windowWidth",
  flakesNum: undefined,
  minSize: undefined,
  maxSize: undefined,
  maxSpeed: undefined,
  minSpeed: undefined,
  xMove: undefined,
};
