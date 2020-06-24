import { combineReducers } from 'redux'
import completablesReducer from './completablesReducer'

const rootReducer = combineReducers({
  completables: completablesReducer
})

export default rootReducer