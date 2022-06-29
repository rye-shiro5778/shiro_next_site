import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loading } from "./index";

export default {
  title: "Atoms/Others/Loding",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Default = Template.bind({});
