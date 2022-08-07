import { Rain } from "@/art/p5/FlaksFall/Rain";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from ".";

export default {
  title: "Molecules/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div className="w-72">
    <Card {...args} />
  </div>
);

const sampleTags = [
  { slug: "sample1", name: "sample1" },
  { slug: "sample2", name: "sample2" },
];
export const Default = Template.bind({});
Default.args = {
  title: "Sample",
  img: <Rain cWidth={400} cHeight={250} />,
};

export const SubTitle = Template.bind({});
SubTitle.args = {
  title: "サンプルタイトル",
  subTitle: ` Posted: XX-XX-XX`,
  img: <img alt={""} src="/flower.png" width={400} height={250} />,
};

export const TagBlock = Template.bind({});
TagBlock.args = {
  title: "サンプルタイトル",
  subTitle: `Posted: XX-XX-XX`,
  img: <img alt={""} src="/flower.png" width={400} height={250} />,
  tags: sampleTags,
  tagPosition: "block",
};
export const TagBlock2 = Template.bind({});
TagBlock2.args = {
  title: "サンプルタイトル",
  img: <img alt={""} src="/flower.png" width={400} height={250} />,
  tags: sampleTags,
  tagPosition: "block",
};

export const TagFlex = Template.bind({});
TagFlex.args = {
  title: "サンプルタイトル",
  subTitle: `Posted: XX-XX-XX`,
  img: <img alt={""} src="/flower.png" width={400} height={250} />,
  tags: sampleTags,
  tagPosition: "flex",
};
export const TagFlex2 = Template.bind({});
TagFlex2.args = {
  title: "サンプルタイトル",
  img: <Rain cWidth={400} cHeight={250} />,
  tags: sampleTags,
  tagPosition: "flex",
};
