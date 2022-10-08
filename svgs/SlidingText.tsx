import { useState, useContext, useEffect } from "react";
import { MarkdownPreviewContext } from "../components/EditCoolComponent";
import { CommonTextField } from "../components/CommonTextField";
import queryString from "query-string";
import { origin } from "../util/index";
import { X } from "react-feather";
import EmojiPicker from "emoji-picker-react";

let theOrigin = origin;

const SlidingText = () => {
  const { setSrc, setMarkdown }: any = useContext(MarkdownPreviewContext);
  const [text, setText] = useState("Hey, I'm Jellybear!");
  const [emojis, setEmojis] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    theOrigin = window.location.origin;
    setShowPicker(true);
  }, []);

  useEffect(() => {
    const emojiUnifiedCodes = emojis.reduce((arr, emoji) => {
      return [...arr, emoji.unified];
    }, []);
    const emojiString = emojiUnifiedCodes.join("_");
    const params = {
      text: text,
      emojis: emojiString,
    };
    const query = queryString.stringify(params);
    const source = `/api/sliding-text?${query}`;
    const md = `[![${text}](${theOrigin}/api/sliding-text?${query})](${theOrigin})`;
    setSrc(source);
    setMarkdown(md);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, emojis]);

  const selectEmoji = (emoji) => {
    setEmojis((prevState) => {
      return [...prevState, emoji];
    });
  };

  const removeEmoji = (index) => {
    setEmojis((prevState) => {
      prevState.splice(index, 1);
      return [...prevState];
    });
  };

  return (
    <div className="d-block">
      <CommonTextField
        name="Title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Select your Emoji(s)</p>
      <div className="d-flex flex-row">
        {emojis.map((emoji, index) => (
          <div key={`emoji_${index}`} className="my-4">
            <span className="badge badge-light CoolComponent--Emoji">
              {emoji.emoji}
            </span>
            <button
              onClick={() => removeEmoji(index)}
              className="btn btn-danger ml-2 btn-sm"
            >
              <X />
            </button>
          </div>
        ))}
      </div>
      {showPicker ? <EmojiPicker onEmojiClick={selectEmoji} /> : null}
    </div>
  );
};

export default SlidingText;
