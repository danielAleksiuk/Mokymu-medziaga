import { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todosState ,  setTodosState] = useState([]);
    const [filterState, setFilterState] = useState('all');

    const addTodo = (todo) => {
        setTodosState(prevState => [...prevState, todo]);
    }

    const toggleTodo = (id) => {
        setTodosState(prevState => 
            prevState.map(item => item.id === id ? {...item, completed: !item.completed} : item)
        )
    }

    return (
        <TodoContext.Provider value={{ 
            todos: todosState,
            addTodo,
            toggleTodo,
            setFilter: setFilterState,
            filter: filterState 
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;

