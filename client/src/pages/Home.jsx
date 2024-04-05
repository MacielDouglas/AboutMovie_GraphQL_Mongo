import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { MOVIES } from "../graphql/queries/movie.query";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import WelcomeSection from "../components/WelcomeSection";
import toTop from "../assets/backToTop.svg";

export default function Home() {
  const { data, loading, error } = useQuery(MOVIES);
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
      <WelcomeSection movies={data?.movies} />
      <div className="max-w-6xl mx-auto mt-36">
        <Cards movies={data?.movies} />
      </div>
      {showScrollButton && (
        <div>
          <img
            src={toTop}
            alt=""
            className="fixed bottom-10 right-10 h-16 sm:h-20 hover:h-16 hover:cursor-pointer"
            onClick={scrollToTop}
          />
        </div>
      )}
    </div>
  );
}
