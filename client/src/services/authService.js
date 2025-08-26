// src/services/authService.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  return res.data; // { token, user }
};

export const register = async (name, email, password) => {
  const res = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password,
  });
  return res.data; // { token, user }
};

export const getProfile = async (token) => {
  if (!token) return null;
  const res = await axios.get(`${API_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.user;
};
