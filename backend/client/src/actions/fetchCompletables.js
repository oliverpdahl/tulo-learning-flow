export function fetchCompletables() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_COMPLETABLES_REQUEST' });
    fetch('/api/v1/completables')
      .then(response => response.json())
      .then(completables => dispatch({ type: 'ADD_COMPLETABLES', completables }));
  };
}