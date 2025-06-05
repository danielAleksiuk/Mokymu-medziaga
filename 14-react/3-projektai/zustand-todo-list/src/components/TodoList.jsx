
import { useTodoStore } from "../store/store";
import Todo from "./Todo";

const TodoList = () => {
    const { todos } = useTodoStore();
    

    const printStore = () => {
        console.log(todos);
        // addTodo({name: 'pvz', completed: true, id: 456})
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id}>
                    <Todo todo={todo}/>
                </li>
            ))}
            <li>
                <button onClick={printStore}>
                    show store0
                </button>
            </li>
        </ul>
    )
};

export default TodoList;