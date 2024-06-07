const mongoose = require('mongoose');
const uri = 'mongodb+srv://mola_d%40hotmail.com:Dafa7234@cluster0.mongodb.net/flashcards?retryWrites=true&w=majority';

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
