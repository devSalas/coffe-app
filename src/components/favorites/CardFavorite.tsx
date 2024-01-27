import AddToFavorite from "@/components/favorites/AddToFavorite";
import { MenuI } from "@/lib/definitions";
import Link from "next/link";

interface PropsValue {
  menu: MenuI;
}

function CardFavorite({ menu }: PropsValue) {
  return (
    <li className="w-full bg-neutral-800/80 backdrop-blur rounded overflow-hidden flex">
      <figure className="w-40 h-32">
        <Link href={`/detail/${menu.id_menu}`}>
          <img
            className="w-full h-full object-cover"
            src={menu.url}
            alt={menu.name}
          />
        </Link>
      </figure>
      <section className="flex-1 p-4">
        <header className="flex justify-between">
          <Link href={`/detail/${menu.id_menu}`}>
            <h3 className="text-neutral-200 capitalize">{menu.name}</h3>
          </Link>
          <AddToFavorite menu={menu} />
        </header>
        <span className="text-neutral-400">S/ {menu.price}</span>
      </section>
    </li>
  );
}

export default CardFavorite;
