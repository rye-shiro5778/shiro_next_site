import { Button } from "@/components/atoms/Button";
import { Title } from "@/components/atoms/Typography/Title";
import { BlogCardList } from "@/components/organisms/Blog/CardList";
import GallraryCardList from "@/components/organisms/GallaryCardList";
import { Head } from "@/components/organisms/Head";
import Hero from "@/components/organisms/Hero";
import Layout from "@/components/templates/Layouts";
import { client } from "@/utils/cmsClient";
import { makeTagCategoryJson } from "@/utils/makeTagCategoryJson";
import { Blog, MicroCMSContentId, MicroCMSDate } from "@/utils/types/blogs";
import type { GetStaticProps, NextPageWithLayout } from "next";

type Props = {
  blogs: (Blog & MicroCMSContentId & MicroCMSDate)[];
};

const Home: NextPageWithLayout<Props> = ({ blogs }) => {
  const menu = [
    {
      title: "Gallary",
      children: (
        <div className="container px-4 mx-auto grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-4">
          <GallraryCardList limit={4} />
        </div>
      ),
      href: "/gallary",
    },
    {
      title: "Blog",
      children: (
        <div className="container px-4 mx-auto grid grid-cols-1 gap-8 mt-8 md:grid-cols-2  xl:grid-cols-4">
          <BlogCardList blogs={blogs} />
        </div>
      ),
      href: "/blog",
    },
  ];

  return (
    <>
      <Head />
      <main>
        <section className="mb-2">
          <Hero />
        </section>
        {menu.map(({ title, href, children }) => (
          <section key={`top-${title}`} className="container mx-auto mt-8">
            <Title level={3} className="text-center">
              {title}
            </Title>
            {children}

            <div className="flex justify-end ">
              <Button
                btnType="link"
                size="lg"
                href={href}
                className="mr-3 mt-2"
              >
                See More...
              </Button>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

Home.getLayout = (page) => <Layout isHeaderOverlay={true}>{page}</Layout>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = await client.blogs.$get({ query: { limit: 4 } });

  await makeTagCategoryJson();

  return {
    props: {
      blogs: blogs.contents,
    },
  };
};

export default Home;
