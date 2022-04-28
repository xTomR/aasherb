import React, { useEffect } from "react";
import LoginCard from "common/components/LoginCard";

const LoginSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 2000);
  }, []);
  return <LoginCard success />;
};

export default LoginSuccess;
