import axios from "axios";
import React, { useState, useEffect } from "react";
import CarouselMovies from "../CarouselMovies";
import "./Style.scss";

const apiKey = "e50c3de532f2abaf6995340152fbbd02";

function CategoryMovies() {
  const [genres, setGenres] = useState([]);
  const [categoryButton, setCategoryButton] = useState(28);
  const [movies, setMovies] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`
      );
      setGenres(response.data.genres);
    } catch (error) {
      console.error("Error fetching category movies:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&with_genres=${categoryButton}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [categoryButton]);

  return (
    <div className="barre">
      <h2 className="cross-bar">Movies Category</h2>
      <select
        className="slider-button"
        onChange={(e) => setCategoryButton(e.target.value)}
      >
        {genres.map((genre) => (
          <option className="slider-value" key={genre.name} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      {movies.length > 0 && <CarouselMovies movies={movies} />}
    </div>
  );
}

export default CategoryMovies;
