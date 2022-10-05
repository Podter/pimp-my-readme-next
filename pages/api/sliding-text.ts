import { getSlidingTextWithEmojis } from "../../util/svg";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get Query Params
  const text: any = req.query.text || "webapp.io github readme builder";
  const emojis: any = req.query.emojis || "";

  // Get the Emoji's
  const emojiArray = emojis.split("_");
  const emojiAsHtml = emojiArray.reduce((str, emoji) => {
    // Set the Emoji
    let tempString = `&#x${emoji};`;

    // Check if Emoji has other attributes and add in a string
    if (emoji.includes("-")) {
      tempString = emoji.split("-").reduce((tempStr, attr) => {
        return tempStr + `&#x${attr};`;
      }, "");
    }

    // Return back the emoji in a span element
    if (emoji.length > 0) {
      return str + `<span class="emoji">${tempString}</span>`;
    }

    return str;
  }, "");

  const svg = getSlidingTextWithEmojis(text, emojiAsHtml);

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
