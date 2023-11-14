import NavBarWelcome from "../components/NavBarWelcome";
import "../components/NavBarWelcome.scss";
import TMDB from "../assets/TMDB.png";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="welcome">
      <div>
        <NavBarWelcome />
      </div>
      <h1>
        This site uses the TMDB API but is not endorsed or certified by TMDB.
        <div className="TMDB">
          <img src={TMDB} alt="Logo" />
        </div>
      </h1>
      <Footer />
    </div>
  );
}

export default About;
