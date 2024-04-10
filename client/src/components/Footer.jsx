import { Link } from "react-router-dom";
import movie from "../assets/AboutMovie.svg";

export default function Footer() {
  return (
    <footer className="mt-14 bg-slate-700 text-slate-200">
      <div className="flex flex-wrap gap-4 justify-center items-center max-w-7xl mx-auto p-20 md:justify-between">
        <Link to="/" className="">
          <img className="w-14" src={movie} alt="image logo" />
        </Link>
        <p className="text-center text-wrap">
          About Films, is a fictional website that shows the main films up to
          the year 2015. <br />A study project to apply the use of GraphQL.{" "}
          <br />
          developed by Maciel D.
        </p>
        <p>
          Discover my other projects <br />
          <a href="https://olibike.web.app/">#OliBike</a> |{" "}
          <a href="https://cafe-bourbon.web.app/">Café Bourbon</a> |{" "}
          <a href="https://dogsapp-c4d5b.web.app/">Dog´s App</a>
        </p>
      </div>
    </footer>
  );
}
