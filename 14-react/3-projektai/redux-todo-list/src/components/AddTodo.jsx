import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../actions/actions";

const AddTodo = () => {
    const [newTodo, setTodo] = useState('');
    const dispatch = useDispatch()

    const onAddTodoButtonClick = () => {
        console.log(newTodo);
        dispatch(addTodo({id: 123, name: newTodo, completed: false}))
    }

    return (
        <div className="add-todo-task">
            <input  
                type="text"
                value={newTodo}
                onChange={e => setTodo(e.target.value)}
            />
            <button 
                className="add-todo-button"
                onClick={onAddTodoButtonClick}
                >
                Add todo
            </button>
        </div>
    )
};

export default AddTodo;