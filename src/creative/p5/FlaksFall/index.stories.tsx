import type { ComponentMeta, ComponentStory } from "@storybook/react";
import FlalesFall from ".";

export default {
  title: "p5/FlalesFall",
  component: FlalesFall,
} as ComponentMeta<typeof FlalesFall>;

const Template: ComponentStory<typeof FlalesFall> = (args) => (
  <FlalesFall {...args} />
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
