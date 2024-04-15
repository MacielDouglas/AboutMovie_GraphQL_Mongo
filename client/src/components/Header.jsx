import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import movie from "../assets/AboutMovie.svg";
// import searchIcon from "../assets/search.svg";

export default function Header() {
  // const path = useLocation().pathname;
  // const location = useLocation();
  // const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(location.search);
  //   const searchTermFromUrl = urlParams.get("title");
  //   if (searchTermFromUrl) {
  //     setSearchTerm(searchTermFromUrl);
  //   }
  // }, [location.search]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const urlParams = new URLSearchParams(window.location.search);
  //   urlParams.set("title", searchTerm);
  //   const searchQuery = urlParams.toString();
  //   navigate(`/search?${searchQuery}`);
  // };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-gradient-to-t from-slate-950 to-transparent shadow h-20 z-20 relative font-poppins">
      <div className="flex justify-between items-center h-full mx-4 max-w-6xl xl:mx-auto">
        <Link to="/" className="flex items-center">
          <img src={movie} alt="About Movie" className="w-10" />
        </Link>

        {/* Ícone de menu hamburguer para dispositivos móveis */}
        <div className="sm:hidden">
          <button onClick={toggleModal}>
            <svg
              className="w-6 h-6 cursor-pointer text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu para desktop */}
        {/* <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg items-center hidden sm:block"
        >
          <input
            type="text"
            placeholder="Search Title..."
            className="bg-transparent focus:outline-none  w-20 sm:w-40 lg:w-52 xl:w-64 lg:inline"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="w-5 h-5 ">
            <img src={searchIcon} alt="search button" />
          </button>
        </form> */}
        <ul className="hidden sm:flex gap-8 font-medium text-lg text-gray-200">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:underline-offset-8">About</li>
          </Link>
          <Link to="/search">
            <li className="hover:underline-offset-8">Search</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>

      {/* Modal para dispositivos móveis */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex  justify-end"
          onClick={toggleModal}
        >
          <div className="bg-white p-6 rounded-l-lg  h-full w-1/2 flex justify-center">
            <ul className="flex flex-col gap-4 font-poppins text-xl w-full">
              <li>
                <Link to="/">Home</Link>
              </li>
              <hr />
              <li>
                <Link to="/about">About</Link>
              </li>
              <hr />
              <li>
                <Link to="/search">Search</Link>
              </li>
              <hr />
              <li className="text-center">
                <Link to="/login" className="hover:font-semibold">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
