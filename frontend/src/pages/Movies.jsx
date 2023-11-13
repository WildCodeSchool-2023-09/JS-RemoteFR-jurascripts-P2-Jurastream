import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import "./Movies.scss";
import CategoryMovies from "../components/Categories/CategoryMovies";
import TrendingMovies from "../components/Categories/TrendingMovies";
import UpcomingMovies from "../components/Categories/UpcomingMovies";

function Movies() {
  return (
    <div className="home">
      <NavBar />
      <SearchBar />
      <div className="family-section">
        <TrendingMovies />
      </div>
      <div className="family-section">
        <CategoryMovies />
        <UpcomingMovies />
      </div>
    </div>
  );
}

export default Movies;
