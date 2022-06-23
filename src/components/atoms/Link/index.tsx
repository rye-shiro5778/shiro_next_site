import NextLink from "next/link";
import { Props } from "./type";

export const Link: React.VFC<Props> = (props) => {
  const {
    children,
    className,
    href,
    size = "base",
    type,
    ...linkProps
  } = props;
  const isHttp = /http?s:\/\//.test(href);
  const defaultClassName = `
    text-${size} text-white transition-colors duration-200 transform hover:text-gray-200
    `;
  const style = `${defaultClassName} ${className}`;
  return isHttp ? (
    <a href={href} className={style} {...linkProps}>
      {children}
    </a>
  ) : (
    <NextLink href={href} {...linkProps}>
      <a className={style}>{children}</a>
    </NextLink>
  );
};
