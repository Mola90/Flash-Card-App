const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/flashcards";
    await mongoose.connect(uri, {});
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  }
};

module.exports = connectDB;