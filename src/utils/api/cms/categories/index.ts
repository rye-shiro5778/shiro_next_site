import {
  Category,
  MicroCMSListResponse,
  MicroCMSQueries,
} from "@/utils/types/blogs";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Category>;
  };
};
