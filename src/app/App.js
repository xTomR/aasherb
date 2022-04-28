import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthProvider } from "contexts/AuthContext";
import RequireAuth from "api/RequireAuth";
import LoginSuccess from "app/pages/LoginSuccess";
import LoginFailure from "app/pages/LoginFailure";
import { GoogleMapProvider } from "contexts/googleMapContext";

const App = () => {
  return (
    <AuthProvider>
      <GoogleMapProvider>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/login/success" element={<LoginSuccess />}></Route>
          <Route exact path="/login/failure" element={<LoginFailure />}></Route>
          <Route element={<RequireAuth />}>
            <Route exact path="/home" element={<Home />}></Route>
            <Route path="*" element={<Navigate replace to="/home" />}></Route>
          </Route>
        </Routes>
      </GoogleMapProvider>
    </AuthProvider>
  );
};

export default App;
