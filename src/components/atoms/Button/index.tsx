import { memo } from "react";

type ButtonProps = JSX.IntrinsicElements["button"];
type Props = ButtonProps & {
  children?: JSX.Element | string;
  icon?: JSX.Element;
};

export const Button: React.VFC<Props> = memo(
  ({ children, icon, className, ...btnProps }) => {
    return (
      <button
        className={`flex items-center px-2 py-2 bg-indigo-600 text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 ${className}`}
        {...btnProps}
      >
        {icon && <span className="w-5 h-5 mx-1">{icon}</span>}
        <span className="mx-1 text-base">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
