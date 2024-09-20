const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors())
// Connect to MongoDB
require('./config/connectDB').connect()

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/books', bookRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
