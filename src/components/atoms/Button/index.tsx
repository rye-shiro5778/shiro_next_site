import { memo } from "react";

type ButtonProps = JSX.IntrinsicElements["button"];
type Props = ButtonProps & {
  children: JSX.Element | string;
};

export const Button: React.VFC<Props> = memo(
  ({ children, className, ...btnProps }) => {
    return (
      <button
        className={`text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 ${className}`}
        {...btnProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
