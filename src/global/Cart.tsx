"use client";
import { MenuI } from "@/lib/definitions";
import { useState, createContext } from "react";

export interface ProductMenu extends MenuI {
  quantity: number;
}

interface PropsValue {
  addToCart: (menu: MenuI, quantity: number) => void;
  removeToCart: (menu: MenuI) => void;
  cart: ProductMenu[];
  clearCart: () => void;
  count: () => number;
}

export const CartContext = createContext<PropsValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ProductMenu[]>([]);

  const addToCart = (product: MenuI, quantity: number) => {
    console.log({ product });
    const productInCartIndex = cart.findIndex(
      (item) => item.id_menu === product.id_menu
    );

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity = quantity;
      return setCart(newCart);
    }

    setCart((prevState) => [...prevState, { ...product, quantity }]);
  };

  const removeToCart = (menu: MenuI) => {
    console.log(menu);
    console.log(cart);
    setCart((prev) => prev.filter((item) => item.id_menu !== menu.id_menu));
  };

  const clearCart = () => {
    setCart([]);
  };

  const count = (): number => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeToCart, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
