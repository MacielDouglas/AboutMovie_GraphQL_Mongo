import { Link } from "react-router-dom";
import slugify from "slugify";

export default function MovieItem({ movie }) {
  const movieSlug = slugify(movie.title, { lower: true });
  const defaultPoster =
    "https://cdn-icons-png.flaticon.com/512/1695/1695213.png";

  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] font-roboto">
      <Link to={`/movie/${movieSlug}/${movie._id}`}>
        <img
          src={movie.poster || defaultPoster}
          alt={movie.title}
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
          onError={(e) => {
            e.target.src = defaultPoster;
          }}
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700 font-poppins">
            {movie.title}
          </p>
          <div className="flex items-center gap-1">
            <p className="text-sm text-gray-600 truncate w-full">
              {movie.plot}
            </p>
          </div>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs">
              <ul className="flex gap-2">
                {movie?.genres.map((mv) => (
                  <li key={mv}>{mv}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
