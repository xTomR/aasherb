import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

function RequireAuth() {
  const user = useAuth();
  if (!user.memoedValue.user || user.memoedValue.loggedIn === false) {
    return <Navigate to="/login" />;
  } else if (user.memoedValue.user && user.memoedValue.loggedIn === true)
    return <Outlet />;
}

export default RequireAuth;
