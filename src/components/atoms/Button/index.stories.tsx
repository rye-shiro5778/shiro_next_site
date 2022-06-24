import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { FaGithub } from "react-icons/fa";
import { Button } from "./index";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Button",
  icon: <FaGithub />,
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  btnType: "primary",
};

export const Dashed = Template.bind({});
Dashed.args = {
  children: "Button",
  btnType: "dashed",
};

export const Link = Template.bind({});
Link.args = {
  children: "Button",
  btnType: "link",
  href: "https://github.com",
  target: "_blank",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  children: <FaGithub />,
  btnType: "text",
};
