import { client } from "@/cms/utils/cmsClient";
import { Blog, MicroCMSContentId, MicroCMSDate } from "@/cms/utils/type";
import { BlogListPage } from "@/components/templates/BlogList";
import BlogLayout from "@/components/templates/Layouts/BlogLayout";
import { makeRange } from "@/utils/makeRange";
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
  const categories = await client.categories.$get();

  const pathsArry = await Promise.all(
    categories.contents.map(async (category) => {
      const blogs = await client.blogs.$get({
        query: {
          filters: `category[equals]${category.id}`,
        },
      });
      const range: number[] = makeRange(
        1,
        Math.ceil(blogs.totalCount / PER_PAGE)
      );

      const params = range.map((id) => {
        return {
          params: { category: category.slug, id: id.toString() },
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
  const slug = params?.category;

  if (!id || !slug) {
    throw new Error("idかslugが見つからない");
  }

  const { contents: categories } = await client.categories.$get();
  const category = categories.filter((category) => category.slug === slug)[0];
  const blogs = await client.blogs.$get({
    query: {
      limit: PER_PAGE,
      offset: (Number(id) - 1) * PER_PAGE,
      filters: `category[equals]${category.id}`,
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
