import Link from "next/link";
import React from "react";
import { useSesion } from "@/global/sesion";

export default function Navbar() {
  const { cerrarSesion } = useSesion();

  const handleClick = () => {
    cerrarSesion();
  };
  return (
    <nav className="md:flex gap-4 hidden">
      <Link className="text-orange-600" href={"/admin"}>
        Dashboard
      </Link>
      <Link className="text-orange-600" href={"/admin/menus"}>
        Menus
      </Link>
      <Link className="text-orange-600" href={"/admin/orders"}>
        Ordenes
      </Link>
      <Link className="text-orange-600" href={"/admin/categories"}>
        Categorias
      </Link>
      <button onClick={handleClick}>cerrar sesion</button>
    </nav>
  );
}
