// Favorites.jsx
import React, { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import MovieCard from "../components/Cards/MovieCard";
import SerieCard from "../components/Cards/SerieCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import "../components/Categories/Style.scss";

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
      <div className="favorites-container">
        <h1>Mes Favoris</h1>
        <h2>Films</h2>
        {movieFavorites.length > 0 ? (
          movieFavorites.map((favorite) => (
            <MovieCard key={favorite.id} movieId={favorite.id} />
          ))
        ) : (
          <p>Aucun film favori ajouté.</p>
        )}

        <h2>Séries</h2>
        {serieFavorites.length > 0 ? (
          serieFavorites.map((favorite) => (
            <SerieCard key={favorite.id} serieId={favorite.id} />
          ))
        ) : (
          <p>Aucune série favorite ajoutée.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
