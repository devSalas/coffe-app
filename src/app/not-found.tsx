import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1>Pagina no encontrada</h1>
      <Link className="text-orange-600" href={"/"}>
        volver al inicio
      </Link>
    </div>
  );
}
