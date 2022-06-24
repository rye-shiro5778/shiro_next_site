import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Circle from ".";

export default {
  title: "p5/Circle",
  component: Circle,
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (args) => <Circle {...args} />;

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
