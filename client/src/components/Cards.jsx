import Card from "./Card";
import { PropTypes } from "prop-types";

export default function Cards({ movies }) {
  console.log("Movies: ", movies);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies?.map((movie) => (
        <div key={movie._id}>
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
}

Cards.propTypes = {
  movies: PropTypes.array.isRequired,
};
