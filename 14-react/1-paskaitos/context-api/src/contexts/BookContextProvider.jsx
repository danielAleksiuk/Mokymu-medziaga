import { useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [state ,  setState] = useState([
        {title: 'atomic', author: 'james', id: 1},
        {title: 'principles', author: 'ray', id: 2},
        {title: 'boy', author: 'charlie', id: 3}
    ]);

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
        <BookContext.Provider value={{ books: state, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;

