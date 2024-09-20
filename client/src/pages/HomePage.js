import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";
import "../App.css";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  // Fetch books when component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to fetch books from the API and reverse the order
  const fetchBooks = () => {
    axios.get('http://localhost:5000/api/books')
      .then(response => {
        const reversedBooks = response.data.reverse(); // Reverse the order to show new books first
        setBooks(reversedBooks);
      })
      .catch(error => console.error('Error fetching books:', error));
  };

  // Delete book function with confirmation and re-fetch
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      axios.delete(`http://localhost:5000/api/books/${id}`)
        .then(() => {
          window.alert('Book deleted successfully!');
          fetchBooks(); // Re-fetch the updated list of books after deletion
        })
        .catch(error => {
          console.error('Error deleting book:', error);
          window.alert('Failed to delete book. Please try again.');
        });
    }
  };

  return (
    <>
      <Navbar />
   
    <div className="container mt-5">
      <h1>Library Book Collection</h1>
      <Link to="/add" className="btn btn-primary mb-3">Add New Book</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.genre}</td>
              <td>
                <Link to={`/edit/${book._id}`} className="btn btn-warning mr-2">Edit</Link>
                <button onClick={() => handleDelete(book._id)} className="btn btn-danger">Delete</button>
                <Link to={`/book/${book._id}`} className="btn btn-info ml-2">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default HomePage;
