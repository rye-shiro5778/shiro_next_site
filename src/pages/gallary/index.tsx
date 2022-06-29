import { gallraryList } from "@/art/gallary";
import { Text } from "@/components/atoms/Typography/Text";
import { Title } from "@/components/atoms/Typography/Title";
import { Pagination } from "@/components/molecules/Pagenation";
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
      <div className="flex ml-8 mt-4 mr-3 items-center">
        <Title level={3} className="">
          Gallrary
        </Title>
        <Text className="mx-8">~creative coding~</Text>
      </div>
      <GallraryCardList limit={perPage} offset={offset} />
      <Pagination
        perPage={perPage}
        totalCount={Object.keys(gallraryList).length}
        pageRoot={"/gallary?page="}
      />
    </div>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
