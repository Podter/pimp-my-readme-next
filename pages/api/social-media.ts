import { getSocialIcons } from "../../util/svg";
import { getSocialMediaSVG } from "../../util/svg-helper";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const social: any = req.query.social || "";
  const socialSvg = getSocialMediaSVG(social);
  const svg = getSocialIcons(socialSvg);
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
