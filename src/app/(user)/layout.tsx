import Navbar from "@/components/UserNavbar";
import CartProvider from "@/global/Cart";
import FavoriteProvider from "@/global/Favorite";
import { CounterProvider } from "@/global/CounterContext";
import React from "react";
import { MenuProvider } from "@/global/MenuContext";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <FavoriteProvider>
        <CounterProvider>
          <MenuProvider>
            <main className="md:px-8 px-4 bg-black min-h-screen text-neutral-500">
              <section className="max-w-7xl mx-auto flex gap-8 relative">
                <Navbar />
                <div className="w-full md:py-16 pt-16 pb-24">{children}</div>
              </section>
            </main>
          </MenuProvider>
        </CounterProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}
