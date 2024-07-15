import React, { useState } from "react";
import { registerUser, loginUser } from "../../api";

const AuthForm = ({ isSignup, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await registerUser({ name, email, password });
      } else {
        await loginUser({ email, password });
      }
      onSubmit({ email, password, name: isSignup ? name : undefined });
    } catch (err) {
      setError(err.response.data.msg || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primary bg-gray-100 max-sm:ml-[12rem]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        {isSignup && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
