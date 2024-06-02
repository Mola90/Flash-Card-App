import { gql } from "@apollo/client";

export const CREATE_USER = gql`mutation createUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

export const CREATE_QUESTION = gql`mutation Mutation($question: String!, $answer: String!, $userId: ID!) {
    addFlashcard(question: $question, answer: $answer, userId: $userId) {
      question
      answer
      id
    }
  }
`;