import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback (async () => {
    const response = await axios.get("http://localhost:3001/books");
    return setBooks(response.data);
  }, []);
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    if (response.data) {
      const updateBook = [...books, response.data];
      setBooks(updateBook);
    }
  };
  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    if (response.status === 200) {
      const updateBook = books.filter((book) => id !== book.id);
      setBooks(updateBook);
    }
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    if (response.status === 200) {
      const updateBook = books.map((book) => {
        if (id === book.id) {
          return { ...books, ...response.data };
        }
        return book;
      });
      setBooks(updateBook);
    }
  };
  
  return (
    <BookContext.Provider value={{fetchBooks, books, createBook, deleteBookById, editBookById}}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;
