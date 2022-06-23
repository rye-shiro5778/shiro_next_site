import { Text } from "components/atoms/Text";
import Layout from "components/templates/Layouts";
import type { NextPageWithLayout } from "next";
import { useMemo } from "react";
import { getGallraryList } from "utils/getGallaryList";

type Props = {};

const Page: NextPageWithLayout<Props> = ({}) => {
  const gallaryList = useMemo(() => getGallraryList({}), []);
  return (
    <div className="container px-4 mx-auto grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {gallaryList.map(({ title, description, postedDate, id, card, tags }) => {
        return (
          <div
            key={id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
          >
            <Text
              type="link"
              href={`/gallary/${id}`}
              className={"text-gray-400 hover:"}
            >
              <>
                <div className="w-full">{card}</div>
                <div className="mx-6 my-2">
                  <div className="font-bold text-xl mb-2">
                    <Text type="text" className={"text-gray-400"}>
                      {title}
                    </Text>
                  </div>
                  <Text type={"text"} className={"text-gray-400"}>
                    {postedDate}
                  </Text>
                </div>
              </>
            </Text>
            <div className="px-6 pt-1 pb-2">
              {tags &&
                tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
