
import { useTodoStore } from "../store/store";
import Todo from "./Todo";

const TodoList = () => {
    const { todos, filter } = useTodoStore();
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
    })

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