import { gql } from "@apollo/client";

export const NEW_MOVIE = gql`
  mutation NewMovie($input: NewMovieInput!) {
    newMovie(input: $input) {
      title
      plot
      languages
    }
  }
`;
