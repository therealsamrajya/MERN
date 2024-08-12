import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import ToastNotification from "./ToastNotification"; // Import the custom ToastNotification component
import banner6 from "../images/banner5.jpg";

const LoginForm = ({ onSwitch }) => {
  const { login, logout, isAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      setNotification({
        message: "Successfully logged in",
        type: "success",
      });
      setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
      setUsername("");
      setPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setNotification({
        message: "Successfully logged out",
        type: "success",
      });
      setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
    } catch (err) {
      setNotification({
        message: "Logout failed",
        type: "error",
      });
      setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
    }
  };

  return (
    <div className="flex flex-row ml-[20rem] items-center h-screen bg-gray-100 max-sm:ml-[1rem]">
      <div className="flex flex-row">
        {isAuthenticated ? (
          <div>
            <button
              onClick={handleLogout}
              className="bg-blue-500 text-white p-2 rounded">
              Log Out
            </button>
            {notification && (
              <ToastNotification
                message={notification.message}
                type={notification.type}
                onClose={() => setNotification(null)}
              />
            )}
          </div>
        ) : (
          <form
            onSubmit={handleLogin}
            className="bg-heading h-[80vh] w-[30vw] p-8 rounded shadow-md max-sm:w-[42vw] max-sm:h-[63vh]">
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
              <label className="block mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded">
              Log In
            </button>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onSwitch}
                className="text-blue-500">
                Sign Up
              </button>
            </p>
          </form>
        )}
        <img
          className="w-[30rem] h-[38rem] max-sm:w-[20rem] max-sm:h-[30rem]"
          src={banner6}
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginForm;
