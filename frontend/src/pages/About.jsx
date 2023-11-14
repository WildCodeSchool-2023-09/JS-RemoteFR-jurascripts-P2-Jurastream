import NavBarWelcome from "../components/NavBarWelcome";
import "../components/NavBarWelcome.scss";
import TMDB from "../assets/TMDB.png";

function About() {
  return (
    <div className="welcome">
      <div>
        <NavBarWelcome />
      </div>
      <h1>
        This site uses the TMDB API but is not endorsed or certified by TMDB.
        <div>
          <img src={TMDB} alt="Logo" />
        </div>
      </h1>
    </div>
  );
}

export default About;
