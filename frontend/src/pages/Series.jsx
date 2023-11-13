import "./Series.scss";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import CategorySeries from "../components/Categories/CategorySeries";
import TrendingSeries from "../components/Categories/TrendingSeries";
import UpcomingSeries from "../components/Categories/UpcomingSeries";

function Series() {
  return (
    <div className="home">
      <NavBar />
      <SearchBar />
      <div className="family-section">
        <TrendingSeries />
      </div>
      <CategorySeries />
      <UpcomingSeries />
    </div>
  );
}

export default Series;
