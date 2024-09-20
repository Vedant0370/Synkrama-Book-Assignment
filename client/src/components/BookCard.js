import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
        <p className="card-text">Year: {book.year}</p>
        <p className="card-text">Genre: {book.genre}</p>
        <Link to={`/edit/${book.id}`} className="btn btn-secondary mr-2">
          Edit
        </Link>
        <button onClick={() => onDelete(book.id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
