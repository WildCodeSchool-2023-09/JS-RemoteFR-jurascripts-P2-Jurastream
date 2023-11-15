import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import "./Movies.scss";
import CategoryMovies from "../components/Categories/CategoryMovies";
import TrendingMovies from "../components/Categories/TrendingMovies";
import UpcomingMovies from "../components/Categories/UpcomingMovies";
import Footer from "../components/Footer";

function Movies() {
  return (
    <div className="home">
      <NavBar />
      <SearchBar />
      <TrendingMovies />
      <CategoryMovies />
      <UpcomingMovies />
      <Footer />
    </div>
  );
}

export default Movies;
