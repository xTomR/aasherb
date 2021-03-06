import axios from "axios";
import { createContext, useState, useContext, useEffect, useMemo } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  const fetchAuthUser = () => {
    axios
      .get(`https://apiaasherb.herokuapp.com/auth/login`, {
        withCredentials: true,
      })
      .then((user) => {
        console.log(user);
        setUser(user);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        console.log("error auth login");
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchAuthUser();
  }, []);

  const memoedValue = useMemo(
    () => ({
      loading,
      loggedIn,
      user,
    }),
    [loading, loggedIn, user]
  );

  return (
    <AuthContext.Provider
      value={{ memoedValue, login, logout, setUser, setLoggedIn }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
