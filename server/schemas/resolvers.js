const User = require("../models/user");
const Flashcard = require("../models/flashcard");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
    
        user: async (_, { id })=> {
            return await User.findById(id);
        },
        userByEmail: async (_, { email }) => { 
            const user = await User.findOne({ email });
            console.log("user my email attemped");

            if (!user){
                console.log("if statement");
                throw AuthenticationError;
            }
            console.log("after ifffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

            const token = signToken(user);
            console.log("this is the tolken", token);

            return { token, user };
        },

        flashcards: async () => {
            return await Flashcard.find({}).populate("user");
        },
        flashcard: async (_, { id }, context) => {
            console.log("before ifffffffffffffffffffffffff");
            if(context.user){
            return await Flashcard.findById(id).populate("user");
            }
            throw AuthenticationError;
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return Profile.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
          },
    },

    Mutation: {
        addUser: async (_, {name, email, password}) =>{
            const user = new User({name, email, password});
            await user.save();
            const token = signToken(user);
            console.log( "this is the added user", {token, user});
            return { token, user };
        },
        addFlashcard: async (_, {question, answer, userId}, context) =>{ 
            console.log( "this is outside the if staatment", context.user._id);
            if (context.user){
                console.log( "this is indise  the if staatment", context.user);

            const flashcard = new Flashcard({question, answer, user: context.user._id});
            await flashcard.save();

            await User.findByIdAndUpdate(context.user._id, { $push: { flashcards: flashcard._id } });

            return flashcard;
            }

            throw AuthenticationError;
        },
    },

    User: {
        flashcards: async (parent) => {
            return await Flashcard.find({ user: parent.id });
        }
    },
    
};

module.exports = resolvers;