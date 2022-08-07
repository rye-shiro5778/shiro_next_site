import Link from "next/link";
import { useMemo } from "react";
import { TagGroup } from "../TagGroup";

type Props = {
  tags?: { slug: string; name: string }[];
  tagPosition?: "flex" | "block";
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
  tagPosition = "block",
  target = "_blank",
  ...props
}) => {
  const tagContent = useMemo(() => {
    if (!tags) return;
    return <TagGroup tags={tags} />;
  }, [tags]);

  const cardContent = useMemo(() => {
    return (
      <>
        <div className="w-full">
          {img ?? <div className="bg-gray-900 h-[250px]" />}
        </div>
        <div className="ml-4 mr-2 my-2">
          <p className={"font-bold text-gray-700 text-base"}>{title}</p>
          <div className="flex justify-between content-center">
            {subTitle && (
              <p className={"text-gray-500 py-1 pl-1"}>{subTitle}</p>
            )}
            {tagPosition === "flex" && tagContent}
          </div>
          {tagPosition === "block" && tagContent}
        </div>
      </>
    );
  }, [img, title, subTitle, tagPosition, tagContent]);

  return (
    <div
      className="max-w-sm rounded overflow-hidden bg-white border-[0.5px] border-opacity-50  ransition duration-300 border-black hover:shadow-lg hover:shadow-black hover:opacity-95 hover:-translate-y-1"
      {...props}
    >
      {href ? (
        <div className=" ">
          <Link
            href={href || ""}
            className={"text-gray-400 hover:text-gray-800"}
            passHref
          >
            <div className="hover:cursor-pointer ">{cardContent}</div>
          </Link>
        </div>
      ) : (
        <>{cardContent}</>
      )}
    </div>
  );
};
