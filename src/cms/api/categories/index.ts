import {
  Category,
  MicroCMSListResponse,
  MicroCMSQueries,
} from "@/cms/utils/type";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Category>;
  };
};
