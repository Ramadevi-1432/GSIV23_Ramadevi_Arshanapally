import MovieCard from "./MovieCard";

const MoviesContainer = ({ searchResults }) => {
  const results = searchResults?.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));
  // const [movie, setMovie] = useState([]);
  // useEffect(() => {
  //   getMovies();
  // }, []);

  // const getMovies = async () => {
  //   const data = await fetch(MOVIES_API);
  //   const json = await data.json();

  //   setMovie(json.results);
  // };
  return results.length === 0 ? (
    "No matches found"
  ) : (
    <div>
      <div className="flex flex-wrap m-2 p-2">{results}</div>
    </div>
  );
};

export default MoviesContainer;
