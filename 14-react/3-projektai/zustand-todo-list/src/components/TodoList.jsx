
import Todo from "./Todo";

const TodoList = () => {
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