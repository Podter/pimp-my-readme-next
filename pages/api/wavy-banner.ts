import { getWavyBanner } from "../../util/svg";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get Query Params
  const title: any = req.query.title || "webapp.io";
  const subtitle: any =
    req.query.subtitle || "review code changes like Facebook does";
  const svg = getWavyBanner(title, subtitle);
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
