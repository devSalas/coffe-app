import React, { ChangeEvent } from "react";

interface Props {
  children?: React.ReactNode;
  name: string;
  value?: string | number;
  cols: number;
  rows: number;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<Props> = ({
  children,
  name,
  value,
  cols,
  rows,
  required,
  onChange,
}) => {
  return (
    <textarea
      className="bg-orange-100  text-orange-700 focus:outline-1 focus:bg-orange-200 rounded py-3 px-4 outline-orange-300 hover:bg-orange-200"
      name={name}
      value={value}
      cols={cols}
      rows={rows}
      onChange={onChange}
      required={required}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
