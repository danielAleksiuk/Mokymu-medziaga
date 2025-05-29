import { useEffect, useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BOOKS_KEY = 'books'

const BookContextProvider = (props) => {
    const [state ,  setState] = useState(() => {
        const localStorageData = localStorage.getItem(BOOKS_KEY);

        return localStorageData ? JSON.parse(localStorageData) : [];
    });

    useEffect(() => {
       localStorage.setItem(BOOKS_KEY, JSON.stringify(state));
    }, [state])

    const addBook = (title, author) => {
        setState( prev => [
            ...prev,
            {title, author, id: uuidv4()}
        ]);
    };

    const removeBook = (id) => {
        setState(prev => prev.filter(item => item.id !== id));
    }

    return (
        <BookContext.Provider value={{ books: state, addBook, removeBook, setBooks: setState }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;

