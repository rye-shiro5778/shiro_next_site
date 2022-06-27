import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { SnowFall } from "./SnowFall";

export default {
  title: "p5/SnowFall",
  component: SnowFall,
} as ComponentMeta<typeof SnowFall>;

const Template: ComponentStory<typeof SnowFall> = (args) => (
  <SnowFall {...args} />
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
};
