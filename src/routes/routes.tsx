import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedPage from "../pages/ProtectedPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route
        path="/protected"
        element={
          <PrivateRoute>
            <ProtectedPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
