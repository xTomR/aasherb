import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginCard from "common/components/LoginCard";

const Login = () => {
  let navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    user.setLoggedIn(false);
  }, []);

  const fetchUser = async () => {
    const response = await axios.get("http://localhost:5000/auth/login", {
      withCredentials: true,
    });
    if (response && response.data) {
      user.setUser(response);
      user.setLoggedIn(true);
      navigate("/deliveries");
    }
  };

  function handleLogin() {
    let newWindow = window.open(
      "http://localhost:5000/auth/google",
      "__blank",
      "width=400,height=600,left=200,top=200"
    );
    if (newWindow) {
      let timer = setInterval(() => {
        if (newWindow.closed) {
          fetchUser();

          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  }

  return <LoginCard handleLogin={handleLogin} />;
};

export default Login;
