import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import api from "../../util/api";
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  function handleSign() {
    if (authenticated) {
      localStorage.removeItem("AUTHENTICATED_USER");
      delete api.defaults.headers.common["Authorization"];
      setAuthenticated(null);
      navigate("/");
    } else {
      navigate("/signin");
    }
  }

  return (
    <div className="Menu">
      <Link to="/">Back to Home</Link>
      <div className="menu-signout-button" onClick={handleSign}>
        Sign {authenticated ? "out" : "in"}
      </div>
    </div>
  );
}

export default Menu;
