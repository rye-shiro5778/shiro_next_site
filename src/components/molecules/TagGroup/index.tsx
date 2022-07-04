import { Tag } from "@/components/atoms/Tag";
import { Size } from "@/components/commonType";
import React from "react";
import { BsTags } from "react-icons/bs";

type Props = {
  tags: { slug: string; name: string }[];
  withIcon?: boolean;
  isFlex?: boolean;
  size?: Size;
  isLink?: boolean;
};
export const TagGroup: React.VFC<Props> = ({
  tags,
  withIcon,
  isFlex,
  size = "sm",
  isLink,
}: Props) => {
  return (
    <div className={isFlex ? "flex items-center" : "pr-2 pt-1"}>
      {withIcon && <BsTags className="text-white text-base" />}
      {tags.map((tag) => {
        return (
          <Tag
            key={tag.slug}
            className={!isFlex ? "mb-2" : ""}
            size={size}
            href={isLink ? `/tag/${tag.slug}/page/1` : undefined}
          >
            {tag.name}
          </Tag>
        );
      })}
    </div>
  );
};
