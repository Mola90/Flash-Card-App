const User = require("../models/user");
const Flashcard = require("../models/flashcard");

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
    
        user: async (_, { id })=> {
            return await User.findById(id);
        },
        userByEmail: async (_, { email }) => { 
            return await User.findOne({ email });
        },

        flashcards: async () => {
            return await Flashcard.find({}).populate("user");
        },
        flashcard: async (_, { id }) => {
            return await Flashcard.findById(id).populate("user");
        },
    },

    Mutation: {
        addUser: async (_, {name, email, password}) =>{
            const user = new User({name, email, password});
            await user.save();
            return user;
        },
        addFlashcard: async (_, {question, answer, userId}) =>{ 
            const flashcard = new Flashcard({question, answer, user: userId});
            await flashcard.save();

            await User.findByIdAndUpdate(userId, { $push: { flashcards: flashcard._id } });

            return flashcard;
        },
    },

    User: {
        flashcards: async (parent) => {
            return await Flashcard.find({ user: parent.id });
        }
    },
    
};

module.exports = resolvers;