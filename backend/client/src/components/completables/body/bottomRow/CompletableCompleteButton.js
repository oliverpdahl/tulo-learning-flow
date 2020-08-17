import React from "react";
import { Button } from "react-bootstrap";

export default function CompletableCompleteButton({
  toggleCompletable,
  allCompletables,
  completable,
  completable: { id: completableId, nodes: completableNodes },
  isComplete,
  completeNodes,
}) {
  const handleOnClick = () => {
    toggleCompletable(allCompletables.find((c) => c.id === completableId)); //Find the completable with the specified if clicked and toggle it
  };

  const allNodeComplete = () => {
    if (!!completableNodes && !!completableNodes[0]) {
      return (
        !!completeNodes(completable) &&
        !(completeNodes(completable).length === completableNodes.length)
      );
    }
  };

  const disabled = () => {
    return allNodeComplete() ? !isComplete(completable) : false;
  };

  return (
    <Button
      variant="primary"
      onClick={handleOnClick}
      disabled={disabled()}
      block
    >
      {isComplete(completable) ? "Unmark" : "Mark"} Complete
    </Button>
  );
}
