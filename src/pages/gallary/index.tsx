import { Text } from "@/components/atoms/Text";
import Layout from "@/components/templates/Layouts";
import { getGallraryList } from "@/utils/getGallaryList";
import type { NextPageWithLayout } from "next";
import { useMemo } from "react";

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
                  <div className="font-bold text-xl">
                    <p className={"text-black"}>{title}</p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p className={"text-gray-600"}>{postedDate}</p>
                    <div className="pl-6 ">
                      {tags &&
                        tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 "
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </>
            </Text>
          </div>
        );
      })}
    </div>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
