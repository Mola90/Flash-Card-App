const User = require("../models/user");
const Flashcard = require("../models/flashcard");
const { Query } = require("mongoose");

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
    
        user: async ()=> {
            return await User.findById(id);
        },

        flashcards: async () => {
            return await Flashcard.find({});
        },
        flashcard: async () => {
            return await Flashcard.findById(id);
        },
    },

    Mutation: {
        addUser: async (_, {name, email, age}) =>{
            const user = new User({name, email, age});
            await user.save();
            return user;
        },
        addFlashcard: async (_, {question, answer, userId}) =>{ 
            const flashcard = new Flashcard({question, answer, user: userId});
            await flashcard.save();
            return flashcard;
        },

        User: {
            flashcard: async () => {
                return await Flashcard.find({ user: parent.id });
            }
        }
    },
};

module.exports = resolvers;