import { useEffect, useContext } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";
import BookContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <BookCreate />
      <div>
        <h1>Reading List</h1>
      </div>
      <BookList />
    </div>
  );
}
export default App;
