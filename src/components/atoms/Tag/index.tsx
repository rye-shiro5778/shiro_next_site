import { Size } from "@/components/commonType";
import { memo, useMemo } from "react";
import { Link } from "../Link";

type TagProp = {
  children: string;
};

type Props = {
  children: string;
  href?: string;
  target?: string;
} & {
  size?: Size;
} & JSX.IntrinsicElements["span"];

export const Tag: React.VFC<Props> = memo(
  ({ href, target = "_blank", children, key, size = "sm", className }) => {
    const TagElm = useMemo(
      () => (
        <span
          key={key}
          className={`text-${size} text-gray-700 inline-block bg-gray-200 rounded-full px-2 ml-2 font-semibold  ${className}`}
        >
          {children}
        </span>
      ),
      [children, key, className, size]
    );

    return !href ? (
      TagElm
    ) : (
      <Link href={href} target={target}>
        {TagElm}
      </Link>
    );
  }
);

Tag.displayName = "Tag";
