import { Blog, MicroCMSContentId, MicroCMSDate } from "@/cms/utils/type";
import { Title } from "@/components/atoms/Typography/Title";
import { Pagenation } from "@/components/molecules/Pagenation";
import { BlogCardList } from "@/components/organisms/Blog/BlogCardList";
import React, { memo } from "react";

type Props = {
  blogs: (Blog & MicroCMSContentId & MicroCMSDate)[];
  totalCount: number;
  offset: number;
  limit: number;
};
export const BlogListPage: React.VFC<Props> = memo(
  ({ blogs, totalCount }: Props) => {
    return (
      <div className="container mx-auto">
        <div className="flex ml-8 mr-3 items-center">
          <Title level={3} className="">
            Tech Blog
          </Title>
        </div>
        <div className="container mt-4 px-4 mx-auto grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3">
          <BlogCardList blogs={blogs} />
        </div>
        <div className="mt-4">
          <Pagenation
            totalCount={totalCount}
            pageRoot={"/blog/page/"}
            perPage={9}
          />
        </div>
      </div>
    );
  }
);

BlogListPage.displayName = "BlogListPage";
