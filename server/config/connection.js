const mongoose = require("mongoose");
require("env").config


   const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/flashcards";

    mongoose.connect(uri, {});

    const db = mongoose.connection;

    db.on('connected', () => {
      console.log('MongoDB connected successfully');
    });
    
    db.on('error', (err) => {
      console.log('MongoDB connection error:', err);
    });
    
    module.exports = db;