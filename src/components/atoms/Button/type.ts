type ButtonProps = JSX.IntrinsicElements["button"];
type AProps = JSX.IntrinsicElements["a"];

export type Types = "primary" | "dashed" | "link" | "default" | "text";

export type Props = {
  children?: JSX.Element | string;
  icon?: JSX.Element;
  btnType?: Types;
} & ButtonProps &
  AProps;
