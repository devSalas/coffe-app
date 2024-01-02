import Link from "next/link";
import React, { useState } from "react";
import { useSesion } from "@/global/sesion";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Bars from "./icons/Bars";

const links = [
  {
    label: "Menus",
    route: "/admin/menus",
  },
  {
    label: "Categorias",
    route: "/admin/categories",
  },
  {
    label: "Ordenes",
    route: "/admin/orders",
  },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { cerrarSesion } = useSesion();

  const pathname = usePathname();

  const handleClick = () => {
    cerrarSesion();
  };
  return (
    <>
      <button
        className="md:hidden absolute right-4 top-2 z-50 p-2 text-orange-900"
        onClick={() => setIsVisible(!isVisible)}
      >
        <Bars />
      </button>
      <aside className="md:flex flex-col border hidden h-screen py-8 px-4 w-60">
        <header className="py-8">
          <Link className="text-orange-900 text-2xl font-bold" href={"/admin"}>
            Coffe App
          </Link>
        </header>
        <nav className="flex flex-col flex-1">
          {links.map(({ label, route }) => (
            <Link
              key={route}
              className={`text-orange-600 p-2 rounded hover:bg-orange-100 ${
                pathname === route ? "bg-orange-200 " : ""
              }`}
              href={route}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Button onClick={handleClick}>Cerrar sesion</Button>
      </aside>
      {isVisible && (
        <div
          className="absolute inset-0 z-20 bg-black/50 flex flex-col justify-end overflow-hidden"
          onClick={() => setIsVisible(!isVisible)}
        >
          <aside className="bg-white rounded-t-3xl fadeIn flex flex-col gap-4 p-8">
            <header className="py-8">
              <Link
                className="text-orange-900 text-2xl font-bold"
                href={"/admin"}
              >
                Coffe App
              </Link>
            </header>
            <nav className="flex flex-col flex-1">
              {links.map(({ label, route }) => (
                <Link
                  key={route}
                  className={`text-orange-600 p-2 rounded hover:bg-orange-100 ${
                    pathname === route ? "bg-orange-200 " : ""
                  }`}
                  href={route}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Button onClick={handleClick}>Cerrar sesion</Button>
          </aside>
        </div>
      )}
    </>
  );
}
