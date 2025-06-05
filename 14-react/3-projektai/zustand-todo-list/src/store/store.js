import { create } from 'zustand';


export const useTodoStore = create((set) => ({
    todos: [],
    filter: 'all',
    addTodo: (todo) => set((state) => ({todos: [...state.todos, todo]})),
    toggleTodo: (id) => set((state) => ({ 
        todos: state.todos.map((todo) => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        )
    })),
    setFilter: (filter) => set({filter})
}));

