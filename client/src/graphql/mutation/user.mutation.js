import { gql } from "@apollo/client";

export const NEW_USER = gql`
  mutation NewUser($username: String!, $email: String!, $password: String!) {
    registerUser(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`;
