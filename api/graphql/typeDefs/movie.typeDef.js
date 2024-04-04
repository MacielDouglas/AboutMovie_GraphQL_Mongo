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

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    filterMovies(genres: [String], cast: [String], director: [String]): [Movie]
  }
`;

export default movieTypeDef;
