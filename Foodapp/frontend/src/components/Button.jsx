import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, value, to }) => {
  const buttonContent = to ? (
    <Link to={to} className={className}>
      {value}
    </Link>
  ) : (
    <button className={className}>{value}</button>
  );

  return buttonContent;
};

export default Button;
