import "./Home.scss";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import CategoryMovies from "../components/CategoryMovies";
import CategorySeries from "../components/CategorySeries";
import Trending from "../components/TrendingSeries";

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
      </div>
    </div>
  );
}

export default Home;
