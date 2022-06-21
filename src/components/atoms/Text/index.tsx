import Link from "next/link";
import { Props } from "./type";

export const Text: React.VFC<Props> = (props) => {
  const { type, children, className, size = "m" } = props;
  if (type === "link") {
    const { className, href, size, type, ...linkProps } = props;
    const isHttp = /http?s:\/\//.test(href);
    const defaultClassName = `
    text-white transition-colors duration-200 transform hover:text-gray-200
    `;
    const style = `${defaultClassName} ${className}`;
    return isHttp ? (
      <a href={href} className={style} {...linkProps}>
        {children}
      </a>
    ) : (
      <Link href={href} {...linkProps}>
        <a className={style}>{children}</a>
      </Link>
    );
  } else if (type === "text") {
    return <span className={"text-white " + className}>{children}</span>;
  } else {
    return <></>;
  }
};
