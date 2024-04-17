const movieTypeDef = `#graphql

type Movie {
  _id: ID!
    title: String
    plot: String
    fullplot: String
    genres: [String]
    rated: String
    year: Int
    imdb: IMDB
    metacritic: Int
    languages: [String]
    writers: [String]
    type: String
    tomatoes: Tomatoes
    poster: String
    num_mflix_comments: Int
    released: Date
    awards: Awards
    countries: [String]
    cast: [String]
    directors: [String]
    runTime: Int
  }

  type IMDB {
    rating: Float
    votes: Int
    id: Int
  }

  type Tomatoes {
    website: String
    viewer: TomatoesViewer
    dvd: Date
    critic: TomatoesCritic
    boxOffice: String
    consensus: String
    rotten: Int
    production: String
    lastUpdated: Date
    fresh: Int
  }

  type TomatoesViewer {
    rating: Float
    numReviews: Int
    meter: Int
  }

  type TomatoesCritic {
    rating: Float
    numReviews: Int
    meter: Int
  }

  type Awards {
    wins: Int
    nominations: Int
    text: String
  }

  scalar Date

  input NewMovieInput {
    title: String!
    plot: String!
    fullplot: String
    genres: [String]
    rated: String
    year: Int
    imdb: IMDBInput
    metacritic: Int
    languages: [String]
    writers: [String]
    type: String
    tomatoes: TomatoesInput
    poster: String!
    num_mflix_comments: Int
    released: String
    awards: AwardsInput
    countries: [String]
    cast: [String]!
    directors: [String]!
    runtime: Int
  }

  input IMDBInput {
    rating: Float
    votes: Int
    id: Int
  }

  input TomatoesInput {
    website: String
    viewer: ViewerInput
    dvd: String
    critic: CriticInput
    boxOffice: String
    consensus: String
    rotten: Int
    production: String
    lastUpdated: String
    fresh: Int
  }

  input ViewerInput {
    rating: Float
    numReviews: Int
    meter: Int
  }

  input CriticInput {
    rating: Float
    numReviews: Int
    meter: Int
  }

  input AwardsInput {
    wins: Int
    nominations: Int
    text: String
  }

  type Query {
    movies(page: Int, pageSize: Int): [Movie]
    movie(id: ID!): Movie
    filterMovies(genres: [String], cast: [String], director: [String], title: [String]): [Movie]
  }
  type Mutation {
    newMovie(input: NewMovieInput!): Movie!
  }
`;

export default movieTypeDef;
