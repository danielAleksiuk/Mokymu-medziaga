import { useTodoStore } from "../store/store";

const Todo = ({todo}) => {
    const { toggleTodo } = useTodoStore();

    const onTodoClick = (id) => {
        toggleTodo(id)
    }

    return (
        <>
            {todo && (
                <span  onClick={(e)=> {
                        e.preventDefault();
                        e.stopPropagation();
                        onTodoClick(todo.id)
                    }}>
                    <input 
                        disabled
                        type="checkbox" 
                        checked={todo.completed} 
                        />
                    {todo.name}
                </span>
            )}
        </>
    )
};

export default Todo;