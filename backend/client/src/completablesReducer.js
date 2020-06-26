const completablesReducer = (state = { completables: [], requesting: false }, action) => {
  switch (action.type) {
 
    case 'START_ADDING_COMPLETABLES_REQUEST':
      return {
        ...state,
        completables: [...state.completables],
        requesting: true
      }
 
    case 'ADD_COMPLETABLES':
      return {
        ...state,
        completables: action.completables,
        requesting: false
      }
      
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        completables: action.completables,
        requesting: false
      }
    default:
      return state;
  }
};

export default completablesReducer;