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
        return content.type === "Passage" ? (
          <Passage {...content} key={content.id} />
        ) : (
          <Video {...content} key={content.id} />
        );
      })
    );
  };
  return <div>{listContent()}</div>;
}

export default ContentBlockBody;
