import CartProvider from "@/global/Cart";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="pb-32">{children}</div>
    </CartProvider>
  );
}
