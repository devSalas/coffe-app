"use client";

import Link from "next/link";
import {
  HomeIcon,
  HeartIcon,
  CartIcon,
  UserIcon,
} from "./icons/IconsUserNavbar";
import { usePathname } from "next/navigation";
import Signup from "./icons/Signup";

function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full py-4 px-8 bg-black sm:hidden">
        <nav className="flex  justify-between">
          <Link
            className={`flex flex-col items-center p-2 hover:text-second ${pathname === "/home" ? "text-second" : "text-neutral-500"
              }`}
            href={"/home"}
          >
            <HomeIcon />
            Inicio
          </Link>
          <Link
            className={`flex flex-col items-center p-2 hover:text-second ${pathname === "/favorite" ? "text-second" : "text-neutral-500"
              }`}
            href={"/favorite"}
          >
            <HeartIcon />
            Deseos
          </Link>
          <Link
            className={`flex flex-col items-center p-2 hover:text-second ${pathname === "/cart" ? "text-second" : "text-neutral-500"
              }`}
            href={"/cart"}
          >
            <CartIcon />
            Carrito
          </Link>
          <Link
            className={`flex flex-col items-center p-2 hover:text-second ${pathname === "/account" ? "text-second" : "text-neutral-500"
              }`}
            href={"/account"}
          >
            <UserIcon />
            Cuenta
          </Link>
        </nav>
      </div>
      <div className="hidden sm:block  h-full   py-4 pr-8 text-white">
        <nav className="flex flex-col justify-between">
          <Link
            className={`flex gap-2 items-center p-2 hover:text-second ${pathname === "/home" ? "text-second" : "text-neutral-500"
              }`}
            href={"/home"}
          >
            <HomeIcon />
            <span>Inicio</span>
            
          </Link>
          <Link
            className={`flex gap-2 items-center p-2 hover:text-second ${pathname === "/favorite" ? "text-second" : "text-neutral-500"
              }`}
            href={"/favorite"}
          >
            <HeartIcon />
            <span>Deseos</span>
            
          </Link>
          <Link
            className={`flex gap-2 items-center p-2 hover:text-second ${pathname === "/cart" ? "text-second" : "text-neutral-500"
              }`}
            href={"/cart"}
          >
            <CartIcon />
            <span>Carrito</span>
          </Link>
          <Link
            className={`flex gap-2 items-center p-2 hover:text-second ${pathname === "/account" ? "text-second" : "text-neutral-500"
              }`}
            href={"/account"}
          >
            <UserIcon />
            Cuenta
          </Link>
          <Link
            className={`flex gap-2 items-center p-2 hover:text-second ${pathname === "/signup" ? "text-second" : "text-neutral-500"
              }`}
            href={"/signup"}
          >
            {/* <Signup/> */}
            Registrarse
          </Link>
          <Link
            className={`flex gap-2 items-center p-2 hover:text-second ${pathname === "/login" ? "text-second" : "text-neutral-500"
              }`}
            href={"/login"}
          >
            Inicia Sesion
          </Link>

        </nav>
      </div>
    </>
  );
}

export default Navbar;
