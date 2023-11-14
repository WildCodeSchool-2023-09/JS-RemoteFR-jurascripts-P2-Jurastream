// Favorites.jsx
import React, { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import MovieCard from "../components/Cards/MovieCard";
import SerieCard from "../components/Cards/SerieCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import "./Favorites.scss";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  const movieFavorites = favorites.filter(
    (favorite) => favorite.type === "movie"
  );
  const serieFavorites = favorites.filter(
    (favorite) => favorite.type === "serie"
  );

  return (
    <div className="home">
      <NavBar />
      <SearchBar />
      <div className="barre">
        <h1>Mes Favoris</h1>
        <h2>Films</h2>
      </div>
      <div className="favorite-container">
        {movieFavorites.length > 0 ? (
          movieFavorites.map((favorite) => (
            <MovieCard key={favorite.id} movieId={favorite.id} />
          ))
        ) : (
          <p>Aucun film favori ajouté.</p>
        )}
      </div>
      <div className="barre">
        <h2>Séries</h2>
      </div>
      {serieFavorites.length > 0 ? (
        serieFavorites.map((favorite) => (
          <SerieCard key={favorite.id} serieId={favorite.id} />
        ))
      ) : (
        <p>Aucune série favorite ajoutée.</p>
      )}
    </div>
  );
}

export default Favorites;
