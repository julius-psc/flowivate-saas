


const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database before starting the server
connectDB();



app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
