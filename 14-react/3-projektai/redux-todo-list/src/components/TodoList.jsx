import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
    const todos = useSelector(state => state.todos);

    const printState = () => {
        console.log(todos);
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id}>
                    <Todo todo={todo}/>
                </li>
            ))}
            <li>
                <button onClick={printState}>print state</button>
            </li>
        </ul>
    )
};

export default TodoList;