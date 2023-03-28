import { useState, useEffect } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
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
        if(id===book.id)
        {
          return {...books, ...response.data}
        }
        return book;
      });
      setBooks(updateBook);
    }
  };

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <div>
        <h1>Reading List</h1>
      </div>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
    </div>
  );
}
export default App;
