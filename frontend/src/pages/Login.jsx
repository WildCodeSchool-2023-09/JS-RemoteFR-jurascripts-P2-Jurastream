import { Link } from "react-router-dom";

function Login() {
  return (
    <nav>
      <h1>My Login Page</h1>
      <p>
        <Link to="/home">Login</Link>
      </p>
    </nav>
  );
}

export default Login;
