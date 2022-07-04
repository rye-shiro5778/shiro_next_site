import { client } from "./cmsClient";
import { Blog, MicroCMSListResponse } from "./type";
async function makeOGP() {
  const blogs: MicroCMSListResponse<Blog> = await client.blogs.$get();
}
