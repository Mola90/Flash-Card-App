const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB.URI || "mongodb://localhost:27017/flashcards");

module.exports = mongoose.connections;