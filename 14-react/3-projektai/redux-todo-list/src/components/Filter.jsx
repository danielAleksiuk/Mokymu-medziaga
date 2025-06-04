import { useDispatch, useSelector } from "react-redux";
import {setFilter } from '../actions/actions';

const Filter = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector(state => state.filterValue);
    console.log(currentFilter)
    
    return (
        <div className="filters">
            <span 
                className={currentFilter === 'all' ? 'active' : '' }
                onClick={() => dispatch(setFilter('all'))}>
                    All
            </span>
            <span 
                className={currentFilter === 'completed' ? 'active' : '' }
                onClick={() => dispatch(setFilter('completed'))}
                >
            Completed</span>
            <span 
                className={currentFilter === 'incompleted' ? 'active' : '' }
                onClick={() => dispatch(setFilter('incompleted'))}>
            Incomplete</span>
        </div>
    )
};

export default Filter;