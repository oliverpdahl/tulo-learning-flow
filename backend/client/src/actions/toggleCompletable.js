export function toggleCompletable(completable) {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE_COMPLETABLE', id: completable.id });
    fetch('/api/v1/completables' + completable.id, {
        method: 'PATCH',
        mode: 'CORS',
        body: JSON.stringify(completable),
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => err);
  };
}