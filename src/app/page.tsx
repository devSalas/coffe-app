"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/home");

  return (
    <div>
      <h1>Coffe app</h1>
      <Link href={"/home"}>Ir al Inicio</Link>
    </div>
  );
}
