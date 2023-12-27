import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  name: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, name, value, onChange }) => {
  return (
    <input
      className="bg-orange-100 focus:bg-orange-200 rounded py-3 px-4 outline-none"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
