import Navbar from "@/components/UserNavbar";
import CartProvider from "@/global/Cart";
import FavoriteProvider from "@/global/Favorite";
import { CounterProvider } from "@/global/CounterContext";
import React from "react";
import { MenuProvider } from "@/global/MenuContext";
import HeaderHome from "@/components/HeaderHome";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <FavoriteProvider>
        <CounterProvider>
          <MenuProvider>
            <main className="relative md:px-8 px-4 bg-black min-h-screen text-neutral-500">
              <HeaderHome />
              <section className="max-w-7xl mx-auto flex gap-8 ">
                <Navbar />
                <div className="w-full pb-24">{children}</div>
              </section>
            </main>
          </MenuProvider>
        </CounterProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}
