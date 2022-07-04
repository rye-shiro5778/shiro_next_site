import tags from "@/constant/tags.json";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { TagGroup } from "./index";

export default {
  title: "Molecules/TagGroup",
  component: TagGroup,
} as ComponentMeta<typeof TagGroup>;

const Template: ComponentStory<typeof TagGroup> = (args) => (
  <div className="text-white w-48">
    <TagGroup {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tags,
};

export const FlexTagGroup = Template.bind({});
FlexTagGroup.args = {
  tags: tags.slice(0, 3),
  isFlex: true,
  isLink: true,
};
export const FlexTagGroupWithIcon = Template.bind({});
FlexTagGroupWithIcon.args = {
  tags: tags.slice(0, 3),
  isFlex: true,
  isLink: true,
  withIcon: true,
};
