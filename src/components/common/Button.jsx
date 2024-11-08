import React from "react";

const Button = ({
  text = "Button",
  bgColor = "bg-red-500", // Default background color
  textColor = "text-white", // Default text color
  width = "w-32", // Default width
  height = "h-10", // Default height
  onClick,
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${width} ${height} rounded-lg flex items-center justify-center font-semibold transition duration-200 hover:bg-opacity-80`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
