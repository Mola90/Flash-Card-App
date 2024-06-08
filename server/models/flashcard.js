import mongoose from "mongoose";

const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    answer : {
        type: String,
        required: true,
    },
    user : {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
        
    
});


const Flashcard = mongoose.model("Flashcard", flashcardSchema);

export default Flashcard;