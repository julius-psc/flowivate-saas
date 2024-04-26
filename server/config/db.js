


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/flowivate');
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit process on connection failure
  }
};

module.exports = connectDB;
