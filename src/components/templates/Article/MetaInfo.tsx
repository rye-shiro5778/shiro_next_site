import { Category, Tag } from "@/cms/utils/type";
import { Text } from "@/components/atoms/Typography/Text";
import { Title } from "@/components/atoms/Typography/Title";
import { TagGroup } from "@/components/molecules/TagGroup";
import React, { memo } from "react";
import { BiCategoryAlt, BiTime } from "react-icons/bi";
type Props = {
  title: string;
  category?: Category;
  tags?: Tag[];
  publishedDate: string;
};
export const MetaInfo: React.VFC<Props> = memo(
  ({ title, category, tags, publishedDate }: Props) => {
    return (
      <>
        <Title level={2} className="font-bold">
          {title}
        </Title>
        <div className="mt-2 md:mt-4 mb-6 mx-4 flex flex-wrap items-center justify-between">
          <div className="flex mb-2">
            {category && (
              <div className="flex items-center mr-8">
                <BiCategoryAlt className="text-white text-base mr-1" />
                <Text
                  type="link"
                  href={`/blog/category/${category.name}`}
                  className="px-2 py-1 hover:text-gray-400 font-bold"
                  size="base"
                >
                  {category.name}
                </Text>
              </div>
            )}
            {tags && (
              <TagGroup
                isFlex={true}
                withIcon={true}
                isLink={true}
                tags={tags}
              />
            )}
          </div>
          <div className="mr-2 pb-2 flex items-center">
            <BiTime className="text-white text-base mr-1" />
            <Text>{` : ${publishedDate}`}</Text>
          </div>
        </div>
      </>
    );
  }
);

MetaInfo.displayName = "MetaInfo";
