"use client";

import CarMenuCart from "@/components/Cart/CardMenuCart";
import { useSesion } from "@/global/sesion";
import useCart from "@/hooks/useCart";
import { addOrder } from "@/lib/data";
import Link from "next/link";
import { useRef } from "react";

function Cart() {
  const { cart, token } = useCart();
  const { user } = useSesion()
  const showModalRef = useRef<HTMLButtonElement>(null)
  let totalPrice;
  let subtotal = 0;

  if (cart.length > 0) {
    subtotal = 0;
    totalPrice = cart.reduce((accumulator, currentItem) => {
      return accumulator + Number(currentItem.price) * currentItem.quantity;
    }, 0);
  }


  const handleClickSendOrder = () => {
    if (cart.length <= 0) return;
    showModalRef.current.style.display = "flex"
  }
  const handleClickCancel = () => {
    showModalRef.current.style.display = "none"
  }
  const handleClickAceptar = () => {
    try {
      const { id_user } = user
      cart.forEach(item => {
        const { id_menu, quantity } = item
        addOrder({ mendu_id: id_menu, user_id: id_user, amount: quantity, payment_method: "contado" }, token)
      })
      showModalRef.current.style.display = "none"
    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <>
      <section className="grid md:grid-cols-2 gap-8">
        <article>
          <h1 className="text-2xl mb-8">Carrito de Compras</h1>
          <ul className="flex flex-col gap-3">
            {cart.length > 0 ? (
              cart.map((menu) => <CarMenuCart key={menu.id_menu} menu={menu} />)
            ) : (
              <p className="text-neutral-500">No hay compras todavia.</p>
            )}
          </ul>
        </article>

        <article className="flex flex-col gap-4">
          <h1 className="text-2xl">Resumen</h1>
          <div className="flex justify-between">
            <h3>Subtotal</h3>
            <span>S/{totalPrice || 0}</span>
          </div>
          <div className="flex justify-between">
            <h3>Delivery Charge</h3>
            <span>S/{subtotal}</span>
          </div>
          <div className="flex justify-between border-y py-4 border-neutral-800">
            <h3>Total</h3>
            <span>S/{totalPrice || 0}</span>
          </div>
          <button onClick={handleClickSendOrder} ref={showModalRef} className="w-full p-3 text-fourth bg-second rounded-2xl">
            Enviar Orden
          </button>
          <div ref={showModalRef} className="absolute hidden inset-0  text-white  backdrop-brightness-50  justify-center items-center ">
            <div className="max-w-sm bg-third p-4 rounded-lg  ">
              <h2 className="text-center text-second font-semibold text-xl mb-4">Confirmar Orden</h2>
              <p className="mb-4">Estimado cliente,</p>
              <p>Para confirmar su pedido, haga click en el botón {'aceptar'} a continuación</p>
              <div className="flex gap-4 justify-end mt-4">
                <button onClick={handleClickCancel} className="bg-black/50 text-white py-2 px-4 rounded-lg">cancelar</button>
                <button onClick={handleClickAceptar} className="bg-second text-white py-2 px-4 rounded-lg">aceptar</button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Cart;
