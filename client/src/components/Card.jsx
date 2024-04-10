import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import slugify from "slugify";

export default function Card({ movie }) {
  const [shortenedPlot, setShortenedPlot] = useState(movie.plot);
  const [shortenedTitle, setShortenedTitle] = useState(movie.title);
  const defaultPoster =
    "https://cdn-icons-png.flaticon.com/512/1695/1695213.png";

  useEffect(() => {
    if (movie.plot.length > 100) {
      setShortenedPlot(movie.plot.substring(0, 90) + "...");
    } else {
      setShortenedPlot(movie.plot);
    }

    if (movie.title.length > 22) {
      setShortenedTitle(movie.title.substring(0, 22) + "...");
    } else {
      setShortenedTitle(movie.title);
    }
  }, [movie.plot, movie.title]);

  const movieSlug = slugify(movie.title, { lower: true });

  return (
    <Link className="h-[560px]" to={`/movie/${movieSlug}/${movie._id}`}>
      <div className="relative w-full h-[380px] bg-gradient-to-t from-neutral-600 to-neutral-100 text-stone-900 shadow-md rounded-lg overflow-hidden flex flex-col group">
        <img
          src={movie.poster || defaultPoster}
          alt={movie.title}
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
          onError={(e) => {
            e.target.src = defaultPoster;
          }}
        />
        <div className="p-4 flex-1 relative z-20">
          <h5 className="text-lg font-semibold transition-all duration-300 group-hover:block font-poppins">
            {shortenedTitle}
          </h5>
          <p className="text-sm mb-2 transition-all duration-300 group-hover:hidden  font-roboto">
            {shortenedPlot}
          </p>
          <div className="flex justify-between group-hover:hidden  font-roboto">
            <p className="text-sm">{movie.year}</p>
            <p className="text-sm">Rating: {movie.imdb.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  movie: PropTypes.object.isRequired,
};
