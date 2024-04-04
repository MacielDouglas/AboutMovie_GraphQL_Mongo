import mongoose from "mongoose";

// Definindo o esquema do filme
const movieSchema = new mongoose.Schema({
  title: String,
  plot: String,
  fullplot: String,
  genres: [String],
  rated: String,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  metacritic: Number,
  languages: [String],
  writers: [String],
  type: String,
  tomatoes: {
    website: String,
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    dvd: Date,
    critic: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    boxOffice: String,
    consensus: String,
    rotten: Number,
    production: String,
    lastUpdated: Date,
    fresh: Number,
  },
  poster: String,
  num_mflix_comments: Number,
  released: Date,
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  countries: [String],
  cast: [String],
  directors: [String],
  runtime: Number,
});

// Criando o modelo "Movie" com o esquema definido
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
