import { BlogListPage } from "@/components/organisms/BlogList";
import BlogLayout from "@/components/templates/Layouts/BlogLayout";
import { client } from "@/utils/cmsClient";
import { makeRange } from "@/utils/makeRange";
import { Blog, MicroCMSContentId, MicroCMSDate } from "@/utils/types/blogs";
import "highlight.js/styles/agate.css";
import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";

type Props = {
  blogs: (Blog & MicroCMSContentId & MicroCMSDate)[];
  totalCount: number;
  offset: number;
  limit: number;
};

const PER_PAGE = 9;

const Page: NextPageWithLayout<Props> = (props) => {
  return <BlogListPage {...props} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.blogs.$get();

  const range: number[] = makeRange(1, Math.ceil(blogs.totalCount / PER_PAGE));

  const paths = range.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string;
  const blogs = await client.blogs.$get({
    query: { limit: PER_PAGE, offset: (Number(id) - 1) * PER_PAGE },
  });

  const { contents, totalCount, offset, limit } = blogs;

  return {
    props: {
      blogs: contents,
      totalCount,
      offset,
      limit,
    },
  };
};

Page.getLayout = (page) => {
  return (
    <BlogLayout isHeaderOverlay={false} isFooterOverlay={false}>
      {page}
    </BlogLayout>
  );
};
export default Page;
