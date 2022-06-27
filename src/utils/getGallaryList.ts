import { gallraryList } from "@/art/gallary";
import { Gallary } from "@/utils/types/gallary";

type Props = {
  sort?: {
    key: keyof Gallary;
    order: "desc" | "asc";
  };
  limit?: number;
  offset?: number;
};

export function getGallraryList({ sort, limit, offset = 0 }: Props) {
  const _gallaruList = { ...gallraryList };
  const gallrary = Object.keys(_gallaruList).map((id) => {
    return gallraryList[id];
  });

  const sortKey = sort?.key ?? "postedDate";
  const sortOrder = sort?.order ?? "asc";
  if (sortKey === "ogp" || sortKey === "tags") {
    return gallrary;
  }

  gallrary.sort((before, next) => {
    const order = sortOrder === "asc" ? 1 : -1;
    if (before[sortKey] > next[sortKey]) return -1 * order;
    if (before[sortKey] < next[sortKey]) return 1 * order;
    return 0;
  });

  const length = gallrary.length;
  return gallrary.slice(offset, limit ? offset + limit : length);
}
