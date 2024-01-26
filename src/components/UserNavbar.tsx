"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./links";
import Logo from "./icons/Logo";

function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* desktop */}
      <header className="hidden md:block fixed inset-y-0 left-0 z-50 w-60">
        <div className="flex flex-col gap-6 px-10 py-6">
          <h1 className="text-xl text-second flex items-end gap-2">
            <Logo /> Coffe App
          </h1>

          <nav className="flex flex-col">
            {links.map((link, i) => (
              <Link
                key={i}
                className={`flex items-center gap-3 py-3 hover:text-second ${
                  pathname === link.href ? "text-second" : "text-neutral-500"
                }`}
                href={link.href}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {/* mobile */}
      <header className="block md:hidden fixed z-20 inset-x-0 bottom-0 bg-black/80 backdrop-blur">
        <nav className="flex justify-evenly">
          {links.map((link, i) => (
            <Link
              key={i}
              className={`flex flex-col items-center p-2 hover:text-second ${
                pathname === link.href ? "text-second" : "text-neutral-500"
              }`}
              href={link.href}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
