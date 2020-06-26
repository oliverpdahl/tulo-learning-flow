export function toggleCompletable(id) {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_COMPLETABLE', id });
  };
}