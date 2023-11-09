import SerieCard from "../components/Cards/SerieCard";
import "./Series.scss";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

function Series() {
  const serieIds = [
    1668, 60625, 2316, 1399, 30981, 1398, 160, 10100, 1396, 60574,
  ];
  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className="serie-mosaic">
        {serieIds.map((serieId) => (
          <SerieCard key={serieId} serieId={serieId} />
        ))}
      </div>
    </div>
  );
}

export default Series;
