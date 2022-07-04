import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pagenation } from ".";

export default {
  title: "Molecules/Pagenation",
  component: Pagenation,
} as ComponentMeta<typeof Pagenation>;

const Template: ComponentStory<typeof Pagenation> = (args) => (
  <Pagenation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  perPage: 8,
  totalCount: 35,
  pageRoot: "/",
};

export const Default2 = Template.bind({});
Default2.args = {
  perPage: 8,
  totalCount: 4,
  pageRoot: "/",
};
