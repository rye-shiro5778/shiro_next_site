import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Wave } from ".";

export default {
  title: "p5/TimerWave",
  component: Wave,
} as ComponentMeta<typeof Wave>;

const Template: ComponentStory<typeof Wave> = (args) => <Wave {...args} />;

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
