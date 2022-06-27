import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Induction } from "./index";

export default {
  title: "Atoms/Induction",
  component: Induction,
} as ComponentMeta<typeof Induction>;

const Template: ComponentStory<typeof Induction> = (args) => (
  <Induction {...args} />
);

export const Default = Template.bind({});
