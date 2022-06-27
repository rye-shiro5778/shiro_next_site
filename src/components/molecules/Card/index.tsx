import { Tag } from "@/components/atoms/Tag";
import Link from "next/link";
import { useMemo } from "react";

type Props = {
  tags?: string[];
  img: JSX.Element;
  title: JSX.Element | string;
  subTitle?: JSX.Element | string;
  href?: string;
  target?: "_blank" | "_top" | "_self" | "_parent";
} & JSX.IntrinsicElements["div"];

export const Card: React.VFC<Props> = ({
  tags,
  img,
  subTitle,
  title,
  href,
  target = "_blank",
  ...props
}) => {
  const tagContent = useMemo(() => {
    if (!tags) return;
    return (
      <div className="px-2 pt-1 pb-1">
        {tags.map((tag) => (
          <Tag key={tag} size={"sm"}>
            {tag}
          </Tag>
        ))}
      </div>
    );
  }, [tags]);

  const cardContent = useMemo(() => {
    return (
      <>
        <div className="w-full">{img}</div>
        <div className="mx-6 my-2">
          <div className="font-bold text-4xl">
            <p className={"text-gray-700 text-xl"}>{title}</p>
          </div>
          <div className="flex justify-between content-center">
            {subTitle && <p className={"text-gray-400 py-1"}>{subTitle}</p>}
            {tagContent}
          </div>
        </div>
      </>
    );
  }, [img, title, subTitle, tagContent]);

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-[0.5px] border-opacity-50 border-black"
      {...props}
    >
      {href ? (
        <>
          <Link
            href={href || ""}
            className={"text-gray-400 hover:text-gray-800"}
            passHref
          >
            <div className="hover:cursor-pointer">{cardContent}</div>
          </Link>
        </>
      ) : (
        <>{cardContent}</>
      )}
    </div>
  );
};
