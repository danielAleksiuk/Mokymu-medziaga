import { useState } from "react";

const AddTodo = () => {
    const [newTodo, setTodo] = useState('');

    const onAddTodoButtonClick = () => {
        console.log(newTodo)
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