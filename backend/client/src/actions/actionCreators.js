
import { LOAD_COMPLETABLES, TOGGLE_COMPLETABLES } from '../actions/actionTypes'

export function loadCompletables(completables) {
  return { type: LOAD_COMPLETABLES, completables: completables }
}

export function toggleCompletables(index) {
  return { type: TOGGLE_COMPLETABLES, index: index }
}