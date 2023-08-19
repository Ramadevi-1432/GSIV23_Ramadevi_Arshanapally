import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MoviesContainer = ({ searchResults }) => {
  const results = searchResults?.map((movie) => (
    <Link to={"/" + movie?.id} key={movie?.id}>
      <MovieCard movie={movie} />
    </Link>
  ));

  return results.length === 0 ? (
    <h2 className="text-center">Sorry, no results found</h2>
  ) : (
    <div>
      <div className="flex flex-wrap m-2 p-2">{results}</div>
    </div>
  );
};

export default MoviesContainer;
