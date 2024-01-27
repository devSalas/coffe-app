"use client";
import { useSesion } from "@/global/sesion";
import useCart from "@/hooks/useCart";
import { addOrder } from "@/lib/data";
import React, { useRef } from "react";
import toast from "react-hot-toast";

export default function Modal() {
  const showModalRef = useRef<any>();
  const { token, user } = useSesion();

  const { cart } = useCart();

  const handleClick = () => {
    showModalRef.current!.style.display = "flex";
  };

  const handleClickCancel = () => {
    showModalRef.current!.style.display = "none";
  };
  const handleClickAceptar = () => {
    try {
      if (!user)
        return toast.error("Para realizar compras, tienes que registrarte");
      const { id_user } = user;
      cart.forEach((item) => {
        const { id_menu, quantity } = item;
        addOrder(
          {
            menu_id: id_menu,
            user_id: id_user,
            amount: quantity,
            payment_method: "contado",
          },
          token
        );
      });
      showModalRef.current!.style.display = "none";
      toast.success(`Solicitud existosa!`);
    } catch (err: any) {
      console.log(err.message);

      toast.error(`Error al solicitar orden!`);
    }
  };

  return (
    <>
      <button
        className={`${
          cart.length === 0
            ? "bg-neutral-800 text-neutral-500"
            : "bg-second text-white hover:bg-orange-500"
        } w-full p-3 rounded`}
        disabled={cart.length === 0}
        onClick={handleClick}
      >
        Enviar Orden
      </button>

      <div
        ref={showModalRef}
        className="absolute hidden inset-0 text-white backdrop-brightness-50 justify-center items-center"
      >
        <div className="max-w-sm bg-third p-4 rounded-lg">
          <h2 className="text-center text-second font-semibold text-xl mb-4">
            Confirmar Orden
          </h2>
          <p className="mb-4">Estimado cliente,</p>
          <p>
            Para confirmar su pedido, haga click en el botón {"aceptar"} a
            continuación
          </p>
          <div className="flex gap-4 justify-end mt-4">
            <button
              onClick={handleClickCancel}
              className="bg-black/50 text-white py-2 px-4 rounded-lg"
            >
              cancelar
            </button>
            <button
              onClick={handleClickAceptar}
              className="bg-second text-white py-2 px-4 rounded-lg"
            >
              aceptar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
