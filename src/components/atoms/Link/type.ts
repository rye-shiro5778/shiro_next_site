type Size = {
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
};

type Type =
  | {
      className?: string;
      onMouseEnter?: React.MouseEventHandler<Element> | undefined;
      onClick?: React.MouseEventHandler;
      href: string;
      ref?: any;
    } & JSX.IntrinsicElements["a"];

export type Props = Type &
  Size & {
    children: JSX.Element | string;
  };
