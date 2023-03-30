import { useContext } from "react";
import BookContext from "../context/books";
import { BookShow } from "./BookShow";

export const BookList = () => {
  const { books } = useContext(BookContext);
  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderBooks}</div>;
};
