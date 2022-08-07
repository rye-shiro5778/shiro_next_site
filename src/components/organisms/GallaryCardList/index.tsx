import { Title } from "@/components/atoms/Typography/Title";
import { Card } from "@/components/molecules/Card";
import { getGallraryList } from "@/utils/getGallaryList";
import { useMemo } from "react";

type Props = {
  offset?: number;
  limit?: number;
};

const GallraryCardList: React.VFC<Props> = ({ limit, offset = 0 }) => {
  const gallaryList = useMemo(
    () =>
      getGallraryList({
        limit,
        offset,
      }),
    [limit, offset]
  );

  if (gallaryList.length === 0) {
    return (
      <Title level={3} className="container my-10">
        Not found Contents ...
      </Title>
    );
  }
  return (
    <>
      {gallaryList.map(({ title, description, postedDate, id, card, tags }) => {
        const _tags =
          tags?.map((tag) => {
            return { slug: tag, name: tag };
          }) || [];
        return (
          <Card
            key={id}
            title={title}
            tagPosition={"flex"}
            img={card}
            subTitle={`Posted:${postedDate}`}
            tags={_tags}
            href={`/gallary/${id}`}
          />
        );
      })}
    </>
  );
};

export default GallraryCardList;
