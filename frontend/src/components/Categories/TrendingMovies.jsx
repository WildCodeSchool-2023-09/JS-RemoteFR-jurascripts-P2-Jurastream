import React, { useState } from "react";
import axios from "axios";
import CarouselMovies from "../CarouselMovies";

const apiKey = "e50c3de532f2abaf6995340152fbbd02";

function TrendingMovies() {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}&include_adult=false`
      );
      setTrending(response.data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  if (trending.length === 0) {
    fetchTrending();
  }

  return (
    <div className="barre">
      <h2 className="cross-bar">Trending Movies</h2>
      <CarouselMovies movies={trending} />
    </div>
  );
}

export default TrendingMovies;
