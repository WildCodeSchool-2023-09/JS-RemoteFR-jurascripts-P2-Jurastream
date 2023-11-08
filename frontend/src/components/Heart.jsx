// import React, { useState } from "react";
// import "./Heart.scss";
// import axios from "axios";

// // Composant pour afficher un button.

// function Heart({ movie, isFavorite, onToggleFavorite }) {

//   return (
//     <div>
//       <div key={movie.id}>
//         {movie.name}
//         <button type="button" onClick={() => onToggleFavorite(movie)}>
//           {isFavorite ? "Remove from favorites" : "Add to favorites"}
//         </button>
//       </div>
//     </div>
//   );
// }

// // Composant principal

// function MovieList() {
//   axios.get("https://").then((response) => {
//     setMovies(response.data.results[0]);
//   });
// }

// const [movies, setMovies] = useState([
//   { movie_id: 1, title: "Elem-1" }, // Movies / Séries
//   { movie_id: 2, title: "Elem-2" },
//   { movie_id: 3, title: "Elem-3" },
//   { movie_id: 4, title: "Elem-4" },
//   { movie_id: 5, title: "Elem-5" },
//   { movie_id: 6, title: "Elem-6" },
// ]);

// // déclaration de l'état des favoris + initialisation d'un tableau vide

// const [favorites, setFavorites] = useState([]);

// // fonction qui gère la liste de favoris

// const toggleFavorite = (movies) => {
//   if (favorites.includes(movies)) {
//     setFavorites(favorites.filter((fav) => fav !== movies));
//   } else {
//     setFavorites([...favorites, movies]);
//   }
//   return (
//     <div>
//       <h2>Movie</h2>
//       {movies.map((movie) => (
//         <Movie
//           key={movie.id}
//           movie={movie}
//           isFavorite={favorites.includes(movie)} // film inclus ou pas
//           onToggleFavorite={toggleFavorite} // action de passer ou non le film en favoris
//         />
//       ))}

//       <h2>Favoris</h2>
//       {favorites.map((fav) => (
//         <div key={fav.id}>{fav.name}</div>
//       ))}
//     </div>
//   );
// };

// Heart.propTypes = {
//   movies: PropTypes.array.isRequired,
//   favorites: PropTypes.array.isRequired,
// };

// export default Heart;
