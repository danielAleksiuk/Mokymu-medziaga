const Filter = () => {    
    const currentFilter = 'all'
    
    
    return (
        <div className="filters">
            <span 
                className={currentFilter === 'all' ? 'active' : '' }
                onClick={() => console.log('click')}>
                    All
            </span>
            <span 
                className={currentFilter === 'completed' ? 'active' : '' }
                onClick={() => console.log('click')}
                >
            Completed</span>
            <span 
                className={currentFilter === 'incompleted' ? 'active' : '' }
                onClick={() => console.log('click')}>
            Incomplete</span>
        </div>
    )
};

export default Filter;