import React, { useState } from "react";
import axios from "axios";
import "./Family.scss";
import Carousel from "../Carrousel";

const apiKey = import.meta.env.TMDB_API_KEY;

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
      <Carousel movies={familyMovies} />
    </div>
  );
}

export default Family;
