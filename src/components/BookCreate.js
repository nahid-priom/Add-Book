import { useState } from "react";

export const BookCreate = ({onCreate}) => {

    const [title, setTitle] = useState('');

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }
    const handelSubmit = (event)=> {
        event.preventDefault();
        onCreate(title);
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