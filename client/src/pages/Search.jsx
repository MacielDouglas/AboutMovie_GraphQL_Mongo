import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { SEARCHING } from "../graphql/queries/movie.query";
import MovieItem from "../components/MovieItem";
import Loading from "../components/Loading";
import toTop from "../assets/backToTop.svg";
import useEffectOnce from "../hooks/useEffectOnce";

export default function Search() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [searchParams, setSearchParams] = useState({
    title: queryParams.get("title") || "",
    cast: queryParams.get("cast") || "",
    directors: queryParams.get("directors") || "",
    genres: queryParams.get("genres") || "",
  });

  // Consulta que é executada apenas quando o componente é montado
  const {
    data: immediateData,
    loading: immediateLoading,
    error: immediateError,
  } = useQuery(SEARCHING, {
    variables: searchParams,
  });

  // Consulta que é executada apenas quando é chamada explicitamente
  const [
    searchMovies,
    { data: lazyData, loading: lazyLoading, error: lazyError },
  ] = useLazyQuery(SEARCHING);

  // Executar a consulta apenas uma vez quando o componente é montado
  useEffectOnce(() => {
    searchMovies({ variables: searchParams });
  });

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

  const handleSearch = () => {
    const urlParams = new URLSearchParams();
    searchMovies({
      variables: searchParams,
    });
    urlParams.set("title", searchParams.title);
    urlParams.set("cast", searchParams.cast);
    urlParams.set("directors", searchParams.director);
    urlParams.set("genres", searchParams.genres);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div className="container mx-auto px-4 text-zinc-400 mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:border-r border-gray-200 pb-4">
          <form
            className="space-y-4 mr-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <div>
              {" "}
              <label htmlFor="searchTitle" className="block font-semibold">
                {" "}
                Search title:
              </label>
              <input
                type="text"
                id="title"
                placeholder="Search title..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                value={searchParams.title}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="searchCast" className="block font-semibold">
                Search cast:
              </label>
              <input
                type="text"
                id="cast"
                placeholder="Search cast..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                value={searchParams.cast}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    cast: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="searchDirector" className="block font-semibold">
                Search director:
              </label>
              <input
                type="text"
                id="director"
                placeholder="Search director..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                value={searchParams.directors}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    directors: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="font-semibold">Genres filter:</label>
              <select
                id="genres"
                className="border rounded-lg p-3"
                value={searchParams.genres}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    genres: e.target.value,
                  })
                }
              >
                <option value="">All</option>
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
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Search
            </button>
          </form>
        </div>

        <div className="col-span-1 lg:col-span-3">
          <h1 className="text-3xl font-semibold border-b-2 pb-2 mb-4 text-zinc-400">
            Found: {lazyData ? lazyData.filterMovies.length : 0} results
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
            {lazyLoading && <Loading />}
            {lazyError && <p>Error: {lazyError.message}</p>}
            {!lazyLoading &&
              lazyData &&
              lazyData.filterMovies.map((movie) => (
                <MovieItem key={movie._id} movie={movie} />
              ))}
          </div>
        </div>
        {showScrollButton && (
          <button onClick={scrollToTop} type="button">
            <img
              src={toTop}
              alt="Scroll Button"
              className="fixed bottom-6 right-6 h-12 md:right-12 md:bottom-10 md:h-10 hover:h-12 hover:cursor-pointer"
            />
          </button>
        )}
      </div>
    </div>
  );
}
