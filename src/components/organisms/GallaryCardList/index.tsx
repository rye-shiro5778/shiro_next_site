import { Card } from "@/components/molecules/Card";
import { getGallraryList } from "@/utils/getGallaryList";
import { useMemo } from "react";

type Props = {
  offset?: number;
  limit?: number;
};

export const GallraryCardList: React.VFC<Props> = ({ limit, offset = 0 }) => {
  const gallaryList = useMemo(
    () =>
      getGallraryList({
        limit,
        offset,
      }),
    [limit, offset]
  );
  if (gallaryList.length === 0) {
    return <div>Not Found</div>;
  }
  return (
    <div className="container px-4 mx-auto grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {gallaryList.map(({ title, description, postedDate, id, card, tags }) => {
        return (
          <Card
            key={id}
            title={title}
            img={card}
            subTitle={`Posted:${postedDate}`}
            tags={tags}
            href={`/gallary/${id}`}
          />
        );
      })}
    </div>
  );
};
