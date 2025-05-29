import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContextProvider";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Books = () => {
    const { books, removeBook, addBook,setBooks } = useContext(BookContext);
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });
    const [deleteId, setDeleteId] = useState(null);

    const handleCloseAdd = () => setShow(false);
    const handleShowAdd = () => setShow(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const saveNewBook = () => {
        addBook(newBook.title, newBook.author);
        setNewBook({
            title: '',
            author: ''
        });
        handleCloseAdd();
    }

    const deleteBook = () => {
        removeBook(deleteId);
        handleCloseDelete();
    }

    const deleteStorageData = () => {
        // localStorage.clear();
        // localStorage.setItem('books', [])
        setBooks([])
    }

    return (
        <div className="book-list">
            <hr/>
            <h2>book list</h2>
            <ul>
                { books.map(book => (
                    <li key={book.id} style={{margin: '20px'}}>
                        {book.title} - {book.author}
                        <button onClick={ () => {handleShowDelete(); setDeleteId(book.id)} }>delete</button>
                    </li>
                ))}
            </ul>

            <button onClick={handleShowAdd} style={{marginBottom: '25px'}}>
                add book
            </button>
              <button onClick={deleteStorageData} style={{marginBottom: '25px'}}>
                delete all books
            </button>
            <hr/>

            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Delete book
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   ar tikrai norite istrinti si booka?
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDelete}>
                    Close
                </Button>
                <Button variant="danger" onClick={deleteBook}>
                    delete
                </Button>
                </Modal.Footer>
            </Modal>    

            <Modal show={show} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Add new book
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input 
                        type="text" 
                        placeholder="title" 
                        value={newBook.title}
                        onChange={
                            (e) => setNewBook(prev => {return {title: e.target.value, author:prev.author}})
                        }/>
                    <input 
                        type="text" 
                        placeholder="author" 
                        value={newBook.author}
                        onChange={
                            (e) => setNewBook(prev => {return {title: prev.title, author: e.target.value}})
                        }/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAdd}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveNewBook}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Books;

// ant add book mygtuko paspaudimo, modal langas
// ivesti author , title 
// paspaudus save 
// prideti i books sarasa
