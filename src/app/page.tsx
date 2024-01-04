import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Coffe app</h1>
      <Link href={"/menu"}>Ir al Inicio</Link>
    </div>
  );
}
