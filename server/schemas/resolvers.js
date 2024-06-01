const { gql } = require("@apollo/server");

const typeDefs = gql`
type User {
    id: ID!
    name: String!
    email: String!
}

type Flashcard {
    id: ID!
    question: String!
    answer: String!
}

type Query {
    users: [User]
    user(id: ID!): User
    flashcards: [Flashcard]
    flashcard(id: ID!): Flashcard
}

type Mutation {
    addUser(name: String!, email: String!): User
    addFlashcard(question: String!, answer: String!): Flashcard
}
`;

module.exports = typeDefs;