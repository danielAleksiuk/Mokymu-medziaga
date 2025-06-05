// import { useTodoStore } from "../store/store";

const Filter = () => {
    // const { filter, setFilter } = useTodoStore();
    const filter = 'all';
    
    return (
        <div className="filters">
            <span 
                className={filter === 'all' ? 'active' : '' }
                onClick={() => console.log('click filter')}>
                    All
            </span>
            <span 
                className={filter === 'completed' ? 'active' : '' }
                onClick={() => console.log('click filter')}
                >
            Completed</span>
            <span 
                className={filter === 'incompleted' ? 'active' : '' }
                onClick={() =>  console.log('click filter')}>
            Incomplete</span>
        </div>
    )
};

export default Filter;