"use client";

import { useEffect } from "react";
import Navbar from "@/components/UserNavbar";
import { useSesion } from "@/global/sesion";
import Link from "next/link";

function Account() {
  const { isAuthenticated, user, cerrarSesion, verificarSesion } = useSesion();

  useEffect(() => {
    verificarSesion();
  }, [verificarSesion]);

  console.log(isAuthenticated, user);

  if (isAuthenticated) {
    return (
      <div>
        <Navbar />
        <header className="py-8 flex items-center gap-4">
          <img
            className="bg-neutral-700 w-20 h-20 rounded-full"
            src="user-icon.png"
            alt=""
          />
          <div>
            <h1 className="text-2xl">{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </header>
        <nav>
          <button
            className="bg-neutral-500 px-4 py-2 text-white rounded"
            onClick={() => cerrarSesion()}
          >
            Cerrar Sesion
          </button>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <header className="py-8">
        <h1 className="text-2xl">No has iniciado sesion</h1>
      </header>
      <Link
        className="bg-neutral-500 px-4 py-2 text-white rounded"
        href={"/login"}
      >
        Iniciar Sesion
      </Link>
    </div>
  );
}

export default Account;
