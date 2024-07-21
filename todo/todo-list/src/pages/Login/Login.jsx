import React from "react";
import { AuthForm } from "../../components";

const Login = () => {
  const handleLogin = (formData) => {
    // Handle login logic
    console.log("Login data:", formData);
  };

  return (
    <div className=" ">
      <AuthForm isSignup={false} onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
