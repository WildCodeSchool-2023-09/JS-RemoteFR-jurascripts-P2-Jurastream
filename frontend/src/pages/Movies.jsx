import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import InfoCard from "../components/InfoCard";
import "./Movies.scss";
import Comedy from "../components/Categories/Comedy";
import Family from "../components/Categories/Family";
import CategoryMovies from "../components/Categories/CategoryMovies";
import TrendingMovies from "../components/Categories/TrendingMovies";
import UpcomingMovies from "../components/Categories/UpcomingMovies";

function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const showInfoCard = (movie) => {
    setSelectedMovie(movie);
  };

  const hideInfoCard = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="home">
      <NavBar />
      <SearchBar />
      {selectedMovie && (
        <div className="info-card-overlay">
          <InfoCard movie={selectedMovie} onClose={hideInfoCard} />
        </div>
      )}
      <div className="family-section">
        <TrendingMovies />
      </div>
      <div className="comedy-section">
        <Comedy onMovieClick={showInfoCard} />{" "}
      </div>
      <div className="family-section">
        <Family onMovieClick={showInfoCard} />{" "}
      </div>
      <div className="family-section">
        <CategoryMovies />
        <UpcomingMovies />
      </div>
    </div>
  );
}

export default Movies;
