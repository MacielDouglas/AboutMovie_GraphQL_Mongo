import { gql } from "@apollo/client";

export const COMMENTS = gql`
  query Comment($commentId: ID!, $year: Int!) {
    comment(id: $commentId, year: $year) {
      name
      text
      date
    }
  }
`;
