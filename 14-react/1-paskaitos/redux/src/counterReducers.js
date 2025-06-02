const COUNT_KEY = 'count-value';

export const counterReducer = (state = { count: 
    localStorage.getItem(COUNT_KEY) ? parseInt(localStorage.getItem(COUNT_KEY)) : 0
    }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            localStorage.setItem(COUNT_KEY, state.count + 1);
            return { count: state.count + 1 };
        case 'DECREMENT':
            localStorage.setItem(COUNT_KEY, state.count - 1);
            return { count: state.count - 1}
        case 'RESET':
            localStorage.setItem(COUNT_KEY, 0);
            return { count: 0 }
        default:
            return state;
    }
}