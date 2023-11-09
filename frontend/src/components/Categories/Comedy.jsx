import React, { useState } from "react";
import axios from "axios";
import MovieCard from "../Cards/MovieCard";
import "./Comedy.scss";

const apiKey = "856791ec73da31493ff35fd0cc49d245";

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
      <div className="movie-list">
        {comedyMovies.map((movie) => (
          <MovieCard key={movie.id} movieId={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Comedy;
