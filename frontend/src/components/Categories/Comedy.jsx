import React, { useState } from "react";
import axios from "axios";
import "./Comedy.scss";
import CarouselMovies from "../CarouselMovies";

const apiKey = "e50c3de532f2abaf6995340152fbbd02";

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
      <CarouselMovies movies={comedyMovies} />
    </div>
  );
}

export default Comedy;
