import { client } from "@/cms/cmsClient";
import { Blog, MicroCMSDate } from "@/cms/type";
import { Title } from "@/components/atoms/Typography/Title";
import Layout from "@/components/templates/Layouts";
import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";

type Props = { blog: Blog & MicroCMSDate };

const Page: NextPageWithLayout<Props> = ({ blog }) => {
  //   const { sketch, title, description, postedDate, updatedDate, tags } =
  //     gallraryList[id];
  const {
    title,
    description,
    publishedAt,
    updatedAt,
    tags,
    content,
    category,
  } = blog;

  return (
    <>
      <div className={`h-[100vh] w-[100%] relative`}>
        <Title level={2}>{title}</Title>
        {content}
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.blogs.$get();
  const paths = blogs.contents.map(({ id }) => {
    return {
      params: { id },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string;
  const blog = await client.blogs._id(id).$get();
  return {
    props: {
      blog,
    },
  };
};

Page.getLayout = (page) => {
  console.log(page.props);
  return (
    <Layout isHeaderOverlay={false} isFooterOverlay={false}>
      {page}
    </Layout>
  );
};
export default Page;
