import { useRouteError } from "react-router-dom";
import "./ErrorPage.scss";
import LOGO from "../assets/LOGO.png";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error-page">
      <p>
        {error.status === "404" ? "404 Page Not Found" : ""}
        Error 404, the film you are looking for is still filming...
      </p>
      <img className="logo" src={LOGO} alt="logo" />
    </div>
  );
}

export default ErrorPage;
