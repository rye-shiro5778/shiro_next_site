import { NextApiRequest, NextApiResponse } from "next";

export default async function clearPreview(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res.clearPreviewData();
  res.writeHead(307, { Location: `/` });
  res.end("Preview mode disabled");
}
