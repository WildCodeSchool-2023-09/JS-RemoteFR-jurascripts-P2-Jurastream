// function App() {
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line prettier/prettier
//   const [favorites, setFavorites] = useState([]);
//   const items = [];

//   const toggleFavorite = (item) => {
//     if (favorites.includes(item)) {
//       setFavorites(favorites.filter((fav) => fav !== item));
//     } else {
//       setFavorites([favorites, item]);
//     }
//   };

//   return (
//     <div>
//       {items.map((item) => (
//         <div key={item.id}>
//           {item.name}
//           <button onClick={() => toggleFavorite(item)}>
//             {favorites.includes(item) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
//           </button>
//         </div>
//       ))}

//       <div>
//         <h2>Favoris</h2>
//         {favorites.map((fav) => (
//           <div key={fav.id}>{fav.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// ------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import "./Heart.scss";

// Composant pour afficher un élément
function Item({ item, isFavorite, onToggleFavorite }) {
  return (
    <div>
      <div key={item.id}>
        {item.name}
        <button type="button" onClick={() => onToggleFavorite(item)}>
          {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
        </button>
      </div>
    </div>
  );
}

// Composant principal
function Heart() {
  const [items, setItems] = useState([
    { id: 1, name: "Element 1" },
    { id: 2, name: "Element 2" },
    { id: 3, name: "Element 3" },
  ]);

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter((fav) => fav !== item));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <div>
      <h2>Éléments</h2>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          isFavorite={favorites.includes(item)}
          onToggleFavorite={toggleFavorite}
        />
      ))}

      <h2>Favoris</h2>
      {favorites.map((fav) => (
        <div key={fav.id}>{fav.name}</div>
      ))}
    </div>
  );
}

// Heart.propTypes = {
//   items: PropTypes.array.isRequired,
//   favorites: PropTypes.array.isRequired,
// };

export default Heart;
