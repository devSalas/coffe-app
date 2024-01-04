"use client";

import Link from "next/link";
import {
  HomeIcon,
  HeartIcon,
  CartIcon,
  UserIcon,
} from "./icons/IconsUserNavbar";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="fixed bottom-0 left-0 w-full py-4 px-8 bg-black">
      <nav className="flex justify-between">
        <Link
          className={`flex flex-col items-center p-2 hover:text-orange-500 ${
            pathname === "/home" ? "text-orange-500" : "text-neutral-500"
          }`}
          href={"/home"}
        >
          <HomeIcon />
          Inicio
        </Link>
        <Link
          className={`flex flex-col items-center p-2 hover:text-orange-500 ${
            pathname === "/favorite" ? "text-orange-500" : "text-neutral-500"
          }`}
          href={"/favorite"}
        >
          <HeartIcon />
          Deseos
        </Link>
        <Link
          className={`flex flex-col items-center p-2 hover:text-orange-500 ${
            pathname === "/cart" ? "text-orange-500" : "text-neutral-500"
          }`}
          href={"/cart"}
        >
          <CartIcon />
          Carrito
        </Link>
        <Link
          className={`flex flex-col items-center p-2 hover:text-orange-500 ${
            pathname === "/account" ? "text-orange-500" : "text-neutral-500"
          }`}
          href={"/account"}
        >
          <UserIcon />
          Cuenta
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
