import { gql } from "@apollo/client";

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      username
      email
      token
      isAdmin
    }
  }
`;

export const LOGOUT = gql`
  query Logout {
    logoutUser {
      message
      success
    }
  }
`;
