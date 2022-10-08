import { useState, useContext, useEffect } from "react";
import { MarkdownPreviewContext } from "../components/EditCoolComponent";
import { CommonTextField } from "../components/CommonTextField";
import { SOCIAL_MEDIA, origin } from "../util/index";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import queryString from "query-string";

let theOrigin = origin;

const SocialMedia = () => {
  const { setSrc, setMarkdown }: any = useContext(MarkdownPreviewContext);
  const [socialMedia, setSocialMedia] = useState(SOCIAL_MEDIA[0]);
  const [socialLink, setSocialLink] = useState("");

  useEffect(() => {
    theOrigin = window.location.origin;
  }, []);

  useEffect(() => {
    const params = {
      social: socialMedia,
    };
    const query = queryString.stringify(params);
    const src = `/api/social-media?${query}`;
    const md = `[![${socialMedia}](${theOrigin}/api/social-media?${query})](${socialLink})`;
    setSrc(src);
    setMarkdown(md);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socialMedia, socialLink]);
  return (
    <div className="d-block">
      <p>Select a Social Media</p>
      <Select
        label="Social Media"
        inputProps={{
          shrink: true,
        }}
        placeholder="Social Media"
        variant="outlined"
        fullWidth
        required
        value={socialMedia}
        name="Social Media"
        className="bg-white"
        onChange={(e: any) => setSocialMedia(e.target.value)}
      >
        {SOCIAL_MEDIA.map((sm, index) => (
          <MenuItem value={sm} key={index}>
            {sm}
          </MenuItem>
        ))}
      </Select>
      <CommonTextField
        name="Social Link"
        value={socialLink}
        onChange={(e) => setSocialLink(e.target.value)}
      />
      <small>
        Enter the direct link to your social media profile (I.e.,
        <a href="https://twitter.com/webappio"> https://twitter.com/webappio</a>
        ).
      </small>
    </div>
  );
};

export default SocialMedia;
