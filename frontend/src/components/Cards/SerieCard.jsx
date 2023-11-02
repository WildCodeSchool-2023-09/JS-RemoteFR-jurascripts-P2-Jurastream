import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SerieCard.scss";

const apiKey = "1ae30c2959bb39aba06cff704dc6a30c";

function SerieCard({ serieId }) {
  const [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    const fetchSeriePoster = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${serieId}?api_key=${apiKey}`
        );
        setPosterPath(response.data.poster_path);
      } catch (error) {
        console.error("Error fetching series poster:", error);
      }
    };

    fetchSeriePoster();
  }, [serieId]);

  return (
    <div className="serie-card">
      {posterPath && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt="Serie Poster"
          className="serie-card__image"
        />
      )}
    </div>
  );
}

SerieCard.propTypes = {
  serieId: PropTypes.number.isRequired,
};

export default SerieCard;
