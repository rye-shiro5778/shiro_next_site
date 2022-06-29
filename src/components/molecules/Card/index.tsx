import { Loading } from "@/components/atoms/Others/Loading";
import { Tag } from "@/components/atoms/Tag";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Link from "next/link";
import { useMemo } from "react";

type Props = {
  tags?: string[];
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
    return (
      <div className="pr-2 pt-1 pb-1">
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
        <div className="w-full">
          <ErrorBoundary
            fallback={
              <div className="w-full h-[250px] bg-slate-800">
                <Loading />
              </div>
            }
          >
            {img}
          </ErrorBoundary>
        </div>
        <div className="ml-4 mr-2 my-2">
          <p className={"font-bold text-gray-700 text-base"}>{title}</p>
          <div className="flex justify-between content-center">
            {subTitle && (
              <p className={"text-gray-400 py-1 pl-2"}>{subTitle}</p>
            )}
            {tagPosition === "flex" && tagContent}
          </div>
          {tagPosition === "block" && <div className="">{tagContent}</div>}
        </div>
      </>
    );
  }, [img, title, subTitle, tagPosition, tagContent]);

  return (
    <div
      className="max-w-sm rounded overflow-hidden bg-white border-[0.5px] border-opacity-50 border-black hover:shadow-lg hover:shadow-black"
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
