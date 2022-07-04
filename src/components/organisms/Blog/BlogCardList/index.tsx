import { Blog, MicroCMSContentId, MicroCMSDate } from "@/cms/utils/type";
import { Text } from "@/components/atoms/Typography/Text";
import { Card } from "@/components/molecules/Card";
import dayjs from "dayjs";
import Image from "next/image";
import { BiTime } from "react-icons/bi";

type Props = {
  blogs: (Blog & MicroCMSContentId & MicroCMSDate)[];
};

export const BlogCardList: React.VFC<Props> = ({ blogs }) => {
  if (blogs.length === 0) {
    return <Text>Not Found</Text>;
  }
  return (
    <>
      {blogs.map(({ title, publishedAt, eyecatch, tags, slug }) => {
        const publishedDate = dayjs(publishedAt).format("YYYY-MM-DD");
        const img = eyecatch?.url ? (
          <Image alt={title} src={eyecatch.url} width={400} height={250} />
        ) : (
          <></>
        );

        return (
          <Card
            key={slug}
            title={title}
            subTitle={
              <div className="flex items-center">
                <BiTime className="text-base mr-1" />
                <p>{`  ${publishedDate}`}</p>
              </div>
            }
            tagPosition={"block"}
            img={img}
            tags={tags}
            href={`/blog/${slug}`}
          />
        );
      })}
    </>
  );
};
