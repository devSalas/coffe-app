"use client";

import CarMenuCart from "@/components/Cart/CardMenuCart";
import useCart from "@/hooks/useCart";

function Cart() {
  const { cart } = useCart();

  let totalPrice;
  let subtotal = 0;

  if (cart.length > 0) {
    subtotal = 0;
    totalPrice = cart.reduce((accumulator, currentItem) => {
      return accumulator + Number(currentItem.price) * currentItem.quantity;
    }, 0);
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
          <button className="w-full p-3 text-fourth bg-second rounded-2xl">
            Enviar Orden
          </button>
        </article>
      </section>
    </>
  );
}

export default Cart;
