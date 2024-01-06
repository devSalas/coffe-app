"use client";
import CarMenuCart from "@/components/CardMenuCart";
import Navbar from "@/components/UserNavbar";
import useCart from "@/hooks/useCart";
import Link from "next/link";

function Cart() {
  const { cart } = useCart();

  console.log(cart);

  let totalPrice;
  let subtotal = 0;
  if (cart.length > 0) {
    subtotal = 2;
    totalPrice = cart.reduce((accumulator, currentItem) => {
      return accumulator + Number(currentItem.price) * currentItem.quantity;
    }, 0);
    console.log(totalPrice);
  }

  return (
    <div className=" bg-black pt-4 flex flex-col sm:flex-row mb-10">
      <Navbar />
      <div className="sm:grow p-4">
        <div className="grow">
          <div className="relative mb-8 flex items-center justify-center text-xl text-second">
            <Link
              href="/home"
              className="w-8 absolute left-0 block rounded-full aspect-square bg-white sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
              </svg>
            </Link>
            <h2 className="text-center">Compras</h2>
          </div>
          {cart.length > 0 ? (
            cart.map((menu) => (
              <div key={menu.id_menu} className="grid grid-cols-1">
                <CarMenuCart menu={menu} />
              </div>
            ))
          ) : (
            <div className="text-white"> no hay compras todavia</div>
          )}
        </div>

        <div className="text-white ">
          <div className="py-4 flex flex-col gap-2">
            <div className="flex justify-between">
              <h3>Subtotal</h3> <span>S/ {totalPrice || 0}</span>
            </div>
            <div className="flex justify-between">
              <h3>Delivery Charge</h3> <span>S/ {subtotal}</span>
            </div>
            <hr className="" />
            <div className="flex justify-between">
              <h3>Total</h3> <span>S/ {totalPrice || 0}</span>
            </div>
          </div>
          <button className="w-full p-4 text-fourth bg-second rounded-lg">
            Enviar Orden
          </button>
        </div>
        <div className="h-20 sm:hidden">
        </div>
      </div>
    </div>
  );
}

export default Cart;
