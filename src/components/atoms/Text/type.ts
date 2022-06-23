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
    } & JSX.IntrinsicElements["p"])
  | ({
      type?: undefined;
      className?: string;
    } & JSX.IntrinsicElements["span"]);

export type Props = Type &
  Size & {
    children: JSX.Element | string;
  };
