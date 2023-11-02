import { Link } from "react-router-dom";
import MovieCard from "../components/Cards/MovieCard";
import "./Movies.scss";
import Rating from "../components/Rating";
import Comedy from "../components/Categories/Comedy";
import Family from "../components/Categories/Family";

function Movie() {
  const movieIds = [652, 778, 287, 787, 782, 177, 929, 268, 829, 655];
  return (
    <div className="movies">
      <h2>Our Selection</h2>
      <div className="movie-mosaic">
        {movieIds.map((movieId) => (
          <MovieCard key={movieId} movieId={movieId} />
        ))}
      </div>

      <div className="comedy-section">
        <Comedy />
      </div>
      <div className="family-section">
        <Family />
      </div>
      <p>
        <Link to="/series">Series</Link>
      </p>
      <p>
        <Link to="/favorites">Favorites</Link>
      </p>
      <p>
        <Link to="/home">Home</Link>
      </p>
      <div>
        <Rating />
      </div>
    </div>
  );
}

export default Movie;
