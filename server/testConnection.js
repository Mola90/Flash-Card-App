// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const uri = 'mongodb+srv://molad:PzUjClJC0O7kOYx9@cluster0.yziucqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {});
    console.log('MongoDB connected successfully');
    process.exit(0);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

connectDB();
