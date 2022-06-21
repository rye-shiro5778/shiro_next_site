import { gallraryList } from "./constants/gallary";
import { Gallary } from "./types/gallary";

type Props = {
  sort?: {
    key: keyof Gallary;
    order: "desc" | "asc";
  };
  limit?: number;
};

export function getGallraryList({ sort, limit }: Props) {
  const _gallaruList = { ...gallraryList };
  const gallrary = Object.keys(_gallaruList).map((id) => {
    return gallraryList[id];
  });

  const sortKey = sort?.key ?? "postedDate";
  gallrary.sort((before, next) => {
    if (before[sortKey] > next[sortKey]) return -1;
    if (before[sortKey] < next[sortKey]) return 1;
    return 0;
  });

  if (limit) {
    return gallrary.slice(0, limit);
  }

  return gallrary;
}
