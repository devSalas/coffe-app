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
    <div className="relative">
      <div className="absolute z-10 top-2 right-2">
        <AddToFavorite menu={menu} />
      </div>
      <li
        className="relative group animate-fade-up animate-duration-200"
        style={{ animationDelay: `.${delay}s` }}
      >
        <Link
          href={`/detail/${menu.id_menu}`}
          className="bg-third text-fourth rounded-xl flex flex-col overflow-hidden"
        >
          <figure className="h-32 overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              src={menu.url}
              alt={menu.name}
            />
          </figure>
          <div className="bg-neutral-900 p-3">
            <p className="capitalize mb-4">{menu.name}</p>
            <p className="text-xs font-light">S/{menu.price}</p>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardMenu;
