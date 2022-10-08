import { useState, useContext, useEffect } from "react";
import { MarkdownPreviewContext } from "../components/EditCoolComponent";
import { CommonTextField } from "../components/CommonTextField";
import queryString from "query-string";
import { origin } from "../util/index";

let theOrigin = origin;

const VisitorCounter = () => {
  const { setSrc, setMarkdown }: any = useContext(MarkdownPreviewContext);
  const [page, setPage] = useState("webapp.io");

  useEffect(() => {
    theOrigin = window.location.origin;
  }, []);

  useEffect(() => {
    const params = {
      page: page,
    };
    const query = queryString.stringify(params);
    const src = `/api/visitor-counter?${query}`;
    const md = `[![Visitor Counter for ${page}](${theOrigin}/api/visitor-counter?${query})}](${theOrigin})`;
    setSrc(src);
    setMarkdown(md);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="d-block">
      <CommonTextField
        name="GitHub Username"
        value={page}
        onChange={(e) => setPage(e.target.value)}
      />
    </div>
  );
};

export default VisitorCounter;
