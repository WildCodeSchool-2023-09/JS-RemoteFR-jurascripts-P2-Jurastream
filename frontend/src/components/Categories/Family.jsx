import React, { useState } from "react";
import axios from "axios";
import MovieCard from "../Cards/MovieCard";
import "./Family.scss";

const apiKey = "856791ec73da31493ff35fd0cc49d245";

function Family() {
  const [familyMovies, setFamilyMovies] = useState([]);

  const fetchFamilyMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10751`
      );
      setFamilyMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching family movies:", error);
    }
  };

  if (familyMovies.length === 0) {
    fetchFamilyMovies();
  }

  return (
    <div>
      <h2>Family Movies</h2>
      <div className="movie-list">
        {familyMovies.map((movie) => (
          <MovieCard key={movie.id} movieId={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Family;
