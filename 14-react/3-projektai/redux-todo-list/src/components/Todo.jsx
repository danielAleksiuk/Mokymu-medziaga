import { useDispatch } from "react-redux";
import { toogleTodo } from "../actions/actions";

const Todo = ({todo}) => {
    const dispatch= useDispatch();

    const onTodoClick = (id) => {
        dispatch(toogleTodo(id))
    }

    return (
        <>
            {todo && (
                <span  onClick={()=> onTodoClick(todo.id)}>
                    <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        disabled/>
                    {todo.name}
                </span>
            )}
        </>
    )
};

export default Todo;