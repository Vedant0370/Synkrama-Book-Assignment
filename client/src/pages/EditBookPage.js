import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import Navbar from '../components/Navbar';

const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '', year: '', genre: '' });

  useEffect(() => {
    // Fetch book details by ID
    axios.get(`http://localhost:5000/api/books/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  const handleInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert year to number
    const bookData = {
      ...book,
      year: Number(book.year) // Ensure year is a number
    };
  
    axios.put(`http://localhost:5000/api/books/${id}`, bookData)
      .then(() => {
        window.alert('Book updated successfully!');
        navigate('/');
      })
      .catch(error => {
        console.error('Error updating book:', error);
        window.alert('Failed to update book. Please try again.');
      });
  };
  
  return (
    <>
      <Navbar/>
    
    <div className="container mt-5">
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" className="form-control" value={book.title} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input type="text" name="author" className="form-control" value={book.author} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input type="number" name="year" className="form-control" value={book.year} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input type="text" name="genre" className="form-control" value={book.genre} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Update Book</button>
      </form>
    </div>
    </>
  );
};

export default EditBookPage;
