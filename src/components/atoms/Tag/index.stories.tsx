import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tag } from "./index";

export default {
  title: "Atoms/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Tag",
};

export const LinkTag = Template.bind({});
LinkTag.args = {
  children: "Link",
  href: "https://github.com",
};
