import { gql } from "@apollo/client";

export const MOVIES = gql`
  query MOVIES($page: Int, $pageSize: Int) {
    movies(page: $page, pageSize: $pageSize) {
      _id
      title
      plot
      poster
      cast
      fullplot
      genres
      runTime
      year
      languages
      directors
      released
      countries
      type
      # awards {
      #   text
      #   wins
      #   nominations
      # }
      imdb {
        rating
        votes
        id
      }
    }
  }
`;

export const MOVIE = gql`
  query ONEMOVIE($movieId: ID!) {
    movie(id: $movieId) {
      _id
      title
      plot
      genres
      poster
      cast
      runTime
      fullplot
      languages
      released
      directors
      writers
      year
      awards {
        text
      }
      imdb {
        votes
        rating
      }
      num_mflix_comments
    }
  }
`;

export const SEARCHING = gql`
  query SEARCH(
    $cast: [String]
    $genres: [String]
    $directors: [String]
    $title: [String]
  ) {
    filterMovies(
      cast: $cast
      genres: $genres
      director: $directors
      title: $title
    ) {
      _id
      title
      genres
      cast
      directors
      plot
      poster
    }
  }
`;
