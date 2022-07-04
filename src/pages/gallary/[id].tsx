import { gallraryList } from "@/art/gallary";
import { Tag } from "@/components/atoms/Tag";
import { Text } from "@/components/atoms/Typography";
import { Head } from "@/components/templates/Head";
import Layout from "@/components/templates/Layouts";
import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";

type Props = { id: string };

const Page: NextPageWithLayout<Props> = ({ id }) => {
  const { sketch, title, description, postedDate, updatedDate, tags } =
    gallraryList[id];
  return (
    <>
      <Head title={title} description={description} />
      <div className={`h-[100vh] w-[100%] relative`}>
        <div>{sketch}</div>
        <div
          className={`absolute  bottom-8 px-4 w-[100%] z-[100] mt-2 opacity-60`}
        >
          <div className="container mx-auto">
            <div className="flex items-baseline">
              <Text type="text" className="text-4xl lg:text-5xl">
                {title}
              </Text>
              <div className="mx-4">
                {tags &&
                  tags?.map((tag) => {
                    return <Tag key={tag}>{tag}</Tag>;
                  })}
              </div>
            </div>
            <div className="container flex px-2 pb-4 text-lg">
              <Text
                type="text"
                className="mr-4"
              >{`posted: ${postedDate}`}</Text>
              <Text type="text">{`updated: ${updatedDate}`}</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.keys(gallraryList).map((id) => {
    return {
      params: { id: id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return {
    props: {
      id: String(params?.id),
    },
  };
};

Page.getLayout = (page) => (
  <Layout isHeaderOverlay={true} isFooterOverlay={true}>
    {page}
  </Layout>
);
export default Page;
