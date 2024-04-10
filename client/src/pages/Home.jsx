import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { MOVIES } from "../graphql/queries/movie.query";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import WelcomeSection from "../components/WelcomeSection";
import toTop from "../assets/backToTop.svg";

export default function Home() {
  const { loading, error, data, fetchMore } = useQuery(MOVIES, {
    variables: { page: 1, pageSize: 12 },
  });

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data) {
      setMovies(data.movies);
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const loadMoreMovies = () => {
    fetchMore({
      variables: { page: page + 1, pageSize: 12 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          movies: [...prev.movies, ...fetchMoreResult.movies],
        };
      },
    })
      .then((result) => {
        setMovies(result.data.movies.slice((page - 1) * 12, page * 12));
        setPage(page + 1);
      })
      .catch((error) => {
        console.error("Error loading more movies:", error);
      });
  };
  if (loading) return <Loading />;
  if (error)
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-3xl font-semibold p-10 m-10">
          Error loading movies, please try again later
        </h1>
      </div>
    );
  return (
    <div className="-mt-24">
      <WelcomeSection movies={movies} />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-poppins text-slate-500 mt-24 mb-12 text-center">
          Top rated films
        </h1>
        <Cards movies={movies} />
        <div className="flex justify-center my-8">
          <button
            onClick={loadMoreMovies}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      </div>
      {showScrollButton && (
        <button onClick={scrollToTop} type="button">
          <img
            src={toTop}
            alt="Scroll Button"
            className="fixed bottom-6 right-2 h-12 md:right-12 md:bottom-10 md:h-10  hover:h-12 hover:cursor-pointer "
          />
        </button>
      )}
    </div>
  );
}
