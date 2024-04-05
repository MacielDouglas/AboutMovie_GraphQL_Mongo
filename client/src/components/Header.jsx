import { useState } from "react";
import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  return (
    <header className="shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="flex items-center">
          <p>Movie</p>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {/* {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline">Login</li>
            )} */}
            <li className="text-slate-700 hover:underline">Login</li>
          </Link>
        </ul>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Pesquisar..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <p>Enviar</p>
            {/* <FaSearch className="text-slate-600" /> */}
          </button>
        </form>
      </div>
    </header>
  );
}
