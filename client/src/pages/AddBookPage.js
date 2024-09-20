import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import "../App.css";

const AddBookPage = () => {
  const [book, setBook] = useState({ title: '', author: '', year: '', genre: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert year to number
    const bookData = {
      ...book,
      year: Number(book.year) // Convert year to number
    };
  
    axios.post('http://localhost:5000/api/books', bookData)
      .then(() => {
        window.alert('Book added successfully!');
        navigate('/');
      })
      .catch(error => {
        console.error('Error adding book:', error);
        window.alert('Failed to add book. Please try again.');
      });
  };
  
  return (
    <>
      <Navbar />
    
    <div className="container mt-5 w-50">
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
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
        <button type="submit" className="btn btn-primary mt-3">Add Book</button>
      </form>
    </div>
    </>
  );
};

export default AddBookPage;
