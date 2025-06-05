const Todo = ({todo}) => {
    const onTodoClick = (id) => {

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