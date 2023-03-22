import {BookShow} from './BookShow'

export const BookList = ({books, onDelete, onEdit}) => {
    const renderBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} onDelete = {onDelete} key={book.id} book={book} /> 
    });
    return(
        <div className='book-list'>{renderBooks}</div>
    );
}