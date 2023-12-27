import React, { ReactNode } from "react";

interface LabelProps {
  htmlFor?: string;
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="flex flex-col text-sm text-neutral-800">
      {children}
    </label>
  );
};

export default Label;
