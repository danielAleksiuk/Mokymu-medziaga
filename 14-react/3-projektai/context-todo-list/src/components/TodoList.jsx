
import { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContextProvider";

const TodoList = () => {
    const {todos, filter} = useContext(TodoContext);
    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') {
            return todo;
        }

        if (filter === 'completed' && todo.completed) {
            return todo
        };

        if (filter === 'incompleted' && !todo.completed) {
            return todo
        };
    });
    return (
        <ul className="todo-list">
            {filteredTodos.map(todo => (
                <li key={todo.id}>
                    <Todo todo={todo}/>
                </li>
            ))}
        </ul>
    )
};

export default TodoList;