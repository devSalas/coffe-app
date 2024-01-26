import Link from "next/link";
import { MenuI } from "@/lib/definitions";
import { clsx } from "clsx";
import AddToFavorite from "@/components/favorites/AddToFavorite";

interface Props {
  menu: MenuI;
  delay: number;
}

function CardMenu({ menu, delay }: Props) {
  return (
    <div className="relative ">
      <div className="absolute z-10 top-2 right-2">
        <AddToFavorite menu={menu} />
      </div>
      <li
        className="relative  group animate-fade-up animate-duration-200"
        style={{ animationDelay: `.${delay}s` }}
      >
        <Link
          href={`/detail/${menu.id_menu}`}
          className="bg-third  text-fourth rounded-xl flex flex-col overflow-hidden"
        >
          <figure className="h-32 overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              src={menu.url}
              alt={menu.name}
            />
          </figure>
          <div className="bg-neutral-900 p-3">
            <p className="text-xl capitalize mb-4">{menu.name}</p>
            <div className="flex justify-between items-end">
            <p className="text-xl text-second font-light ">S/{menu.price}</p>
             <p className="text-md lg:text-lg bg-second/90  py-2 px-7 rounded-full">ordenar </p>
            </div>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardMenu;
