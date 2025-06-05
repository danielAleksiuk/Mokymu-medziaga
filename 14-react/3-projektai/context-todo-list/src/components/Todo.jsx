

const Todo = ({todo}) => {

    const onTodoClick = (id) => {

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