import React, { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";
import "./SearchBar.scss";

function SearchBar() {
  const [inputSearch, setInputSearch] = useState("");
  const [movieList, setMovieList] = useState([]);
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const apiKey = "856791ec73da31493ff35fd0cc49d245";

  useEffect(() => {
    if (inputSearch) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${inputSearch}&include_adult=false&api_key=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovieList(data.results);
        })
        .catch((err) => console.info(err));
    } else {
      setMovieList([]);
    }
  }, [inputSearch]);

  const handleFavoriteClick = (movie) => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <>
      <div className="input-wrapper">
        <div className="search-box">
          <input
            placeholder="Find your movie ..."
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <img className="loupe" src="src/assets/Loupe6.png" alt="loupe" />
        </div>
      </div>
      <div className="search-result">
        {movieList?.map(
          (movie) =>
            movie.poster_path && (
              <div className="card-movie" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <button
                  type="button"
                  onClick={() => handleFavoriteClick(movie)}
                  className={`favorite-button ${
                    isFavorite(movie.id) ? "is-favorite" : ""
                  }`}
                >
                  ♥
                </button>
              </div>
            )
        )}
      </div>
    </>
  );
}

export default SearchBar;
