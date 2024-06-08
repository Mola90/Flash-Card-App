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

type Auth {
    token: ID!
    user: User
}

type AuthPayload {
    token: String!
    user: User!
}

type Query {
    users: [User]
    user(id: ID!): User
    userByEmail(email: String!): AuthPayload
    flashcards: [Flashcard]
    flashcard(id: ID!): Flashcard
    me: User
}

type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addFlashcard(question: String!, answer: String!, userId: ID!): Flashcard
}
`;

export default typeDefs;