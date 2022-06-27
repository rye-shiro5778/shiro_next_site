import { Link } from "../Link";
import { Props, TextType } from "./type";

export const Text: React.VFC<Props<TextType>> = (props) => {
  const { type, children, className, size = "base", ...prop } = props;
  const textSize = `text-${size}`;
  const applyClassName = `text-white ${textSize} ${className}`;
  if (!type || type === "text") {
    return <span className={applyClassName}>{children}</span>;
  }

  switch (type) {
    case "code":
      return (
        <code className={applyClassName} {...prop}>
          {children}
        </code>
      );
    case "link":
      const { type, className, size = "base", href, ...aProp } = props;
      return (
        <Link className={applyClassName} href={href} {...aProp}>
          {children}
        </Link>
      );
  }

  return <></>;
};
