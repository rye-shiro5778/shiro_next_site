type Type =
  | {
      onMouseEnter?: React.MouseEventHandler<Element> | undefined;
      onClick?: React.MouseEventHandler;
      href: string;
      ref?: any;
    } & JSX.IntrinsicElements["a"];

export type Props = Type & {
  children: JSX.Element | string;
};
