import {
  MicroCMSListResponse,
  MicroCMSQueries,
  Tag,
} from "@/utils/types/blogs";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Tag>;
  };
};
