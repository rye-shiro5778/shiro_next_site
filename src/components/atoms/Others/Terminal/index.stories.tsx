import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Terminal } from "./index";

export default {
  title: "Atoms/Others/Terminal",
  component: Terminal,
} as ComponentMeta<typeof Terminal>;

const Template: ComponentStory<typeof Terminal> = (args) => (
  <Terminal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  path: "~/",
  content: "404 Not found!!",
};
