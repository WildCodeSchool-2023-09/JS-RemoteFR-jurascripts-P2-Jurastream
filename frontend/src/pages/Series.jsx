import { Link } from "react-router-dom";
import SerieCard from "../components/Cards/SerieCard";
import "./Series.scss";

function Series() {
  const serieIds = [
    1668, 60625, 2316, 1399, 30981, 1398, 160, 10100, 1396, 60574,
  ];
  return (
    <nav>
      <div className="serie-mosaic">
        {serieIds.map((serieId) => (
          <SerieCard key={serieId} serieId={serieId} />
        ))}
      </div>
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
