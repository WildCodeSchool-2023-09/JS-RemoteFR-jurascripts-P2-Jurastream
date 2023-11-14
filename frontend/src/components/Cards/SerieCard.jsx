import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./SerieCard.scss";
import InfoCardSerie from "../InfoCardSerie";
import { FavoritesContext } from "../FavoritesContext";

const apiKey = "e50c3de532f2abaf6995340152fbbd02";

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
        rating: response.data.vote_average,
        type: "serie",
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

  // Gestion de l'affichage de l'InfoCard

  const toggleInfoCard = () => {
    if (!showInfo) {
      fetchSerieDetails();
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
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(serieId);
    } else {
      addFavorite({ id: serieId, type: "serie", ...serieDetails }, "serie");
    }
  };

  return (
    <div className="serie-card">
      <div
        className="poster_image"
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
        <button
          type="button"
          className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          ♥
        </button>
      </div>
      {showInfo && (
        <InfoCardSerie
          serie={serieDetails}
          onClose={() => setShowInfo(false)}
        />
      )}
    </div>
  );
}

SerieCard.propTypes = {
  serieId: PropTypes.number.isRequired,
};

export default SerieCard;
