import Navbar from "@/components/UserNavbar";
import CartProvider from "@/global/Cart";
import FavoriteProvider from "@/global/Favorite";
import { CounterProvider } from "./detail/[id]/counterContext";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <FavoriteProvider>
        <CounterProvider>
          <main className="pb-32 md:px-8 px-4 bg-black min-h-screen text-neutral-500 sm:pb-0 flex">
            <Navbar />
            <div className="sm:max-w-6xl m-auto">{children}</div>
          </main>
        </CounterProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}
