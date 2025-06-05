
import { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContextProvider";

const TodoList = () => {
    const contextObject = useContext(TodoContext);
    const todos = [];

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id}>
                    <Todo todo={todo}/>
                </li>
            ))}
        </ul>
    )
};

export default TodoList;