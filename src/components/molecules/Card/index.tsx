import { Text } from "@/components/atoms/Text";
import Link from "next/link";
import { useMemo } from "react";

type Props = {
  tags?: string[];
  img: JSX.Element;
  title: JSX.Element;
  subTitle?: JSX.Element;
  href?: string;
} & JSX.IntrinsicElements["div"];

export const Card: React.VFC<Props> = ({
  tags,
  img,
  subTitle,
  title,
  href,
  ...props
}) => {
  const tagContent = useMemo(() => {
    if (!tags) return;
    return (
      <div className="px-6 pt-1 pb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  }, [tags]);

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
      {...props}
    >
      <Link type="link" href={href || "/"} className={"text-gray-400 hover:"}>
        <>
          <div className="w-full">{img}</div>
          <div className="mx-6 my-2">
            <div className="font-bold text-xl mb-2">
              <Text type="text" className={"text-gray-400"}>
                {title}
              </Text>
            </div>
            {subTitle && (
              <Text type={"text"} className={"text-gray-400"}>
                {subTitle}
              </Text>
            )}
          </div>
        </>
      </Link>
      {tags && (
        <div className="px-6 pt-1 pb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
