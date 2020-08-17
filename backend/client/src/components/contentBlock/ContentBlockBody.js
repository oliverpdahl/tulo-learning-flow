import React from "react";
import Passage from "../content/Passage";
import Video from "../content/Video";

function ContentBlockBody({ contentBlock }) {
  const hasContents = (c) => {
    return !!c.contents;
  };
  const listContent = () => {
    return (
      hasContents(contentBlock) &&
      contentBlock.contents.map((content) => {
        // eslint-disable-next-line default-case
        switch (content.type) {
          case "Passage":
            return <Passage {...content} />;
          case "Video":
            return <Video {...content} />;
        }
      })
    );
  };
  return <div>{listContent()}</div>;
}

export default ContentBlockBody;
