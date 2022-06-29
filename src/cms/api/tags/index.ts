import { MicroCMSListResponse, MicroCMSQueries, Tag } from "@/cms/type";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Tag>;
  };
};
