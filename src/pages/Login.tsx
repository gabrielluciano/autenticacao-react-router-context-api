import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

import api from "../util/api";
import AuthContext from "../context/AuthContext";
import Menu from "../components/Menu/Menu";

interface CustomState {
  from: Location;
}

function Login() {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showloginErrorMessage, setShowLoginErrorMessage] = useState(false);

  // Hooks
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as CustomState;
  const from = state?.from?.pathname || "/";

  async function handleLogin(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    try {
      const resp = await api.post("signin", { email, password });
      const { data: userData } = resp;
      const { token } = userData;

      // Set authenticated state
      authContext.setAuthenticated(userData);

      // Save user data and token on localStorage
      localStorage.setItem("AUTHENTICATED_USER", JSON.stringify(userData));

      // Adds authorization token to request headers
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Redirect
      navigate(from, { replace: true });
    } catch (e) {
      setShowLoginErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      <Menu />
      <h1>Login</h1>
      <form>
        <div className="login-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button onClick={handleLogin} className="login-button">
            Logar
          </button>
        </div>
      </form>
      {showloginErrorMessage && (
        <p className="login-error-message">Invalid email or password!</p>
      )}
    </div>
  );
}

export default Login;
