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
  disabled: false,
  isLoading: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Button",
  icon: <FaGithub />,
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  btnType: "primary",
  disabled: false,
};

export const Dashed = Template.bind({});
Dashed.args = {
  children: "Button",
  btnType: "dashed",
  disabled: false,
};

export const Link = Template.bind({});
Link.args = {
  children: "Button",
  btnType: "link",
  href: "https://github.com",
  target: "_blank",
  disabled: false,
};

export const Link2 = Template.bind({});
Link2.args = {
  children: "Button",
  btnType: "link",
  href: "https://github.com",
  target: "_blank",
  isOnlyText: false,
  disabled: false,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  children: <FaGithub />,
  btnType: "text",
  disabled: false,
};
