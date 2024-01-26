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
      className="relative aspect-video rounded-xl overflow-hidden"
      style={{ animationDelay: `0.${delay}s` }}
    >
      <Link href={`/detail/${menu.id_menu}`}>
        <img
          className="object-cover w-full h-full hover:scale-105 transition-transform"
          src={menu.url}
          alt={menu.name}
        />
        <section className="bg-neutral-900/90 backdrop-blur-3xl absolute bottom-0 inset-x-0 p-3">
          <h4 className="text-neutral-200">{menu.name}</h4>
          <p className="text-neutral-400">S/ {menu.price}</p>
        </section>
      </Link>
      <div className="absolute bottom-5 right-5">
        <AddToFavorite menu={menu} />
      </div>
    </li>
  );
}

export default CardMenu;
