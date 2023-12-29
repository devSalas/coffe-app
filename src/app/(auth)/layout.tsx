import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
