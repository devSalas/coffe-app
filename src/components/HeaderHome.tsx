import { dancingScript } from "@/app/fonts";
import Logo from "./icons/Logo";

export default function HeaderHome() {
  return (
    <header className="absolute py-4 w-full left-0 top-0 flex justify-center">
      <h1 className="text-3xl text-second flex items-end gap-2">
        <Logo />
        <span className={dancingScript.className}>Coffe App</span>
      </h1>
    </header>
  );
}
