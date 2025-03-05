import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
