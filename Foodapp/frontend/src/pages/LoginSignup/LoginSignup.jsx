import React, { useState } from "react";
import { LoginForm, SignupForm } from "../../components";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm onSwitch={toggleForm} />
      ) : (
        <SignupForm onSwitch={toggleForm} />
      )}
    </div>
  );
};

export default LoginSignup;
