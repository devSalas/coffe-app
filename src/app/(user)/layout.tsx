import CartProvider from "@/global/Cart";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <main className="pb-32 md:px-8 px-4 bg-black min-h-screen text-neutral-500">
        {children}
      </main>
    </CartProvider>
  );
}
