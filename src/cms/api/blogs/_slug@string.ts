import { Blog, MicroCMSObjectContent, MicroCMSQueries } from "@/cms/utils/type";
export type Methods = {
  get: {
    query?: Pick<MicroCMSQueries, "draftKey" | "fields" | "depth">;
    resBody: Blog & MicroCMSObjectContent;
  };
};
