"use client";
import React, { useEffect } from "react";
import { useSesion } from "@/global/sesion";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, verificarSesion } = useSesion();

  useEffect(() => {
    verificarSesion();
  }, [verificarSesion]);

  return (
    <>
      {isAuthenticated && user.role === "admin" ? (
        <main className="md:px-8 px-4">
          <div className="flex gap-4">
            <Navbar />
            <div className="flex-1">{children}</div>
          </div>
        </main>
      ) : (
        <div>
          <p>no autorizado</p>
          <Link className="text-orange-500" href={"/login"}>
            iniciar sesion
          </Link>
        </div>
      )}
    </>
  );
}
