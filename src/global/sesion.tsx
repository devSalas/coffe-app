"use client";
import React, { createContext, useContext, useState } from "react";
import { login, signup, verifyToken } from "@/lib/data";
import { guardarToken, recuperarToken, eliminarToken } from "@/lib/token";
import { useRouter } from "next/navigation";

const SesionContext = createContext<any>(undefined);

export const SesionProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const router = useRouter();

  const iniciarSesion = async (user: any) => {
    const res = await login(user);
    if (res) {
      guardarToken(res.token);
      setToken(res.token);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log(res.data.role);
      if (res.data.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    }
  };

  const registrarse = async (user: any) => {
    const res = await signup(user);
    if (res) {
      setUser(res.data);
      iniciarSesion({
        email: user.email,
        password: user.password,
      });
    }
  };

  const cerrarSesion = () => {
    eliminarToken();
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    router.push("/login");
  };

  const verificarSesion = async () => {
    const token = recuperarToken();
    const res = await verifyToken(token);
    if (res === null) {
      setToken(null);
      setUser(null);
      setIsAuthenticated(false);
      router.push("/login");
    } else {
      setToken(token);
      setUser(res.data);
      setIsAuthenticated(true);
    }
  };

  return (
    <SesionContext.Provider
      value={{
        user,
        isAuthenticated,
        token,
        iniciarSesion,
        registrarse,
        cerrarSesion,
        verificarSesion,
      }}
    >
      {children}
    </SesionContext.Provider>
  );
};

export const useSesion = () => {
  const context = useContext(SesionContext);
  if (!context) {
    throw new Error(
      "useGlobalState debe ser utilizado dentro de un GlobalStateProvider"
    );
  }
  return context;
};
