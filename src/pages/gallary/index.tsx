import { Text } from "components/atoms/Text";
import Layout from "components/templates/Layouts/default";
import type { NextPageWithLayout } from "next";
import { useMemo } from "react";
import { getGallraryList } from "utils/getGallaryList";

type Props = {};

const Page: NextPageWithLayout<Props> = ({}) => {
  const gallaryList = useMemo(() => getGallraryList({}), []);
  return (
    <div className="container mx-auto">
      {gallaryList.map(({ title, description, updatedDate, id }) => {
        return (
          <div key={id}>
            <Text type="link" href={`/gallary/${id}`} style={{ color: "red" }}>
              {title}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
