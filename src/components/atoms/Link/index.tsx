import NextLink from "next/link";
import { memo } from "react";
import { Props } from "./type";

export const Link: React.VFC<Props> = memo((props) => {
  const { children, href, type, ...linkProps } = props;
  const isHttp = /http?s:\/\//.test(href);
  return isHttp ? (
    <a href={href} {...linkProps}>
      {children}
    </a>
  ) : (
    <NextLink href={href} {...linkProps} passHref={true}>
      <a>{children}</a>
    </NextLink>
  );
});

Link.displayName = "Link";
