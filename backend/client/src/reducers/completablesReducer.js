
import { LOAD_COMPLETABLES, TOGGLE_COMPLETABLES } from '../actions/actionTypes'

function completablesReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_COMPLETABLES:
            return action.completables;

        // case TOGGLE_TODO:
        //     return state.map(todo => (todo.id === action.index) 
        //           ? {...todo, done: !todo.done}
        //           : todo
        //     );
    }
}

export default completablesReducer