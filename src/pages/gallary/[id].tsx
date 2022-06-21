import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  NextPageWithLayout,
} from "next";
import { Text } from "components/atoms/Text";
import Layout from "components/templates/Layouts/overlay";
import { gallraryList } from "utils/constants/gallary";

type Props = { id: string };

const Page: NextPageWithLayout<Props> = ({ id }) => {
  const { Sketch, title } = gallraryList[id];
  return (
    <>
      <div className={`h-[100vh] w-[100%] relative`}>
        <div>{Sketch}</div>
        <div className={`absolute  bottom-8  w-[100%] z-[100] mt-2 `}>
          <div className="container mx-auto">
            <Text type="text">{title}</Text>
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

Page.getLayout = (page) => <Layout>{page}</Layout>;
export default Page;
