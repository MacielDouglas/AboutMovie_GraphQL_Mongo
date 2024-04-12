import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { SEARCHING } from "../graphql/queries/movie.query";
import MovieItem from "../components/MovieItem";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import toTop from "../assets/backToTop.svg";

export default function Search() {
  // const params = useParams();
  const location = useLocation();
  const [titleInput, setTitleInput] = useState("");
  const [castInput, setCastInput] = useState("");
  const [directorInput, setDirectorInput] = useState("");
  const [genresInput, setGenresInput] = useState("");

  const [sidebarData, setSidebarData] = useState({
    title: "",
    cast: "",
    director: "",
    genres: "",
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.toString().split("=")[0];
    const message = queryParams
      .toString()
      .slice(queryParams.toString().indexOf("=") + 1)
      .replace(/\+/g, " ");

    if (type === "title" && type.title !== "") {
      setSidebarData({ title: message });
    }
  }, [location.search]);

  const { data, loading, error } = useQuery(SEARCHING, {
    variables: {
      cast: sidebarData.cast,
      genres: sidebarData.genres,
      directors: sidebarData.director,
      title: sidebarData.title,
    },
  });

  const [showScrollButton, setShowScrollButton] = useState(false);

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

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === "title") {
      setTitleInput(e.target.value);
    }
    if (e.target.id === "cast") {
      setCastInput(e.target.value);
    }
    if (e.target.id === "director") {
      setDirectorInput(e.target.value);
    }
    if (e.target.id === "genres") {
      setGenresInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("cast", castInput);
    urlParams.set("title", titleInput);
    urlParams.set("director", directorInput);
    urlParams.set("genres", genresInput);

    setSidebarData({
      cast: castInput,
      title: titleInput,
      director: directorInput,
      genres: genresInput,
    });
  };

  if (loading) return <Loading />;
  if (error) return <h1>Error...</h1>;

  let movies = data ? data.filterMovies : [];
  return (
    <div className="container mx-auto px-4  text-zinc-400 mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:border-r border-gray-200 pb-4 ">
          <form className="space-y-4 mr-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="searchTitle" className="block font-semibold">
                Search title:
              </label>
              <input
                type="text"
                id="title"
                placeholder="Search title..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                value={titleInput}
                onChange={handleChange}
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
                value={castInput}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="searchDirector" className="block font-semibold">
                Search director:
              </label>
              <input
                type="text"
                id="director"
                placeholder="Search cast..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                value={directorInput}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="font-semibold">Genres filter:</label>
              <select
                defaultValue={"all"}
                id="genres"
                className="border rounded-lg p-3"
                onChange={handleChange}
                value={genresInput}
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
        {showScrollButton && (
          <button onClick={scrollToTop} type="button">
            <img
              src={toTop}
              alt="Scroll Button"
              className="fixed bottom-6 right-6 h-12 md:right-12 md:bottom-10 md:h-10  hover:h-12 hover:cursor-pointer "
            />
          </button>
        )}
      </div>
    </div>
  );
}
