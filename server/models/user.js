const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    flashcards: [
        {
            type: Schema.Types.ObjectId,
            ref: "Flashcard",
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;