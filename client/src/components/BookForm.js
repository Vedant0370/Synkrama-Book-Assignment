import React, { useState } from 'react';

const BookForm = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');
  const [year, setYear] = useState(book ? book.year : '');
  const [genre, setGenre] = useState(book ? book.genre : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, year, genre });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Year</label>
        <input
          type="number"
          className="form-control"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          className="form-control"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default BookForm;
