import React, { useState } from "react";
import axios from "axios";
import "./Comedy.scss";
import Carousel from "../Carrousel";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function Comedy() {
  const [comedyMovies, setComedyMovies] = useState([]);

  const fetchComedyMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`
      );
      setComedyMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching comedy movies:", error);
    }
  };

  if (comedyMovies.length === 0) {
    fetchComedyMovies();
  }

  return (
    <div>
      <h2>Comedy Movies</h2>
      <Carousel movies={comedyMovies} />
    </div>
  );
}

export default Comedy;
