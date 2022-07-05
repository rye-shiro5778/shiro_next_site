import { memo } from "react";
import { Link } from "../Link";
import { Props } from "./type";

export const Button: React.VFC<Props> = memo(
  ({
    children,
    icon,
    className,
    btnType = "default",
    size = "base",
    href,
    target,
    isOnlyText = true,
    ...btnProps
  }) => {
    let additionalClassName =
      className +
      " rounded-lg transition-colors duration-200 transform hover:text-gray-200 ";

    switch (btnType) {
      case "primary":
        additionalClassName +=
          "bg-indigo-600 text-white  px-2 hover:text-gray-600 hover:bg-indigo-200";
        break;
      case "dashed":
        additionalClassName +=
          "text-white border-dashed border-2 px-2 border-white hover:border-gray-600 hover:text-gray-600";
        break;
      case "default":
        additionalClassName += "bg-white text-black px-2";
        break;
      case "link":
        additionalClassName += isOnlyText
          ? "text-white hover:text-gray-500"
          : "px-2 bg-white text-black";

      case "text":
        additionalClassName += "text-white hover:text-gray-500";
        break;
    }

    const Button: React.VFC = () => (
      <button
        className={`flex items-center py-2 ${additionalClassName}`}
        {...btnProps}
      >
        {icon && (
          <span className={`w-7 h-7 p-1 text-${size} ml-1`}>{icon}</span>
        )}
        <span className={`mx-1 text-${size}`}>{children}</span>
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
