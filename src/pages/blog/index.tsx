import { client } from "@/cms/utils/cmsClient";
import { Blog, MicroCMSContentId, MicroCMSDate } from "@/cms/utils/type";
import { BlogListPage } from "@/components/templates/BlogList";
import BlogLayout from "@/components/templates/Layouts/BlogLayout";
import type { GetStaticProps, NextPageWithLayout } from "next";

type Props = {
  blogs: (Blog & MicroCMSContentId & MicroCMSDate)[];
  totalCount: number;
  offset: number;
  limit: number;
};

const Page: NextPageWithLayout<Props> = (props) => {
  return <BlogListPage {...props} />;
};

Page.getLayout = (page) => <BlogLayout>{page}</BlogLayout>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = await client.blogs.$get({ query: { limit: 8 } });
  return {
    props: {
      blogs: blogs.contents,
      totalCount: blogs.totalCount,
      offset: blogs.offset,
      limit: blogs.limit,
    },
  };
};
export default Page;
