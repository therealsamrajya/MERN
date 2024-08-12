import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";

import ToastNotification from "./ToastNotification"; // Import the custom ToastNotification component
import banner6 from "../images/banner5.jpg";
import sad from "../images/sad.jpg";

const LoginForm = ({ onSwitch }) => {
  const { login, logout, isAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

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

  const openLogoutModal = () => setIsModalOpen(true);
  const closeLogoutModal = () => setIsModalOpen(false);
  const confirmLogout = async () => {
    await handleLogout();
    closeLogoutModal();
  };

  return (
    <div className="flex flex-row  items-center h-screen bg-gray-100 max-sm:ml-[1rem] justify-center">
      <div className="flex flex-row items-center justify-center">
        {isAuthenticated ? (
          <>
            <div className="bg-heading h-[80vh] w-[30vw] p-8 rounded shadow-md max-sm:w-full max-sm:h-[63vh] ">
              <div className="flex flex-col items-center justify-center w-full h-full ju ">
                <h1 className="text-dark font-primary text-4xl">
                  This is not a drill, Aaaree you sure you want to Logout??
                </h1>
                <img
                  className="w-full h-[30rem] max-sm:w-full  mt-[2rem]"
                  src={sad}
                  alt=""
                />
                <button
                  onClick={openLogoutModal}
                  className="bg-button text-heading mb-4 p-2 rounded mt-[2rem]">
                  Log Out
                </button>
              </div>

              {/* Confirmation Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                  <div className="bg-white p-6 rounded shadow-lg w-1/3 max-sm:w-4/5">
                    <h2 className="text-lg font-bold mb-4">Confirm Logout</h2>
                    <p className="mb-4">Are you sure you want to log out?</p>
                    <div className="flex justify-end gap-4">
                      <button
                        onClick={confirmLogout}
                        className="bg-red-500 text-white p-2 rounded">
                        Yes, Log Out
                      </button>

                      <button
                        onClick={closeLogoutModal}
                        className="bg-gray-500 text-white p-2 rounded">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {notification && (
                <ToastNotification
                  message={notification.message}
                  type={notification.type}
                  onClose={() => setNotification(null)}
                />
              )}
            </div>
          </>
        ) : (
          <>
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
            <img
              className="w-[30rem] h-[38rem] max-sm:w-[20rem] max-sm:h-[30rem]"
              src={banner6}
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
