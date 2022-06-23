import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Circle from "./Circle";

export default {
  title: "Circle",
  component: Circle,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (args) => <Circle {...args} />;

export const Circle34 = Template.bind({});
Circle34.args = {
  cHeight: 300,
  cWidth: 400,
};
