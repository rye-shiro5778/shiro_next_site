import {
  Blog,
  MicroCMSObjectContent,
  MicroCMSQueries,
} from "@/utils/types/blogs";
export type Methods = {
  get: {
    query?: Pick<MicroCMSQueries, "draftKey" | "fields" | "depth">;
    resBody: Blog & MicroCMSObjectContent;
  };
};
