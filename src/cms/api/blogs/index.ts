import { Blog, MicroCMSListResponse, MicroCMSQueries } from "@/cms/type";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Blog>;
  };
};
