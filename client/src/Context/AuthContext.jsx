// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import {
  login as apiLogin,
  register as apiRegister,
  getProfile,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // Fetch profile if token exists
  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const fetchedUser = await getProfile(token);
        setUser(fetchedUser);
      } catch (err) {
        console.error("AuthContext: Failed to fetch profile", err);
        logout();
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token]);

  // Login
  const login = async (email, password) => {
    const { token, user } = await apiLogin(email, password);
    setUser(user);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  // Register
  const register = async (name, email, password) => {
    const { token, user } = await apiRegister(name, email, password);
    setUser(user);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  // Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
