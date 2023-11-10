import "./Home.scss";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";

function Home() {
  return (

    <div>
      <h1>My Home Page</h1>
      <div>
        <NavBar />
        <SearchBar />
      </div>
    </div>
  );
}

export default Home;
