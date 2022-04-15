/*
 * Description: This component manage the authentication state
 * and create the AuthContext. When this component is mounted,
 * it validate the token saved in localStorage (AUTHENTICATED_USER)
 * by making a request to the "validateToken" API endpoint. If the
 * token is valid, the endpoint will return "true" and the user data
 * and JWT Token will be setted in the authenticated state. If the 
 * user is not authenticated or the token is not valid (endpoint returns
 * "false") then set the authenticated state to null. While
 * validantingToken is true, it renders the Loading component instead of
 * the children
 */
import React, { useEffect, useState } from "react";

import api from "../util/api";
import Loading from "../components/Loding/Loading";

interface AuthContextType {
  authenticated: any;
  setAuthenticated: React.Dispatch<React.SetStateAction<any>>;
}

const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactElement }) {
  const [authenticated, setAuthenticated] = useState(null);
  const [validatingToken, setValidatingToken] = useState(true);

  useEffect(() => {
    validateToken();
  }, []);

  async function validateToken() {
    // Get user data from localStorage
    const json = localStorage.getItem("AUTHENTICATED_USER");
    const userData = json ? JSON.parse(json) : null;

    // Token exists on localStorage
    if (userData) {
      const resp = await api.post("validateToken", userData);
      const isTokenValid = resp.data;

      if (isTokenValid) {
        setAuthenticated(userData);
      }
    }

    setValidatingToken(false);
  }

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {validatingToken ? <Loading /> : children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

export { AuthProvider, AuthContext };
