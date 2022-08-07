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
  const tags = await client.tags.$get();

  const pathsArry = await Promise.all(
    tags.contents.map(async (tag) => {
      const blogs = await client.blogs.$get({
        query: {
          filters: `tags[contains]${tag.id}`,
        },
      });
      const range: number[] = makeRange(
        1,
        Math.ceil(blogs.totalCount / PER_PAGE)
      );

      const params = range.map((id) => {
        return {
          params: { tag: tag.slug, id: id.toString() },
        };
      });

      return params;
    })
  );

  const paths = pathsArry.flat();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id;
  const slug = params?.tag;

  if (!id || !slug) {
    throw new Error("idかslugが見つからない");
  }

  const { contents: tags } = await client.tags.$get();
  const tag = tags.filter((tag) => tag.slug === slug)[0];
  const blogs = await client.blogs.$get({
    query: {
      limit: PER_PAGE,
      offset: (Number(id) - 1) * PER_PAGE,
      filters: `tags[contains]${tag.id}`,
    },
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
