import React, { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import MovieCard from "../components/Cards/MovieCard";
import SerieCard from "../components/Cards/SerieCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import "../components/Categories/Style.scss";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="home">
      <NavBar />
      <SearchBar />
      <div className="barre">
        <h2>Mes Favoris</h2>
        {favorites.length > 0 ? (
          favorites.map((favorite) =>
            favorite.type === "movie" ? (
              <MovieCard key={favorite.id} movieId={favorite.id} />
            ) : (
              <SerieCard key={favorite.id} serieId={favorite.id} />
            )
          )
        ) : (
          <p>Aucun favori ajouté.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
