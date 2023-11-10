import React, { useEffect, useState } from "react";

import "./SearchBar.scss";

function SearchBar() {
  const [inputSearch, setInputSearch] = useState("");
  const [movieList, setMovieList] = useState([]);

  const apiKey = "e50c3de532f2abaf6995340152fbbd02";

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
              <img
                className="card-movie"
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
                key={movie.id}
              />
            )
        )}
      </div>
    </>
  );
}

export default SearchBar;
