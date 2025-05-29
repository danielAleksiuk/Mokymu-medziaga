import { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";


const Books = () => {
    const { books } = useContext(BookContext);
    
    return (
        <div className="book-list">
            <h2>book list</h2>
            <ul>
                { books.map(book => (
                    <li key={book.id}>
                        {book.title} - {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Books;