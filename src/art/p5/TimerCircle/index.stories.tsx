import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { TimerCircle1 } from ".";

export default {
  title: "p5/TimerTimerCircle1",
  component: TimerCircle1,
} as ComponentMeta<typeof TimerCircle1>;

const Template: ComponentStory<typeof TimerCircle1> = (args) => (
  <TimerCircle1 {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cHeight: 300,
  cWidth: 400,
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
