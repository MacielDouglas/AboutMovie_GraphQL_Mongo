import { Link } from "react-router-dom";
import movie from "../assets/AboutMovie.svg";
import { BsEnvelope, BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="border border-t-8 border-slate-400 mt-14 bg-slate-700 text-slate-200 pb-10 w-full">
      <div className="max-w-6xl xl:mx-auto mx-10 sm:mx-20 ">
        <div className="mt-16">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold flex items-baseline"
          >
            <img className="w-7" src={movie} alt="image logo" />
            <span className="px-3 mr-1 py-1  text-slate-200 font-nothing_you text-2xl">
              About Movie
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:justify-between my-10 lg:mx-3 font-roboto text-slate-400">
          <div className="flex flex-col gap-2">
            <p className="font-poppins font-medium text-stone-300">ABOUT</p>
            <Link
              to="https://macield.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-200"
            >
              My Portfolio
            </Link>
          </div>
          <hr />
          <div>
            <p className="font-poppins font-medium text-stone-300">FOLLOW US</p>
            <Link
              className="hover:text-stone-200"
              to="https://github.com/MacielDouglas"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
          <hr />

          <div className="flex flex-col">
            <p className="mb-2 font-poppins font-medium text-stone-300">
              DISCOVER MY PROJECTS{" "}
            </p>
            <div className="flex flex-col gap-2">
              <Link
                to="https://imobiliaria-olinda.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-200"
              >
                Olinda Imóveis
              </Link>
              <Link
                to="https://cafe-bourbon.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-200"
              >
                {" "}
                Café Bourbon
              </Link>
              <Link
                to="https://olibike.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-200"
              >
                {" "}
                #Olibike
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-10 md:flex-row md:justify-between my-10 lg:mx-3">
          <div className="flex gap-2">
            <p>
              © {`${new Date().getFullYear()}`}{" "}
              <Link
                to="https://macield.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-100"
              >
                Maciel D.
              </Link>
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-center text-wrap">
              About Films, is a fictional film information website. Study
              project to apply the use of GraphQL.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="https://github.com/MacielDouglas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-500"
            >
              <BsGithub className="text-2xl" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/douglas-maciel-4943461b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-500"
            >
              <BsLinkedin className="text-2xl" />
            </Link>
            <Link
              to="https://twitter.com/Maciel_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-500"
            >
              <BsTwitterX className="text-2xl" />
            </Link>
            <Link
              to="mailto:maciel.d.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-500"
            >
              <BsEnvelope className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
