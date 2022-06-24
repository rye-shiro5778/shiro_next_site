import { memo } from "react";
import { Link } from "../Link";
import { Props } from "./type";

export const Button: React.VFC<Props> = memo(
  ({
    children,
    icon,
    className,
    btnType = "default",
    href,
    target,
    ...btnProps
  }) => {
    let additionalClassName =
      className +
      " rounded-lg transition-colors duration-200 transform hover:text-gray-200 ";

    switch (btnType) {
      case "primary":
        additionalClassName +=
          "bg-indigo-600 text-white hover:text-gray-600 hover:bg-indigo-200";
        break;
      case "dashed":
        additionalClassName +=
          "text-white border-dashed border-2 border-white hover:border-gray-600 hover:text-gray-600";
        break;
      case "default":
        additionalClassName += "bg-white text-black";
        break;
      case "link":
      case "text":
        additionalClassName += "text-white hover:text-gray-400";
        break;
    }

    const Button: React.VFC = () => (
      <button
        className={`flex items-center px-4 py-2 ${additionalClassName}`}
        {...btnProps}
      >
        {icon && <span className="w-7 h-7 p-1 text-base ml-1">{icon}</span>}
        <span className="mx-1 text-base">{children}</span>
      </button>
    );

    return btnType === "link" ? (
      <Link href={href || ""} target={target || "_self"}>
        <Button />
      </Link>
    ) : (
      <Button />
    );
  }
);

Button.displayName = "Button";
