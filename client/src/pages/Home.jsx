import { useQuery } from "@apollo/client";
import { MOVIES } from "../graphql/queries/movie.query";
import Cards from "../components/Cards";

export default function Home() {
  const { data, loading } = useQuery(MOVIES);

  if (loading) <h1>Loading....</h1>;

  return (
    <div className="max-w-6xl mx-auto">
      {data === undefined ? (
        <h1 className="text-slate-800 text-3xl">Loading....</h1>
      ) : (
        <Cards movies={data?.movies} />
      )}
    </div>
  );
}
