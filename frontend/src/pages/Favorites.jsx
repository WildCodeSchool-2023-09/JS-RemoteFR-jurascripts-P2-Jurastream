import { Link } from "react-router-dom";

function Favorites() {
  return (
    <nav>
      <h1>Favorites Page</h1>
      <p>
        <Link to="/series">Series</Link>
      </p>
      <p>
        <Link to="/movies">Movies</Link>
      </p>
      <p>
        <Link to="/home">Home</Link>
      </p>
    </nav>
  );
}

export default Favorites;
