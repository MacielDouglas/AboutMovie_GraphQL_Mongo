import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SEARCHING } from "../graphql/queries/movie.query";
import MovieItem from "../components/MovieItem";
import Loading from "../components/Loading";

export default function Search() {
  const params = useParams();
  const { data, loading, error } = useQuery(SEARCHING, {
    variables: {
      cast: params.cast === "null" ? null : params.cast,
      genres: params.genres === "null" ? null : params.genres,
      directors: params.directors === "null" ? null : params.directors,
    },
  });

  if (loading) return <Loading />;
  if (error) return <h1>Error...</h1>;

  let movies = data ? data.filterMovies : [];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:border-r border-gray-200 pb-4">
          <form className="space-y-4">
            <div>
              <label htmlFor="searchCast" className="block font-semibold">
                Search cast:
              </label>
              <input
                type="text"
                id="searchCast"
                placeholder="Search cast..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="searchDirector" className="block font-semibold">
                Search director:
              </label>
              <input
                type="text"
                id="searchDirector"
                placeholder="Search director..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="genres" className="block font-semibold">
                Filtrar:
              </label>
              <select
                defaultValue={"all"}
                id="genres"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All</option>
                <option value="Action">Action</option>
                {/* Adicione as opções restantes aqui */}
              </select>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Pesquisar
            </button>
          </form>
        </div>

        <div className="col-span-1 lg:col-span-3">
          <h1 className="text-3xl font-semibold border-b-2 pb-2 mb-4">
            Found: {movies.length} results
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
            {loading && <p className="text-xl text-center">Procurando...</p>}
            {!loading && movies.length === 0 && (
              <p className="text-xl text-center text-gray-700">
                Sem resultado, tente novamente!!!
              </p>
            )}
            {!loading &&
              movies.length > 0 &&
              movies.map((movie) => (
                <MovieItem key={movie._id} movie={movie} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
