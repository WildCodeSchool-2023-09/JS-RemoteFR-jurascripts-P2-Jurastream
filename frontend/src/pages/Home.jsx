import "./Home.scss";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import CategoryMovies from "../components/Categories/CategoryMovies";
import CategorySeries from "../components/Categories/CategorySeries";
import Trending from "../components/Categories/TrendingSeries";
import UpcomingMovies from "../components/Categories/UpcomingMovies";

function Home() {
  return (
    <div className="home">
      <h1>My Home Page</h1>
      <div>
        <NavBar />
        <SearchBar />
        <Trending />
        <CategoryMovies />
        <CategorySeries />
        <UpcomingMovies />
      </div>
    </div>
  );
}

export default Home;
