import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaFacebook } from "react-icons/fa";
import { Button } from "./index";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Button",
  icon: <FaFacebook />,
};
