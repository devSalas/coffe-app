"use client";
import React from "react";
import { useCounter } from "./counterContext";
import useCart from "@/hooks/useCart";
import { MenuI } from "@/lib/definitions";
import Link from "next/link";

export default function ButtonAddCart({ menu }: { menu: MenuI }) {
  const { counter, reset } = useCounter();
  const { addToCart } = useCart();

  const handleclick = () => {
    if (menu) {
      addToCart(menu, counter);
      reset();
    }
  };

  return (
    <Link
      onClick={handleclick}
      href="/cart"
      className="text-fourth bg-second rounded-lg py-4 text-center grow"
    >
      Agregar a carrito
    </Link>
  );
}
