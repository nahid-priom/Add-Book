import { useContext, useState } from "react";
import BookContext from "../context/books";

export const BookCreate = () => {

    const [title, setTitle] = useState('');
    const {createBook} = useContext(BookContext);

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }
    const handelSubmit = (event)=> {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return(
        <div className="book-create">
            <form onSubmit={handelSubmit}>
                <label>
                    Title of the Book
                </label>
                <input value={title} onChange= {handleChange}></input>
                <button className="button">Create!</button>
            </form>
        </div>
    );
}