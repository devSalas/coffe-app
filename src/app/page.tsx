"use client";

import React, { useEffect } from "react";
import { verifySesion } from "@/api/fetch";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  useEffect(() => {
    verificarSesion();
  }, []);

  const verificarSesion = async () => {
    const res = verifySesion();
    router.push("/login");
    if (!res) router.push("/login");
  };

  return <div>home</div>;
}
