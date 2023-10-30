import "./App.scss";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <nav className="App">
      <h1>My App Page</h1>
      <p>
        <Link to="/home">Home</Link>
      </p>
      <p>
        <Link to="/login">Login</Link>
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

      <main>
        <Outlet />
      </main>
    </nav>
  );
}

export default App;
