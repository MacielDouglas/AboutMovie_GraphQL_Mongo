import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SEARCHING } from "../graphql/queries/movie.query";
import MovieItem from "../components/MovieItem";

export default function Search() {
  const params = useParams();
  const { data, loading, error } = useQuery(SEARCHING, {
    variables: {
      cast: params.cast === "null" ? null : params.cast,
      genres: params.genres === "null" ? null : params.genres,
      directors: params.directors === "null" ? null : params.directors,
    },
  });
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error...</h1>;
  let movies = "";
  if (data) movies = data.filterMovies;
  console.log(movies);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search cast:
            </label>
            <input
              type="text"
              id="searchCast"
              placeholder="Search cast..."
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search director:
            </label>
            <input
              type="text"
              id="searchDirector"
              placeholder="Search director..."
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Filtrar:</label>
            <select
              //   onChange={handleChange}
              defaultValue={"all"}
              id="genres"
              className="border rounded-lg p-3"
            >
              <option value="all">All</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Biography">Biography</option>
              <option value="Crime">Crime</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Documentary">Documentary</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Family">Family</option>
              <option value="Musical">Musical</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Short">Short</option>
              <option value="Thriller">Thriller</option>
              <option value="War">War</option>
              <option value="Western">Western</option>
            </select>
          </div>
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Pesquisar
          </button>
        </form>
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Found: {movies ? movies?.length : 0} results
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {!loading && movies.length === 0 && (
            <p className="text-xl text-slate-700">
              Sem resultado, tente novamente!!!
            </p>
          )}
          {loading && (
            <p className="text-xl text-slate-700 text-center w-full">
              Procurando...
            </p>
          )}

          {!loading &&
            movies &&
            movies.map((movie) => <MovieItem key={movie._id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
}
