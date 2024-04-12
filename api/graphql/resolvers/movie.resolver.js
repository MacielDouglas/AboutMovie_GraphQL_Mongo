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
    movies: async (page = 1, pageSize = 12) => {
      try {
        const skip =
          (parseInt(pageSize.page) - 1) * parseInt(pageSize.pageSize);

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
          .skip(skip)
          .limit(pageSize.pageSize)
          .exec();

        return movies;
      } catch (error) {
        throw new Error(`Erro ao buscar os filmes: ${error.message}`);
      }
    },
    filterMovies: async (_, { genres, cast, director, title }) => {
      genres = genres && genres[0].trim() === "" ? null : genres;
      cast = cast && cast[0].trim() === "" ? null : cast;
      title = title && title[0].trim() === "" ? null : title;
      director = director && director[0].trim() === "" ? null : director;

      const filter = {};
      filter.genres = { $nin: ["Horror"], $ne: null };
      filter.poster = { $ne: null };
      filter.plot = { $ne: null };

      // Convertendo o título
      if (title) {
        const formattedTitle = title[0]
          .toLowerCase()
          .split(" ")
          .map((word, index) => {
            if (word !== "of" || index === 0) {
              return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
              return word;
            }
          })
          .join(" ");

        filter.title = formattedTitle;
      }
      if (cast) {
        const formattedCast = cast.map((name) => {
          return name
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        });

        filter.cast = { $in: formattedCast, $ne: null };
      }
      console.log(filter.cast);
      if (director) {
        const formattedDirector = director.map((name) => {
          return name
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        });
        console.log(director);

        filter.directors = { $in: formattedDirector, $ne: null };
      }

      if (genres) filter.genres = { $in: genres, $nin: ["Horror"], $ne: null };
      filter.fullplot = {
        $not: {
          $regex: /(sex|sexy|sexual|sexually|lesbian)/i,
        },
      };
      return await Movie.find(filter).sort({ "imdb.rating": -1 }).limit(100);
    },
  },
};

export default movieResolver;
