import "./Welcome.scss";
import "../components/NavBar.scss";
import NavBarWelcome from "../components/NavBarWelcome";
import Logo from "../assets/LOGO.png";

function Welcome() {
  return (
    <div className="welcome">
      <div>
        <nav>
          <NavBarWelcome />
        </nav>
        <h2>
          <img className="logo" src={Logo} alt="logo" />
        </h2>
        <form>
          <input
            className="input-sub"
            name="uncontrolled"
            placeholder="Subscribe with @"
          />
        </form>
      </div>
    </div>
  );
}

export default Welcome;
