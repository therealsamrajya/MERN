import React, { useState } from "react";
import axios from "axios";
import ToastNotification from "./ToastNotification";
import banner6 from "../images/banner5.jpg";

const SignupForm = ({ onSwitch }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        {
          username,
          email,
          password,
        }
      );
      setNotification({
        message: `${username} successfully registered`,
        type: "success",
      });
      setTimeout(() => setNotification(null), 3000);
      // Clear form fields
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.response.data.message);
      setNotification({
        message: err.response.data.message,
        type: "error",
      });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-row ">
        <form
          onSubmit={handleSignup}
          className="bg-heading p-8 rounded shadow-md h-[80vh] max-sm:w-[40vw] max-sm:h-[63vh] w-[30vw]">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          {error && <p className="text-red-500">{error}</p>}
          {notification && (
            <ToastNotification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}
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
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Sign Up
          </button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <button type="button" onClick={onSwitch} className="text-blue-500">
              Log in
            </button>
          </p>
        </form>
        <img
          className="w-[30rem] h-[38rem] max-sm:w-[20rem] max-sm:h-[30rem]"
          src={banner6}
          alt=""
        />
      </div>
    </div>
  );
};

export default SignupForm;
