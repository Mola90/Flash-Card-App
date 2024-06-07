import { gql } from "@apollo/client";



export const CREATE_USER = gql`
mutation createUser($name: String!, $email: String!, $password: String!) {
  addUser(name: $name, email: $email, password: $password) {
    token
    user {
      id
      name
      email
      password
    }
  }
}
`;

export const CREATE_FLASHCARD = gql`
mutation AddFlashcard($question: String!, $answer: String!, $userId: ID!) {
    addFlashcard(question: $question, answer: $answer, userId: $userId) {
      id  
      question
      answer      
    }
  }
`;