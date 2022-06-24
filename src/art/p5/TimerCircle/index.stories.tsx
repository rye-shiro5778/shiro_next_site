import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Circle from ".";

export default {
  title: "p5/TimerCircle",
  component: Circle,
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (args) => <Circle {...args} />;

export const Default = Template.bind({});
Default.args = {
  cHeight: 300,
  cWidth: 400,
  colorNum: undefined,
  arms: undefined,
  nodes: undefined,
  armLen: undefined,
  speed: undefined,
};

export const Arrange = Template.bind({});
Arrange.args = {
  cHeight: 300,
  cWidth: 400,
  colorNum: 200,
  arms: 4,
  nodes: 8,
  armLen: 0.5,
  speed: 0.1,
};

export const Full = Template.bind({});
Full.args = {
  cHeight: "windowHeight",
  cWidth: "windowWidth",
};
