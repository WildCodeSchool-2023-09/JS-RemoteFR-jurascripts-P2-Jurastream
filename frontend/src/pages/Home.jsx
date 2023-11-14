import "./Home.scss";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import UpcomingMovies from "../components/Categories/UpcomingMovies";
import TrendingMovies from "../components/Categories/TrendingMovies";
import TrendingSeries from "../components/Categories/TrendingSeries";

function Home() {
  return (
    <div className="home">
      <div>
        <NavBar />
        <div>
          <SearchBar />
        </div>
        <div>
          <TrendingMovies />
        </div>
        <div>
          <TrendingSeries />
        </div>
        <div>
          <UpcomingMovies />
        </div>
      </div>
    </div>
  );
}

export default Home;
