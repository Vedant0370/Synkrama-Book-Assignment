import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h1>Book Details</h1>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <button className="btn btn-secondary" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default BookDetailsPage;
