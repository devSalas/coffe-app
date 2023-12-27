import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-orange-400 rounded text-white py-2 px-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
