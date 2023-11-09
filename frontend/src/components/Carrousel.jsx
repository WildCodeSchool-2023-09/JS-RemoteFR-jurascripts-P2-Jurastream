import PropTypes from "prop-types";
import { useState } from "react";
import MovieCard from "./Cards/MovieCard";
import "./Carrousel.scss";

function Carousel({ movies }) {
  const [movieIndex, setMovieIndex] = useState(0);

  const handleClickNext = () => {
    setMovieIndex((movieIndex + 1) % (movies.length - 5));
  };

  const handleClickPrevious = () => {
    setMovieIndex((movieIndex - 1) % (movies.length - 5));
  };

  if (movies.length <= 0) {
    return <>pas d'image</>;
  }

  return (
    <>
      <div className="movie-list">
        <MovieCard movieId={movies[movieIndex].id} />
        <MovieCard movieId={movies[movieIndex + 1].id} />
        <MovieCard movieId={movies[movieIndex + 2].id} />
        <MovieCard movieId={movies[movieIndex + 3].id} />
        <MovieCard movieId={movies[movieIndex + 4].id} />
      </div>
      <button type="button" onClick={handleClickPrevious}>
        &lt;
      </button>
      <button type="button" onClick={handleClickNext}>
        &gt;
      </button>
    </>
  );
}

Carousel.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default Carousel;
