import { Link } from "react-router-dom";

import Menu from "../components/Menu/Menu";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Menu />
      <h1>Home</h1>

      <div className="navigation-menu">
        <h2>Navigation</h2>

        <nav>
          <ul>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
            <li>
              <Link to="/signin">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
