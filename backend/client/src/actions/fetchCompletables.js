const fetchCompletables = () => {
  return (dispatch) => {
    fetch('/api/v1/completables').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'LOAD_COMPLETABLES', completables: responseJSON })
    })
  }
}

export default fetchCompletables