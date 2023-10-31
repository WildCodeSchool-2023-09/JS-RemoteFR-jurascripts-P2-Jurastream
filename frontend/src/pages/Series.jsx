import { Link } from "react-router-dom";

function Series() {
  return (
    <nav>
      <h1>My series Page</h1>
      <p>
        <Link to="/favorites">Favorites</Link>
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

export default Series;
