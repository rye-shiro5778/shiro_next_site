type Size = { size?: "sm" | "m" | "l" | "xl" };

type Type =
  | ({
      type: "link";
      className?: string;
      onMouseEnter?: React.MouseEventHandler<Element> | undefined;
      onClick?: React.MouseEventHandler;
      href: string;
      ref?: any;
    } & JSX.IntrinsicElements["a"])
  | ({
      type: "text";
      className?: string;
    } & JSX.IntrinsicElements["span"]);

export type Props = Type &
  Size & {
    children: JSX.Element | string;
  };
