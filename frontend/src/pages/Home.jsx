import { Link } from "react-router-dom";
import "./Home.scss";
import SearchBar from "../components/SearchBar";
// import SearchResults from "../components/SearchResults";

function Home() {
  return (
    <nav>
      <h1>My Home Page</h1>
      <div>
        <SearchBar />
      </div>
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
