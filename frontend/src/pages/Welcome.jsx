import NavBar from "../components/NavBar";
import "./Welcome.scss";
import "../components/NavBar.scss";

function Welcome() {
  return (
    <body className="welcome">
      <div>
        <nav>
          <NavBar />
        </nav>
        <h2>
          <img src="./src/assets/LOGO.png" alt="logo" />
        </h2>
        <form>
          <input name="uncontrolled" placeholder="Subscribe" />
        </form>
      </div>
    </body>
  );
}

export default Welcome;
