const Todo = ({todo}) => {
    return (
        <>
            {todo && (
                <>
                    <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        disabled/>
                    {todo.name}
                </>
            )}
        </>
    )
};

export default Todo;