import Link from "next/link";
import { Props, TextType } from "./type";

export const Text: React.VFC<Props<TextType>> = (props) => {
  const { type, children, className, size = "base" } = props;
  if (!type) {
    return <span className={"text-white " + className}>{children}</span>;
  }

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
    const { className, size, type, ...pProps } = props;
    return (
      <p {...pProps} className={"text-white " + className}>
        {children}
      </p>
    );
  } else {
    return <></>;
  }
};
