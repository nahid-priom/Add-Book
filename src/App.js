import { useState } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBook = [
      ...books,
      { id: Math.round(Math.random() * 1000), title },
    ];
    setBooks(updateBook);
  };
  const deleteBookById = (id) => {
    const updateBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBook);
  };
  const editBookById = (id, newTitle) => {
    const updateBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updateBook);
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
