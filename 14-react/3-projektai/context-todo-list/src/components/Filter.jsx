// import { useTodoStore } from "../store/store";

import { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const Filter = () => {
    const {filter, setFilter} = useContext(TodoContext);
    
    
    return (
        <div className="filters">
            <span 
                className={filter === 'all' ? 'active' : '' }
                onClick={() => setFilter('all')}>
                    All
            </span>
            <span 
                className={filter === 'completed' ? 'active' : '' }
                onClick={() => setFilter('completed')}
                >
            Completed</span>
            <span 
                className={filter === 'incompleted' ? 'active' : '' }
                onClick={() =>  setFilter('incompleted')}>
            Incomplete</span>
        </div>
    )
};

export default Filter;