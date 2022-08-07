import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Input } from ".";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState<string | number>("");
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Default = Template.bind({});
Default.args = {};
export const Label = Template.bind({});
Label.args = { label: "label", placeholder: "placeholder" };

export const IconLabel = Template.bind({});
IconLabel.args = {
  label: (
    <div className="flex align-middle items-center">
      <FaGithub />
      <span className="px-2">github</span>
    </div>
  ),
};
