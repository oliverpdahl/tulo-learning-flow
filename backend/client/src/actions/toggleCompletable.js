export function toggleCompletable(completable) {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_COMPLETABLE', id: completable.id });
  };
}