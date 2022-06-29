import { client } from "@/cms/cmsClient";
import {
  Blog,
  Category,
  MicroCMSContentId,
  MicroCMSDate,
  Tag,
} from "@/cms/type";
import { Title } from "@/components/atoms/Typography/Title";
import { Card } from "@/components/molecules/Card";
import Layout from "@/components/templates/Layouts";
import dayjs from "dayjs";
import type { GetStaticProps, NextPageWithLayout } from "next";
import Image from "next/image";

type Props = {
  blogs: (Blog & MicroCMSContentId & MicroCMSDate)[];
  tags: (Tag & MicroCMSContentId & MicroCMSDate)[];
  categories: (Category & MicroCMSContentId & MicroCMSDate)[];
};

const Blog: NextPageWithLayout<Props> = ({ blogs, tags, categories }) => {
  console.log({ blogs, tags, categories });

  return (
    <div className="container mx-auto">
      <div className="flex ml-8 mt-4 mr-3 items-center">
        <Title level={3} className="">
          Tech Blog
        </Title>
      </div>
      <div className="container mt-8 px-4 mx-auto grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map(
          ({ title, description, publishedAt, eyecatch, tags, id }) => {
            const img = eyecatch?.url ? (
              <Image alt={title} src={eyecatch.url} width={400} height={250} />
            ) : (
              <></>
            );

            const publishedDate = dayjs(publishedAt).format("YYYY-MM-DD");

            return (
              <Card
                key={title}
                title={title}
                subTitle={publishedDate}
                tagPosition={"block"}
                img={img}
                tags={tags?.map((tag) => tag.name)}
                href={`/blog/${id}`}
              />
            );
          }
        )}
        {blogs.map(
          ({ title, description, publishedAt, eyecatch, tags, id }) => {
            const img = eyecatch?.url ? (
              <Image alt={title} src={eyecatch.url} width={400} height={250} />
            ) : (
              <></>
            );

            const publishedDate = dayjs(publishedAt).format("YYYY-MM-DD");

            return (
              <Card
                key={title}
                title={title}
                subTitle={publishedDate}
                tagPosition={"block"}
                img={img}
                tags={tags?.map((tag) => tag.name)}
                href={`/blog/${id}`}
              />
            );
          }
        )}
        {blogs.map(
          ({ title, description, publishedAt, eyecatch, tags, id }) => {
            const img = eyecatch?.url ? (
              <Image alt={title} src={eyecatch.url} width={400} height={250} />
            ) : (
              <></>
            );

            const publishedDate = dayjs(publishedAt).format("YYYY-MM-DD");

            return (
              <Card
                key={title}
                title={title}
                subTitle={publishedDate}
                tagPosition={"block"}
                img={img}
                tags={tags?.map((tag) => tag.name)}
                href={`/blog/${id}`}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

Blog.getLayout = (page) => <Layout>{page}</Layout>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [blogs, tags, categories] = await Promise.all([
    client.blogs.$get({ query: { limit: 8 } }),
    client.tags.$get(),
    client.categories.$get(),
  ]);

  console.log(blogs.contents);
  return {
    props: {
      blogs: blogs.contents,
      tags: tags.contents,
      categories: categories.contents,
    },
  };
};
export default Blog;
