import { useState } from "react";
import { Link } from "react-router-dom";
import movie from "../assets/AboutMovie.svg";
import { useAuth } from "../hooks/AuthProvider";

export default function Header() {
  const { isLoggedIn, logOff, user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  console.log(user);

  return (
    <header className="bg-gradient-to-t from-slate-950 to-slate-700 shadow h-20 z-20 relative font-poppins">
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
            <li className="hover:text-gray-500">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-gray-500">About</li>
          </Link>
          <Link to="/search">
            <li className="hover:text-gray-500">Search</li>
          </Link>
          {isLoggedIn ? (
            <>
              <p>{user?.username}</p>
              <button
                onClick={logOff}
                className="text-red-500 hover:text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <li className="hover:text-gray-500">Login</li>
            </Link>
          )}
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
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/search" className="hover:underline">
                  Search
                </Link>
              </li>
              <hr />
              {isLoggedIn ? (
                <>
                  <p>{user?.username}</p>
                  <hr />
                  <button
                    onClick={logOff}
                    className="text-red-500 hover:text-red-400"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login">
                  <li className="hover:underline">Login</li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
