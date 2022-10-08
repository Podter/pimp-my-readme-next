import { useState, useContext, useEffect } from "react";
import { CommonTextField } from "../components/CommonTextField";
import { MarkdownPreviewContext } from "../components/EditCoolComponent";
import queryString from "query-string";
import { origin } from "../util/index";

let theOrigin = origin;

const WavyBanner = () => {
  const { setSrc, setMarkdown }: any = useContext(MarkdownPreviewContext);
  const [title, setTitle] = useState("Jellybear");
  const [subtitle, setSubtitle] = useState("I'm the webapp.io mascot :)");

  useEffect(() => {
    theOrigin = window.location.origin;
  }, []);

  useEffect(() => {
    const params = {
      title: title,
      subtitle: subtitle,
    };
    const query = queryString.stringify(params);
    const source = `/api/wavy-banner?${query}`;
    const md = `[![${title}, ${subtitle}](${theOrigin}/api/wavy-banner?${query})](${theOrigin})`;
    setSrc(source);
    setMarkdown(md);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, subtitle]);

  return (
    <div className="d-block">
      <CommonTextField
        name="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <CommonTextField
        name="Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
    </div>
  );
};

export default WavyBanner;
