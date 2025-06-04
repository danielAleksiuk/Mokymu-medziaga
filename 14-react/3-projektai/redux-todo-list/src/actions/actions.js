import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

export const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        // kur generuoti id cia arba komponente?
        content
    }
});

export const toogleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: {
        filter
    }
})