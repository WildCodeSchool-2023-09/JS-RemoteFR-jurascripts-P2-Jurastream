import "./Series.scss";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import InfoCard from "../components/InfoCard";

function Series() {
  const serieIds = [
    1668, 60625, 2316, 1399, 30981, 1398, 160, 10100, 1396, 60574,
  ];
  return (
    <div className="home">
      <NavBar />
      <SearchBar />
      <div className="serie-mosaic">
        {serieIds.map((serieId) => (
          <InfoCard key={serieId} serieId={serieId} />
        ))}
      </div>
    </div>
  );
}

export default Series;
