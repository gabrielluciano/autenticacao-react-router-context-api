/*
 * Description: This component verify if the user is
 * logged in. If true, render the component passed as child.
 * If not, redirect the user to login page
 */

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import AuthContext from "../context/AuthContext";

function PrivateRoute({ children }: { children: React.ReactElement }) {
  const { authenticated } = useContext(AuthContext);
  const location = useLocation();

  return authenticated ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
