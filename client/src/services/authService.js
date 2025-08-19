import axios from "axios";

const API_URL = "http://localhost:3000"; // adjust if needed

export const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  const { token, user } = res.data;
  if (token && user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("storage"));
    return user;
  }
  throw new Error("Login failed");
};

export const register = async (name, email, password) => {
  const res = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password,
  });
  const { token, user } = res.data;
  if (token && user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("storage"));
    return user;
  }
  throw new Error("Registration failed");
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const res = await axios.get(`${API_URL}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const user = res.data.user;
  if (user) localStorage.setItem("user", JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.dispatchEvent(new Event("storage"));
};
