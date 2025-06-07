import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/", // backend base URL
});

export const register = (userData) => API.post("/api/auth/register", userData);
export const login = (credentials) => API.post("/api/auth/login", credentials);
