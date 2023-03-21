import { useState } from "react";
import { BookCreate } from "./components/BookCreate";

function App (){
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updateBook = [title, ...books];
        console.log(title);
        setBooks(updateBook);
    }
    return(
        <div>
            {books.length}
            <BookCreate onCreate= {createBook} />
        </div>
    );
}
export default App;