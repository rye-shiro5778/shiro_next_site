import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Link } from "./index";

export default {
  title: "Atoms/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <div className="text-white">
    <Link {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "github",
  href: "https://github.com",
  target: "_blank",
};

export const NextLink = Template.bind({});
NextLink.args = {
  children: "Home",
  href: "/",
};
