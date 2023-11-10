import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./MediaCard.scss";
import InfoCard from "../InfoCard";

const apiKey = "e50c3de532f2abaf6995340152fbbd02";

function SerieCard({ serieId }) {
  const [posterPath, setPosterPath] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [serieDetails, setSerieDetails] = useState({});

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
    </div>
  );
}

SerieCard.propTypes = {
  serieId: PropTypes.number.isRequired,
};

export default SerieCard;
