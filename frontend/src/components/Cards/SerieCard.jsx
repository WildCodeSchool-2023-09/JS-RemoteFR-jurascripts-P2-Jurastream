import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./MediaCard.scss";
import InfoCard from "../InfoCard";
import { FavoritesContext } from "../FavoritesContext";


const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function SerieCard({ serieId }) {
  const [posterPath, setPosterPath] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [serieDetails, setSerieDetails] = useState({});
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some((favorite) => favorite.id === serieId);

  // FETCH DES INFOS POUR INFOCARD

  const fetchSerieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${serieId}?api_key=${apiKey}&append_to_response=credits,videos&language=fr-FR`
      );
      setSerieDetails({
        title: response.data.name,
        overview: response.data.overview,
        release_date: response.data.first_air_date,
        cast: response.data.credits.cast,
        trailerKey: response.data.videos.results.find(
          (video) => video.type === "Trailer"
        )?.key,
      });
    } catch (error) {
      console.error("Error fetching serie details:", error);
    }
  };

  // FETCH DES VIGNETTES

  const fetchSeriePoster = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${serieId}?api_key=${apiKey}`
      );
      setPosterPath(response.data.poster_path);
    } catch (error) {
      console.error("Error fetching serie poster:", error);
    }
  };

  fetchSeriePoster();

  const toggleInfoCard = () => {
    if (!showInfo) {
      fetchSerieDetails();
    }
    setShowInfo(!showInfo);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      toggleInfoCard();
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(serieId);
    } else {
      addFavorite({ id: serieId, ...serieDetails });
    }
  };

  return (
    <div
      className="serie-card"
      onClick={toggleInfoCard}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="button"
    >
      {posterPath && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt="Serie Poster"
          className="serie-card__image"
        />
      )}
      {showInfo && (
        <InfoCard movie={serieDetails} onClose={() => setShowInfo(false)} />
      )}
      <button
        type="button"
        className="heart-icon"
        onClick={handleFavoriteClick}
      >
        {isFavorite ? "❤️" : "🖤"}
      </button>
    </div>
  );
}

SerieCard.propTypes = {
  serieId: PropTypes.number.isRequired,
};

export default SerieCard;
