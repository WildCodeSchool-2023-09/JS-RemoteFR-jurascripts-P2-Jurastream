import "./Welcome.scss";
import "../components/NavBar.scss";
import NavBarWelcome from "../components/NavBarWelcome";

function Welcome() {
  return (
    <body className="welcome">
      <div>
        <nav>
          <NavBarWelcome />
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
