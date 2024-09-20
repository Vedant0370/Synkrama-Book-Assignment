// src/utils/Validation.js
export function validateBookForm(formData) {
    const { title, author, year, genre } = formData;
    if (!title || !author || !year || !genre) {
      alert('All fields are required!');
      return false;
    }
    if (year < 1000 || year > new Date().getFullYear()) {
      alert('Please enter a valid year');
      return false;
    }
    return true;
  }
  