import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, value, to, onClick }) => {
  const buttonContent = to ? (
    <Link to={to} className={className} onClick={onClick}>
      {value}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );

  return buttonContent;
};

export default Button;
