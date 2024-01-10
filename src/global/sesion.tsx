"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { login, signup, verifyToken } from "@/lib/data";
import { guardarToken, recuperarToken, eliminarToken } from "@/lib/token";
import { useRouter } from "next/navigation";

const SesionContext = createContext<any>(undefined);

export const SesionProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    verificarSesion();
  }, []);

  const iniciarSesion = async (user: any) => {
    setIsLoading(true);
    const res = await login(user);
    setIsLoading(false);
    if (res) {
      console.log(res);
      guardarToken(res.token);
      setToken(res.token);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log(res.data.role);
      if (res.data.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/home");
      }
    }
    return res;
  };

  const registrarse = async (user: any) => {
    setIsLoading(true);
    const res = await signup(user);
    setIsLoading(false);
    if (res) {
      setUser(res.data);
      iniciarSesion({
        email: user.email,
        password: user.password,
      });
    }
    return res;
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
    setIsLoading(true);
    const res = await verifyToken(token);
    setIsLoading(false);
    if (res === null) {
      setToken(null);
      setUser(null);
      setIsAuthenticated(false);
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
        isLoading,
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
