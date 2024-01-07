import Navbar from "@/components/UserNavbar";
import CartProvider from "@/global/Cart";
import FavoriteProvider from "@/global/Favorite";
import { CounterProvider } from "./detail/[id]/counterContext";
import React from "react";
import { MenuProvider } from "@/global/MenuFilterContext";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <FavoriteProvider>
        <CounterProvider>
          <MenuProvider>
            <main className="md:px-8 px-4 bg-black min-h-screen text-neutral-500">
              <section className="max-w-7xl mx-auto flex gap-8 relative">
                <Navbar />
                <div className="w-full pb-32">{children}</div>
              </section>
            </main>
          </MenuProvider>
        </CounterProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}
