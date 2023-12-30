import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="flex gap-4">
        <Link className="text-orange-600" href={"/admin"}>
          Dashboard
        </Link>
        <Link className="text-orange-600" href={"/admin/menus"}>
          Menus
        </Link>
        <Link className="text-orange-600" href={"/admin/menus"}>
          Orders
        </Link>
        <Link className="text-orange-600" href={"/admin/categories"}>
          Categorias
        </Link>
      </nav>

      {children}
    </div>
  );
}
