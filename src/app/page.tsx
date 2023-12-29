"use client";

import React, { useEffect } from "react";
import { verifyToken } from "@/api/fetch";
import { useRouter } from "next/navigation";
import { recuperarToken } from "@/lib/token";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    verificarSesion();
  }, []);

  const verificarSesion = async () => {
    const token = recuperarToken();
    const res = await verifyToken(token);
    if (res === null) router.push("/login");
  };

  return (
    <div>
      <h1>home</h1>
    </div>
  );
}
