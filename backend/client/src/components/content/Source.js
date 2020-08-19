import React from "react";

export default function Source({ creator, resource }) {
  return (
    !!(resource || creator) && (
      <span className="blockquote-footer text-right pb-3">
        {creator} <cite title="Source Title">{resource}</cite>
      </span>
    )
  );
}
