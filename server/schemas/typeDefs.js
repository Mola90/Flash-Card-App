const { gql } = require("graphql-tag");

const typeDefs = gql`
type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    flashcards: [Flashcard]
}

type Flashcard {
    id: ID!
    question: String!
    answer: String!
    user: User
}

type Query {
    users: [User]
    user(id: ID!): User
    userByEmail(email: String!): User
    flashcards: [Flashcard]
    flashcard(id: ID!): Flashcard
}

type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    addFlashcard(question: String!, answer: String!, userId: ID!): Flashcard
}
`;

module.exports = typeDefs;