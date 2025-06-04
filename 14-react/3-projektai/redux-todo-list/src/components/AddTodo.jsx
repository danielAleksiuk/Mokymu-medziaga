import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../actions/actions";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
    const [newTodo, setTodo] = useState('');
    const dispatch = useDispatch()

    const onAddTodoButtonClick = () => {
        dispatch(addTodo({
            id: uuidv4(),
            name: newTodo,
            completed: false
        }));
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