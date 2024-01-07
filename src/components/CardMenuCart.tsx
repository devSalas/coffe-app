"use client";

import Trash from "./icons/Trash";
import { ProductMenu } from "@/global/Cart";

interface Props {
  menu: ProductMenu;
}

function CarMenuCart({ menu }: Props) {
  return (
    <div className=" bg-neutral-800 rounded-lg p-3 flex gap-4 mb-4 text-white ">
      <figure className="w-20 h-16">
        <img
          className="w-full h-full object-contain"
          src={menu.url}
          alt={menu.name}
        />
      </figure>

      <div className="flex-1">
        <h3>{menu.name}</h3>
        <span>S/{menu.price}</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        {menu.quantity}
        <Trash menu={menu} />
      </div>
    </div>
  );
}

export default CarMenuCart;
