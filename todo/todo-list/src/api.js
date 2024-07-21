import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL || "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to set the JWT token in the header
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Function to register a user
export const registerUser = async (userData) => {
  const response = await api.post("/user/register", userData);
  return response.data;
};

// Function to login a user
export const loginUser = async (userData) => {
  const response = await api.post("/user/login", userData);
  return response.data;
};

// Function to add a task
export const addTask = async (taskData) => {
  const response = await api.post("/task/add", taskData);
  return response.data;
};

// Function to get all tasks
export const getTasks = async () => {
  const response = await api.get("/task");
  return response.data;
};

export default api;
