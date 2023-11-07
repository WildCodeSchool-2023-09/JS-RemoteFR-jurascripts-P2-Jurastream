import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./MovieCard.scss";
import InfoCard from "../InfoCard";

const apiKey = "877c7f202cabf1967d1a3d34b335b3d7";

function MovieCard({ movieId }) {
  const [posterPath, setPosterPath] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  // FETCH DES INFOS POUR INFOCARD

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,videos&language=fr-FR`
      );
      setMovieDetails({
        title: response.data.title,
        overview: response.data.overview,
        release_date: response.data.release_date,
        cast: response.data.credits.cast,
        trailerKey: response.data.videos.results.find(
          (video) => video.type === "Trailer"
        )?.key,
      });
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  // FETCH DES VIGNETTES

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

  const toggleInfoCard = () => {
    if (!showInfo) {
      fetchMovieDetails();
    }
    setShowInfo(!showInfo);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      toggleInfoCard();
    }
  };

  return (
    <div
      className="movie-card"
      onClick={toggleInfoCard}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="button"
    >
      {posterPath && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt="Movie Poster"
          className="movie-card__image"
        />
      )}
      {showInfo && <InfoCard movie={movieDetails} />}
    </div>
  );
}

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCard;
