"use client";

import Link from "next/link";
import Trash from "../icons/Trash";
import { ProductMenu } from "@/global/Cart";

interface Props {
  menu: ProductMenu;
}

function CarMenuCart({ menu }: Props) {
  return (
    <li className="bg-neutral-800/80 backdrop-blur rounded flex overflow-hidden">
      <Link href={`/detail/${menu.id_menu}`}>
        <figure className="w-32 h-full">
          <img
            className="w-full h-full object-cover"
            src={menu.url}
            alt={menu.name}
          />
        </figure>
      </Link>

      <section className="flex-1 p-3 flex flex-col gap-3">
        <header className="flex justify-between">
          <Link href={`/detail/${menu.id_menu}`}>
            <h4 className="text-neutral-200">{menu.name}</h4>
          </Link>
          <span className="text-neutral-400">S/{menu.price}</span>
        </header>
        <div className="flex justify-between">
          <p className="text-neutral-400">Cantidad: {menu.quantity}</p>
          <button className="text-neutral-400 hover:text-red-400">
            <Trash menu={menu} />
          </button>
        </div>
      </section>
    </li>
  );
}

export default CarMenuCart;
