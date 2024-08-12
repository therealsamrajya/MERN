import React from "react";

const ToastNotification = ({ message, type, onClose }) => {
  const notificationStyle = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div
      className={`fixed top-5 right-5 p-4 rounded shadow-md text-white ${notificationStyle[type]}`}>
      {message}
      <button className="ml-4" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default ToastNotification;
