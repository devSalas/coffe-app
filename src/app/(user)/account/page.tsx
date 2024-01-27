"use client";

import { useSesion } from "@/global/sesion";
import Link from "next/link";

function Account() {
  const { isAuthenticated, user, cerrarSesion, isLoading } = useSesion();

  if (isLoading) return <div>cargando...</div>;

  if (isAuthenticated) {
    return (
      <div className="flex flex-col gap-6">
        <header className="flex items-center gap-3">
          <img
            className="bg-neutral-700 w-20 h-20 rounded-full"
            src="user-icon.png"
            alt="user"
          />
          <div>
            <h1 className="text-neutral-200 text-2xl">{user.name}</h1>
            <p className="text-neutral-400">{user.email}</p>
          </div>
        </header>
        <nav className="flex gap-2">
          <button
            className="bg-neutral-500 px-4 py-2 text-white rounded"
            onClick={() => cerrarSesion()}
          >
            Cerrar Sesion
          </button>
          {user.role === "admin" && (
            <Link
              className="bg-neutral-500 px-4 py-2 text-white rounded"
              href={"/admin"}
            >
              Panel Admin
            </Link>
          )}
        </nav>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <h1 className="text-neutral-200 text-2xl">No has iniciado sesion</h1>

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
