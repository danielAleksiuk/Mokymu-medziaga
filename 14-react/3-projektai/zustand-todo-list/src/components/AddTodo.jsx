import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
    const [newTodo, setTodo] = useState('');
   

    const onAddTodoButtonClick = () => {
    //  {
    //         id: uuidv4(),
    //         name: newTodo,
    //         completed: false
    //     };
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