import { gql } from "@apollo/client";


export const QUERY_GETUSER = gql`
query getUser($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
      password
      flashcards {
        id
        question
        answer
      }
    }
  }
`;

