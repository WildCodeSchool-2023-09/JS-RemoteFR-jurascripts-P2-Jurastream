import { Link } from "react-router-dom";

function Movies() {
  return (
    <nav>
      <h1>My Movies Page</h1>
      <p>
        <Link to="/series">Series</Link>
      </p>
      <p>
        <Link to="/favorites">Favorites</Link>
      </p>
      <p>
        <Link to="/home">Home</Link>
      </p>
    </nav>
  );
}

export default Movies;
