import { Article } from "@/components/organisms/Article";
import BlogLayout from "@/components/templates/Layouts/BlogLayout";
import { client } from "@/utils/cmsClient";
import { parseByCheerio } from "@/utils/parseByCheerio";
import { Blog as BlogType, MicroCMSDate } from "@/utils/types/blogs";
import "highlight.js/styles/agate.css";
import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";
type Props = { blog: BlogType & MicroCMSDate };

const Page: NextPageWithLayout<Props> = ({ blog }) => {
  return <Article blog={blog} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.blogs.$get();
  const paths = blogs.contents.map(({ slug }) => {
    return {
      params: { slug },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error("idがない");
  }
  const blog = (
    await client.blogs.$get({ query: { filters: `slug[equals]${slug}` } })
  ).contents[0];

  blog.content = parseByCheerio(blog.content);
  return {
    props: {
      blog,
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
