import Link from "next/link";
import { MenuI } from "@/lib/definitions";
import AddToFavorite from "@/components/favorites/AddToFavorite";

interface Props {
  menu: MenuI;
  delay: number;
}

function CardMenu({ menu, delay }: Props) {
  return (
    <li
      className="relative aspect-[4/3] rounded-xl overflow-hidden fadeIn"
      style={{ animationDelay: `0.${delay}s` }}
    >
      <Link href={`/detail/${menu.id_menu}`}>
        <img
          className="object-cover w-full h-full hover:scale-105 transition-transform ease-in-out duration-300"
          src={menu.url}
          alt={menu.name}
        />
        <section className="bg-neutral-900 absolute bottom-0 inset-x-0 p-3">
          <h4 className="text-neutral-200 text-lg capitalize mb-2">
            {menu.name}
          </h4>
          <div className="flex justify-between items-end">
          <p className="text-neutral-300 md:text-2xl">S/ {menu.price}</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full">
              Ordenar
            </button>
          </div>
        </section>
      </Link>
      <div className="absolute top-2 right-2">
        <AddToFavorite menu={menu} />
      </div>
    </li>
  );
}

export default CardMenu;
