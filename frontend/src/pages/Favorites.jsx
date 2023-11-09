import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import MovieCard from "../components/Cards/MovieCard";
import "./Favorites.scss";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-container">
      <h1>Mes Favoris</h1>
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <MovieCard key={favorite.id} movieId={favorite.id} />
        ))
      ) : (
        <p>Aucun favori ajouté.</p>
      )}
      <p>
        <Link to="/series">Series</Link>
      </p>
      <p>
        <Link to="/movies">Movies</Link>
      </p>
      <p>
        <Link to="/home">Home</Link>
      </p>
    </div>
  );
}

export default Favorites;
