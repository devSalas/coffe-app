import React from "react";

export default function TableCell({
  children
}: {
  children: React.ReactNode;
}) {
  return <td className="py-2 px-4">{children}</td>;
}
