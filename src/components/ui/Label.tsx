import React, { ReactNode } from "react";

interface LabelProps {
  htmlFor?: string;
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="flex flex-col text-orange-300 text-sm ">
      {children}
    </label>
  );
};

export default Label;
