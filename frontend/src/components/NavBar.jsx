import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <p>
        <Link to="/home">Home</Link>
      </p>
      <p>
        <Link to="/movies">Movies</Link>
      </p>
      <p>
        <Link to="/series">Series</Link>
      </p>
      <p>
        <Link to="/favorites">Favorites</Link>
      </p>
    </div>
  );
}

export default NavBar;
