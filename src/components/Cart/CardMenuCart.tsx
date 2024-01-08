"use client";

import Link from "next/link";
import Trash from "../icons/Trash";
import { ProductMenu } from "@/global/Cart";

interface Props {
  menu: ProductMenu;
}

function CarMenuCart({ menu }: Props) {
  return (
    <div className="bg-neutral-800 rounded-lg p-3 flex gap-4 text-white ">
      <Link href={`/detail/${menu.id_menu}`}>
        <figure className="w-20 h-16">
          <img
            className="w-full h-full object-contain"
            src={menu.url}
            alt={menu.name}
          />
        </figure>
      </Link>

      <div className="flex-1">
        <Link href={`/detail/${menu.id_menu}`}>
          <h3>{menu.name}</h3>
        </Link>
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
