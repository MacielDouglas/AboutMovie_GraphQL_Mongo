import { useLazyQuery } from "@apollo/client";
import { createContext, useState, useContext, useEffect } from "react";
import { LOGIN, LOGOUT } from "../graphql/queries/user.query";
import { PropTypes } from "prop-types";

// Criar o contexto de autenticação
const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginQuery, { loading, error, data }] = useLazyQuery(LOGIN);
  const [logout] = useLazyQuery(LOGOUT);

  useEffect(() => {
    if (!loading && !error && data) {
      setIsLoggedIn(true);
      setUser({
        username: data.login.username,
        email: data.login.email,
        isAdmin: data.login.isAdmin,
      });
    }
  }, [loading, error, data]);

  const signIn = async (userData) => {
    try {
      loginQuery(userData);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const logOff = () => {
    logout();
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, signIn, logOff, data, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
