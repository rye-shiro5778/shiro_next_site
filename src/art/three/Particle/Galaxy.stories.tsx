import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Galaxy } from "./Galaxy";

export default {
  title: "three/Galaxy",
  component: Galaxy,
} as ComponentMeta<typeof Galaxy>;

const Template: ComponentStory<typeof Galaxy> = (args) => <Galaxy {...args} />;

export const Default = Template.bind({});
Default.args = {};
