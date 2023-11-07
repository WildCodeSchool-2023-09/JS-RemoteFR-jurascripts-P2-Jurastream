import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

const apiKey = "1ae30c2959bb39aba06cff704dc6a30c";

function MovieCard({ movieId }) {
  const [posterPath, setPosterPath] = useState("");

  const fetchMoviePoster = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      setPosterPath(response.data.poster_path);
    } catch (error) {
      console.error("Error fetching movie poster:", error);
    }
  };

  fetchMoviePoster();

  return (
    <div className="movie-card">
      {posterPath && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt="Movie Poster"
          className="movie-card__image"
        />
      )}
    </div>
  );
}

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCard;
