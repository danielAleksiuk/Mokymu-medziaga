import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";

const initialState = {
    todos: []
};

export const todoReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case ADD_TODO: {
            const {content} = action.payload;
            
            return {
                ...state,
                todos: [...state.todos, content]
            }
        }
        case TOGGLE_TODO: {
              return state;
        }
        default: 
            return state;
    }
}