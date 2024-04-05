import { useQuery } from "@apollo/client";
import { MOVIES } from "../graphql/queries/movie.query";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

export default function Home() {
  const { data, loading } = useQuery(MOVIES);

  if (loading) return <Loading />;

  return (
    <div className="max-w-6xl mx-auto max-w-4xl text-center ">
      <Cards movies={data?.movies} />
    </div>
  );
}
