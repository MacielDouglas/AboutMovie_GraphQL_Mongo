import Movie from "../../models/movie.models.js";

const movieResolver = {
  Query: {
    movie: async (_, { id }) => {
      try {
        const movie = await Movie.findOne({ _id: id }).exec();
        if (!movie) {
          throw new Error("Movie not found");
        }
        return movie;
      } catch (error) {
        throw new Error(`Error getting movie: ${error.message}`);
      }
    },

    movies: async () => {
      try {
        const movies = await Movie.find({
          poster: { $ne: null },
          title: { $not: { $regex: /sexual/i } },
          genres: { $not: { $elemMatch: { $eq: "Horror" } } },
          $or: [
            {
              "awards.text": { $in: [/Oscar/i, /oscar/i] },
              "awards.nominations": { $gt: 0 },
            },
            { awards: { $exists: false } },
          ],
        })
          .sort({ "imdb.rating": -1 })
          .limit(100)
          .exec();
        return movies;
      } catch (error) {
        throw new Error(`Erro ao buscar os filmes: ${error.message}`);
      }
    },

    filterMovies: async (_, { genres, cast, director }) => {
      const filter = {};
      filter.genres = { $nin: ["Horror"], $ne: null };
      filter.poster = { $ne: null };
      filter.plot = { $ne: null };

      if (cast || director) {
        if (cast) filter.cast = { $in: cast, $ne: null };
        if (director) filter.directors = { $in: director };
      }
      if (genres) filter.genres = { $in: genres, $nin: ["Horror"], $ne: null };
      return await Movie.find(filter).sort({ "imdb.rating": -1 }).limit(100);
    },
  },
};

export default movieResolver;
