import React from "react";
import { AuthForm } from "../../components";

const Signup = () => {
  const handleSignup = (formData) => {
    // Handle signup logic
    console.log("Signup data:", formData);
  };

  return (
    <div>
      <AuthForm isSignup={true} onSubmit={handleSignup} />
    </div>
  );
};

export default Signup;
