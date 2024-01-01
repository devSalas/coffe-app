"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSesion } from "@/global/sesion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { verificarSesion, cerrarSesion } = useSesion();
  useEffect(() => {
    verificarSesion();
  }, []);

  const handleClick = () => {
    cerrarSesion();
  };

  return (
    <div>
      <nav className="flex gap-4">
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

      {children}
    </div>
  );
}
