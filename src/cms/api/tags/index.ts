import { MicroCMSListResponse, MicroCMSQueries, Tag } from "@/cms/utils/type";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Tag>;
  };
};
