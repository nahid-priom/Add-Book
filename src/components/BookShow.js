import { useContext, useState } from "react";
import BookContext from "../context/books";
import { BookEdit } from "./BookEdit";


export const BookShow = ({ book }) => {
  const {deleteBookById, editBookById} = useContext(BookContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    editBookById(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/200/150`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
