import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThreeSample } from "./ThreeSample";

export default {
  title: "three/Sample",
  component: ThreeSample,
} as ComponentMeta<typeof ThreeSample>;

const Template: ComponentStory<typeof ThreeSample> = (args) => (
  <ThreeSample {...args} />
);

export const Default = Template.bind({});
Default.args = {};
