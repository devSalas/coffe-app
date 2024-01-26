"use client";

import Link from "next/link";
import {
  HomeIcon,
  HeartIcon,
  CartIcon,
  UserIcon,
} from "./icons/IconsUserNavbar";
import { usePathname } from "next/navigation";
import useFavorite from "@/hooks/useFavorite";
import useCart from "@/hooks/useCart";
import { useSesion } from "@/global/sesion";

function Navbar() {
  const pathname = usePathname();
  const { isAuthenticated, cerrarSesion } = useSesion();

  const { count } = useFavorite();
  const { count: cartCounter } = useCart();

  return (
    <>
      <section className="fixed bottom-0 left-0 z-50 w-full py-2 bg-black sm:hidden">
        <nav className="flex  justify-evenly">
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
      </section>

      {/* pantalla grande */}
      <section className="hidden sm:block h-screen left-0 w-44 pb-16">
        <div className="h-full  flex flex-col ">
          <div className="h-full flex flex-col items-center justify-between">
            <nav className="flex-1 flex flex-col gap-2">
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

                <span className="text-xs">
                  {count() > 0 ? `(${count() > 2 ? "2+" : count()})` : ""}
                </span>
              </Link>

              <Link href={"/cart"} className={`flex gap-2 items-center p-2 hover:text-second ${pathname === "/favorite" ? "text-second" : "text-neutral-500"
                  }`}>
                <CartIcon/ >
              <span>Carrito</span>
              <span className="text-xs">
                {cartCounter() > 0
                  ? `(${cartCounter() > 9 ? "9+" : cartCounter()})`
                  : ""}
              </span>
            </Link>
            <Link
              className={`flex gap-2 items-center p-2 hover:text-second ${
                pathname === "/account" ? "text-second" : "text-neutral-500"
              }`}
              href={"/account"}
            >
              <UserIcon />
              Cuenta
            </Link>

            </nav>

            <nav className="flex flex-col gap-2">
            {isAuthenticated ? (
              <button className="p-2" onClick={() => cerrarSesion()}>
                Cerrar sesion
              </button>
            ) : (
              <>
                <Link
                  className={`flex gap-2 items-center p-2 hover:text-second ${
                    pathname === "/signup" ? "text-second" : "text-neutral-500"
                  }`}
                  href={"/signup"}
                >
                  Registrarse
                </Link>
                <Link
                  className={`flex gap-2 items-center p-2 hover:text-second ${
                    pathname === "/login" ? "text-second" : "text-neutral-500"
                  }`}
                  href={"/login"}
                >
                  Inicia Sesion
                </Link>
              </>
            )}
            </nav>
          </div>

          <div className="h-28 grow">
                  
          </div>         
          
        </div>
      </section>
    </>
  );
}

export default Navbar;
