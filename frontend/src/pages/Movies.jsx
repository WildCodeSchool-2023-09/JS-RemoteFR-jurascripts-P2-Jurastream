import { Link } from "react-router-dom";
import React, { useState } from "react";
import InfoCard from "../components/InfoCard";
import "./Movies.scss";
import Comedy from "../components/Categories/Comedy";
import Family from "../components/Categories/Family";

function Movie() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const showInfoCard = (movie) => {
    setSelectedMovie(movie);
  };

  const hideInfoCard = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      {selectedMovie && (
        <div className="info-card-overlay">
          <InfoCard movie={selectedMovie} onClose={hideInfoCard} />
        </div>
      )}
      <div className="comedy-section">
        <Comedy onMovieClick={showInfoCard} />{" "}
      </div>
      <div className="family-section">
        <Family onMovieClick={showInfoCard} />{" "}
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
    </div>
  );
}

export default Movie;
