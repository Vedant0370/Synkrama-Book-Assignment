const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("Database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};