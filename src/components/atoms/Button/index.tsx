import { memo, useMemo } from "react";
import { Link } from "../Link";
import { Loading } from "../Others/Loading";
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
    isLoading,
    ...btnProps
  }) => {
    let additionalClassName =
      className + " rounded-lg transition-colors duration-200 transform  ";

    switch (btnType) {
      case "primary":
        additionalClassName +=
          "bg-primary text-white px-2 hover:text-gray-600 hover:bg-indigo-400 disabled:hover:bg-primary disabled:hover:text-white";
        break;
      case "dashed":
        additionalClassName +=
          "text-white border-dashed border-2 px-2 border-white hover:border-gray-400 hover:text-gray-400 disabled:hover:text-white disabled:hover:border-white";
        break;
      case "default":
        additionalClassName +=
          "bg-white text-black px-2 hover:text-gray-500 disabled:hover:text-gray-700";
        break;
      case "link":
        additionalClassName += isOnlyText
          ? "text-white hover:text-gray-500 disabled:hover:text-white"
          : "px-2 bg-white text-black";

      case "text":
        additionalClassName +=
          "text-white hover:text-gray-500 disabled:hover:text-white";
        break;
    }

    const Button = useMemo(
      () => (
        <button {...btnProps}>
          <div className="relative">
            {isLoading && (
              <span className="absolute left-0 top-0 right-0 bottom-0 p-3 z-40 cursor-not-allowed">
                <Loading />
              </span>
            )}
            <div
              className={`flex items-center py-2 cursor-pointer ${additionalClassName} `}
              style={btnProps.disabled ? { opacity: 0.5 } : {}}
            >
              {icon && (
                <span className={`w-7 h-7 p-1 text-${size} ml-1`}>{icon}</span>
              )}
              <span className={`mx-1 text-${size}`}>{children}</span>
            </div>
          </div>
        </button>
      ),
      [additionalClassName, btnProps, children, icon, size, isLoading]
    );

    return btnType === "link" ? (
      <Link href={href || ""} target={target || "_self"}>
        {Button}
      </Link>
    ) : (
      <> {Button}</>
    );
  }
);

Button.displayName = "Button";
