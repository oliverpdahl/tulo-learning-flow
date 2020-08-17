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
        const {
          type,
          img_link,
          img_creator,
          img_resource,
          text,
          creator,
          resource,
          link,
        } = content;
        // eslint-disable-next-line default-case
        switch (type) {
          case "Passage":
            return (
              <Passage
                img_link={img_link}
                img_creator={img_creator}
                img_resource={img_resource}
                text={text}
                creator={creator}
                resource={resource}
              />
            );
          case "Video":
            return <Video creator={creator} resource={resource} link={link} />;
        }
      })
    );
  };
  return <div>{listContent()}</div>;
}

export default ContentBlockBody;
