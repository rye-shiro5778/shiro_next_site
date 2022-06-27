import { Size } from "@/components/commonType";

export type Props<T> = T & {
  size?: Size;
  strong?: boolean;
  children: JSX.Element | string;
};

export type TextType =
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
      type: "code";
      className?: string;
    } & JSX.IntrinsicElements["code"])
  | ({
      type?: undefined;
      className?: string;
    } & JSX.IntrinsicElements["span"]);

export type TitleType = {
  level?: 1 | 2 | 3 | 4;
} & JSX.IntrinsicElements["h1"] &
  JSX.IntrinsicElements["h2"] &
  JSX.IntrinsicElements["h3"] &
  JSX.IntrinsicElements["h4"];
