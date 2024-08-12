import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          username,
          password,
        }
      );

      // Log the entire response to inspect its structure
      console.log("Login response:", response.data);

      // Access tokens from the nested data object
      const { accessToken, refreshToken } = response.data.data;

      // Log tokens to verify they are being accessed correctly
      console.log("Destructured tokens:", { accessToken, refreshToken });

      // Store tokens securely (localStorage example)
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Set authentication state
      setIsAuthenticated(true);

      return response.data;
    } catch (err) {
      console.error("Login error:", err);
      throw err;
    }
  };

  const logout = () => {
    // Clear tokens from storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // Set authentication state to false
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
