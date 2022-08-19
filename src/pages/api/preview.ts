import { client } from "@/utils/cmsClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { draftKey, contentId } = req.query;

  if (typeof draftKey !== "string" || typeof contentId !== "string") {
    res.status(400).json({ message: "Invalid params" });
    return;
  }

  const { slug } = await client.blogs
    ._slug(contentId)
    .$get({ query: { draftKey } });

  if (!slug) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({ draftKey, slug });
  res.writeHead(307, { Location: `/blog/${slug}` });
  res.end("start preview");
}
