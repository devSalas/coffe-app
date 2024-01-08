import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classN?: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick,classN }) => {
  return (
    <button
      className={`${classN} bg-orange-400 rounded text-white py-2 px-4 hover:bg-orange-500 transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
