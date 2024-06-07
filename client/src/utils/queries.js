import { gql } from "@apollo/client";


// export const QUERY_GETUSER = gql`
// query getUserByEmail($email: String!) {
//   userByEmail(email: $email) {
//     id
//     name
//     email
//     password
//     flashcards {
//       id
//       question
//       answer
//     }
//   }
// }
// `;
export const QUERY_GETUSER = gql`
query getUserByEmail($email: String!) {
  userByEmail(email: $email) {
    token
    user {
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
}
`;

export const GET_FLASHCARDS = gql`
  query GetFlashcards {
    flashcards {
      id
      question
      answer
    }
  }
`;
