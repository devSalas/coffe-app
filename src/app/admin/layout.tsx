"use client";
import React, { useEffect } from "react";
import { useSesion } from "@/global/sesion";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, verificarSesion } = useSesion();

  useEffect(() => {
    verificarSesion();
  }, []);

  return (
    <>
      {isAuthenticated && user.role === "admin" ? (
        <div>
          <Navbar />
          {children}
        </div>
      ) : (
        <h1>no autorizado</h1>
      )}
    </>
  );
}
