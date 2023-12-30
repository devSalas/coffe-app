import React from "react";

export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      {children}
    </table>
  );
}
