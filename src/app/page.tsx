'use client'
import { useSesion } from "@/global/sesion";
import { redirect } from "next/navigation";

export default function Page() {

 
  const { token } = useSesion()

  if (!token) redirect('/home')


  return (
    <div>
      <h1>home</h1>
    </div>
  );
}
