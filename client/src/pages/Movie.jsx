import { Link, useParams } from "react-router-dom";
import { MOVIE } from "../graphql/queries/movie.query";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";

export default function Movie() {
  const params = useParams();
  const { data, loading, error } = useQuery(MOVIE, {
    variables: {
      movieId: params.movieId,
    },
  });

  if (loading) return <Loading />;
  if (error) return <h1>Error: {error.message}</h1>;
  const { movie } = data;

  return (
    <div className="max-w-6xl mx-6 flex flex-col mt-10 xl:mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex justify-center mb-8 lg:mb-0">
          <img
            className="max-h-[600px] justify-center rounded-lg drop-shadow-3xl"
            src={movie.poster}
            alt={`movie image: ${movie.title}`}
          />
        </div>
        <div className="flex-1 flex flex-col  gap-3 text-stone-400">
          <h1 className="text-center text-6xl font-bold p-5 mb-4 text-stone-500">
            {movie.title}
          </h1>
          <h6 className="text-neutral-400 text-2xl">{movie.fullplot}</h6>
          <p>{movie.director}</p>
          <div>
            <ul className="flex flex-row gap-2">
              Cast:
              {movie.cast.map((cast) => (
                <li key={cast}>
                  <Link to={`/search/${cast}/${null}/${null}`}>{cast}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-row gap-4">
              {" "}
              Genres:
              {movie.genres?.map((genre) => (
                <li key={genre}>
                  <Link to={`/search/${null}/${null}/${genre}`}>{genre}</Link>
                </li>
              ))}
            </ul>
          </div>
          <p>{movie.year}</p>
          <p>{movie.awards[2]}</p>

          <ul className="flex flex-row gap-4">
            director:
            {movie.directors?.map((director) => (
              <li key={director}>
                <Link to={`/search/${null}/${director}/${null}`}>
                  {director}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
