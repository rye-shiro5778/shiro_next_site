import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Title } from "./Title";

export default {
  title: "Atoms/Text/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Title",
};

export const H1 = Template.bind({});
H1.args = {
  children: "Title",
  level: 1,
};

export const H2 = Template.bind({});
H2.args = {
  children: "Title",
  level: 2,
};

export const H3 = Template.bind({});
H3.args = {
  children: "Title",
  level: 3,
};
export const H4 = Template.bind({});
H4.args = {
  children: "Title",
  level: 3,
};
