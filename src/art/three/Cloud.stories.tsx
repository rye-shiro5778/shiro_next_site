import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Cloud } from "./Cloud";

export default {
  title: "three/Cloud",
  component: Cloud,
} as ComponentMeta<typeof Cloud>;

const Template: ComponentStory<typeof Cloud> = (args) => <Cloud {...args} />;

export const Default = Template.bind({});
Default.args = {};
