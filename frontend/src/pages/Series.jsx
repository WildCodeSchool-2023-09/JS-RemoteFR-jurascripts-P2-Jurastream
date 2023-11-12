import SerieCard from "../components/Cards/SerieCard";
import "./Series.scss";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import CategorySeries from "../components/Categories/CategorySeries";
import TrendingSeries from "../components/Categories/TrendingSeries";
import UpcomingSeries from "../components/Categories/UpcomingSeries";

function Series() {
  const serieIds = [
    1668, 60625, 2316, 1399, 30981, 1398, 160, 10100, 1396, 60574,
  ];
  return (
    <div className="home">
      <NavBar />
      <SearchBar />
      <div className="family-section">
        <TrendingSeries />
      </div>
      <div className="serie-mosaic">
        {serieIds.map((serieId) => (
          <SerieCard key={serieId} serieId={serieId} />
        ))}
      </div>
      <div>
        <CategorySeries />
        <UpcomingSeries />
      </div>
    </div>
  );
}

export default Series;
