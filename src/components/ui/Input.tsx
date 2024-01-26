import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  name: string;
  value?: string | number;
  required?: boolean;
  min?: string;
  classN?: string;
  minLength?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  required,
  min,
  onChange,
  classN = "",
  minLength = 0,
}) => {
  return (
    <input
      className={`${classN} bg-orange-100 text-orange-700 focus:outline-1 focus:bg-orange-200 rounded py-3 px-4 outline-orange-300 hover:bg-orange-200`}
      type={type}
      name={name}
      value={value}
      required={required}
      min={min}
      onChange={onChange}
      minLength={minLength}
    />
  );
};

export default Input;
