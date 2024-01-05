import CartProvider from "@/global/Cart";
import FavoriteProvider from "@/global/Favorite";
import React from "react";


export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <FavoriteProvider>
        <main className="pb-32 md:px-8 px-4 bg-black min-h-screen text-neutral-500">
          {children}
        </main>
      </FavoriteProvider>
      
    </CartProvider>
  );
}
