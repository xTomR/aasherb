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
      .get("http://localhost:5000/auth/login", { withCredentials: true })
      .then((user) => {
        setUser(user);
        setLoggedIn(true);
      })
      .catch((err) => {})
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
