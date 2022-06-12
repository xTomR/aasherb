import axios from "axios";
import LoginCard from "common/components/LoginCard";
import React, { useEffect } from "react";

const LoginFailure = () => {
  const clearCookie = async () => {
    await axios.get(`https://apiaasherb.herokuapp.com/auth/logout`, {
      withCredentials: true,
    });
  };
  // TODO:
  // useEffect(() => {
  //   clearCookie();
  //   setTimeout(() => {
  //     window.close();
  //   }, 2000);
  // }, []);
  return <LoginCard failure />;
};

export default LoginFailure;
