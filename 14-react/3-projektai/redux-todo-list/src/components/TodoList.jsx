import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
    const stateValue = useSelector(state => state);
    const todos = [
        { id: 1, name: 'do something', completed: true},
        { id: 2, name: 'do something more', completed: true},
        { id: 3, name: 'do something extra more', completed: false},
        { id: 4, name: 'do nothing', completed: false},
        { id: 5, name: 'do or not to do', completed: true}
    ];

    const printState = () => {
        console.log(stateValue);
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