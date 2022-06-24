import { gallraryList } from "@/art/gallary";
import { Text } from "@/components/atoms/Text";
import Layout from "@/components/templates/Layouts";
import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";

type Props = { id: string };

const Page: NextPageWithLayout<Props> = ({ id }) => {
  const { sketch, title, description, postedDate, updatedDate } =
    gallraryList[id];
  return (
    <>
      <div className={`h-[100vh] w-[100%] relative`}>
        <div>{sketch}</div>
        <div className={`absolute  bottom-8 px-4 w-[100%] z-[100] mt-2 `}>
          <div className="container mx-auto">
            <Text type="text" className="text-3xl lg:text-4xl">
              {title}
            </Text>
            <div className="container flex px-2 pb-4 ">
              <Text
                type="text"
                className="mr-2"
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

Page.getLayout = (page) => <Layout isStack={true}>{page}</Layout>;
export default Page;
