import { useState } from "react";
import { Link } from "react-router-dom";
import movie from "../assets/AboutMovie.svg";
import searchIcon from "../assets/search.svg";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
    // Redirecionar para a página de resultados de pesquisa
    // history.push(`/search?term=${searchTerm}`);
  };

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
        <ul className="hidden sm:flex gap-8 font-medium text-lg text-gray-200">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:underline-offset-8">About</li>
          </Link>
          <Link to="/profile">
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
          <div className="bg-white p-6 rounded-lg md:w-1/2 h-full sm:w-1/2">
            <form onSubmit={handleSubmit} className="flex items-center mb-6">
              <input
                type="text"
                placeholder="Search movie..."
                className="bg-transparent focus:outline-none w-full mr-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">
                <img src={searchIcon} alt="search" className="w-6" />
              </button>
            </form>
            <ul className="flex flex-col gap-4 font-poppins text-xl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/profile">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
