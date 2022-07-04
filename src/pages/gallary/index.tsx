import { gallraryList } from "@/art/gallary";
import { Title } from "@/components/atoms/Typography/Title";
import { Pagenation } from "@/components/molecules/Pagenation";
import { GallraryCardList } from "@/components/organisms/GallaryCardList";
import Layout from "@/components/templates/Layouts";
import type { NextPageWithLayout } from "next";
import { useRouter } from "next/router";

type Props = {};

const Page: NextPageWithLayout<Props> = ({}) => {
  const perPage: number = 8;
  const router = useRouter();
  if (!router.isReady) {
    return null;
  }
  const { page } = router.query;
  let offset = 0;
  if (page && typeof page === "string" && typeof Number(page) === "number") {
    offset = Number(page) === 1 ? 0 : (Number(page) - 1) * perPage;
  }

  return (
    <div className="container mx-auto">
      <div className="container mx-auto">
        <div className="ml-8 flex items-center  mt-4 mb-2 mr-3 ">
          <Title level={3}>Gallrary</Title>
        </div>
        <div className="container px-4 mx-auto grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <GallraryCardList limit={perPage} offset={offset} />
        </div>
        <div className="mt-4">
          <Pagenation
            perPage={perPage}
            totalCount={Object.keys(gallraryList).length}
            pageRoot={"/gallary?page="}
          />
        </div>
      </div>
    </div>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
