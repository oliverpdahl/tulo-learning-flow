import { createReducer } from '@reduxjs/toolkit'

const initialState = { completables: [], requesting: false }
const completablesReducer = createReducer(initialState, { 
  START_ADDING_COMPLETABLES_REQUEST: (state) => {
    state.requesting = true
  },
  ADD_COMPLETABLES: (state, action) => {
    state.completables = action.completables
  },
  TOGGLE_COMPLETABLE: (state, action) => {
    const completable = state.completables.find(completable => completable.id === action.id)
    completable.complete = !completable.complete
  }
})

export default completablesReducer;