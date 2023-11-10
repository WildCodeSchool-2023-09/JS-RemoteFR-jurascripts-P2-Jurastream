import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./MediaCard.scss";
import InfoCard from "../InfoCard";
import { FavoritesContext } from "../FavoritesContext";


const apiKey = import.meta.env.TMDB_API_KEY;

function MovieCard({ movieId }) {
  const [posterPath, setPosterPath] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some((favorite) => favorite.id === movieId);

  // Fetch de l'affiche du film
  (async function fetchMoviePoster() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      setPosterPath(response.data.poster_path);
    } catch (error) {
      console.error("Error fetching movie poster:", error);
    }
  })();

  // Fetch des détails du film pour l'InfoCard
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

  // Gestion de l'affichage de l'InfoCard
  const toggleInfoCard = () => {
    if (!showInfo) {
      fetchMovieDetails();
    }
    setShowInfo(!showInfo);
  };

  // Gestion du clavier pour l'accessibilité
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      toggleInfoCard();
    }
  };

  // Gestion du clic sur le cœur pour ajouter/supprimer des favoris
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Empêche le clic de se propager au parent
    if (isFavorite) {
      removeFavorite(movieId);
    } else {
      addFavorite({ id: movieId, ...movieDetails });
    }
  };

  return (
    <div
      className="media-card"
      onClick={toggleInfoCard}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="button"
    >
      <div className="poster_image">
        {posterPath && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt="Movie Poster"
            className="movie-card__image"
          />
        )}
        <button
          type="button"
          className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          ♥
        </button>
      </div>
      {showInfo && <InfoCard movie={movieDetails} />}
    </div>
  );
}

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCard;
