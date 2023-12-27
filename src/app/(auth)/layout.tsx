import React from "react";

export default function layout({ children }) {
  return (
    <div className="h-screen flex flex-col justify-center">{children}</div>
  );
}
