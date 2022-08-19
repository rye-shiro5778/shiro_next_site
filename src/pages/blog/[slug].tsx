import { Article } from "@/components/organisms/Article";
import { Head } from "@/components/organisms/Head";
import BlogLayout from "@/components/templates/Layouts/BlogLayout";
import { client } from "@/utils/cmsClient";
import { parseByCheerio } from "@/utils/parseByCheerio";
import { Blog as BlogType, MicroCMSDate } from "@/utils/types/blogs";
import "highlight.js/styles/agate.css";
import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";
type Props = { blog: BlogType & MicroCMSDate };

const Page: NextPageWithLayout<Props> = ({ blog }) => {
  const { title, description, slug, eyecatch } = blog;
  return (
    <>
      <Head
        title={title}
        description={description}
        path={`/blog/${slug}`}
        imgUrl={eyecatch?.url}
        imgHeight={eyecatch?.height}
        imgWidth={eyecatch?.width}
      />
      <Article blog={blog} />
    </>
  );
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

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
  previewData,
}) => {
  const slug = params?.slug;
  const { draftKey } = previewData as { draftKey?: string; slug?: string };

  if (!slug) {
    throw new Error("idがない");
  }

  const blog = (
    await client.blogs.$get({
      query: { filters: `slug[equals]${slug}`, draftKey },
    })
  ).contents[0];

  blog.content = await parseByCheerio(blog.content);

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
