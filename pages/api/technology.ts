import { getTechnologiesSvg } from "../../util/svg";
import { getTechnologySVG } from "../../util/svg-helper";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const technology: any = req.query.technology || "webapp.io";

  const technologies = technology.split("_").reduce((str, tech) => {
    if (tech.length > 0) {
      const { svg, text } = getTechnologySVG(tech);
      return (
        str +
        `
            <div class="item">
                ${svg}
                <p class="item-text">
                 ${text}
                </p>
            </div>
            `
      );
    }
    return str;
  }, "");

  const svg = getTechnologiesSvg(technologies);
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
