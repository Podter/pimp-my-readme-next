import { getVisitorCounter } from "../../util/svg";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get Query params
  const page = req.query.page;
  const response = await axios.get(
    `https://api.countapi.xyz/hit/webappio/${page}`
  );
  const data = response.data || 1;
  const svg = getVisitorCounter(data.value);
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
