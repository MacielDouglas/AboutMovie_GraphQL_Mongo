import { useState } from "react";
import { Link } from "react-router-dom";
import movie from "../assets/AboutMovie.svg";
import search from "../assets/search.svg";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  return (
    <header className="bg-transparent z-20 relative">
      <div className="flex justify-between mx-4 items-center max-w-6xl xl:mx-auto my-6">
        <Link to="/" className="flex items-center">
          <img src={movie} alt="About Movie" className="w-10" />
        </Link>

        <form
          onSubmit={handleSubmit}
          className="p-2 rounded-lg flex items-center border border-zinc-200"
        >
          <input
            type="text"
            placeholder="Search movie..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <img src={search} alt="search image" className="w-5" />
          </button>
        </form>

        <ul className="flex gap-8 font-medium text-lg text-gray-200">
          <Link to="/">
            <li className="hidden sm:inline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline-offset-8">About</li>
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
            <li className=" ">Login</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
