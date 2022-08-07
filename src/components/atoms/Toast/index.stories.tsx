import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Toast } from "./index";

export default {
  title: "Atoms/Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  title: "Success",
  content: "hogehogehogehoge",
  type: "success",
  isShow: true,
};
export const Error = Template.bind({});
Error.args = {
  title: "Error",
  content: "hogehogehogehoge",
  type: "error",
  isShow: true,
};
