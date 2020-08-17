import React from "react";

export default function Source({ creator, resource }) {
  return (
    !!(resource || creator) && (
      <footer class="blockquote-footer text-right pb-3">
        {creator} <cite title="Source Title">{resource}</cite>
      </footer>
    )
  );
}
