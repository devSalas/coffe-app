import React, { ChangeEvent } from "react";

interface Props {
  children: React.ReactNode;
  name: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<Props> = ({ children, name, value, onChange }) => {
  return (
    <select
      className="bg-orange-100 focus:outline-1 focus:bg-orange-200 rounded py-3 px-4 outline-orange-300 hover:bg-orange-200 w-full"
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
