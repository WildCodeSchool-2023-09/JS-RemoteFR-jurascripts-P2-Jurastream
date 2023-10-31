import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <h1>My Home Page</h1>
      <p>
        <Link to="/movies">Movies</Link>
      </p>
      <p>
        <Link to="/series">Series</Link>
      </p>
      <p>
        <Link to="/favorites">Favorites</Link>
      </p>
    </nav>
  );
}

export default Home;
