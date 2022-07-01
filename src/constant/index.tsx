import { FaGithub } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";

export const routes: {
  label: string;
  href: string;
  disableNav?: boolean;
  disableFooter?: boolean;
}[] = [
  {
    label: "home",
    href: "/",
    disableNav: true,
  },
  {
    label: "gallary",
    href: "/gallary",
  },
  {
    label: "blog",
    href: "/blog",
  },
  {
    label: "about",
    href: "/about",
  },
];

export const links: {
  label: string;
  href: string;
  icon: JSX.Element | string;
}[] = [
  {
    label: "Github",
    href: "https://github.com/rye-shiro5778/",
    icon: <FaGithub />,
  },
  {
    label: "StoryBook",
    href: "https://rye-shiro5778.github.io/shiro_next_site_storybook/",
    icon: <SiStorybook />,
  },
];
