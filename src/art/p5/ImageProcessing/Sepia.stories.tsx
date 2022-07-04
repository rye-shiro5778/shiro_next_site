import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sepia } from "./Sepia";

export default {
  title: "p5/ImageProcess/Sepia",
  component: Sepia,
} as ComponentMeta<typeof Sepia>;

const Template: ComponentStory<typeof Sepia> = (args) => <Sepia {...args} />;

export const Default = Template.bind({});
Default.args = {
  cHeight: 300,
  cWidth: 400,
};

// export const Full = Template.bind({});
// Full.args = {
//   cHeight: "windowHeight",
//   cWidth: "windowWidth",
// };
