import axios from "axios";

const API_URL = "http://localhost:3000"; // your backend URL

// Login user
export const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  if (res.data.token) {
    localStorage.setItem("token", res.data.token); // save JWT locally
  }
  return res.data.user;
};

// Register user
export const register = async (name, email, password) => {
  const res = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password,
  });
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data.user;
};

// Get current logged-in user profile
export const getProfile = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_URL}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Logout user
export const logout = () => {
  localStorage.removeItem("token");
};
