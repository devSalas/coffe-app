import AddToFavorite from "@/app/(user)/detail/[id]/AddToFavorite";
import { MenuI } from "@/lib/definitions";
import Link from "next/link";

interface PropsValue {
  menu: MenuI;
  handleclickRemove: (menu: MenuI) => void;
}

function CardFavorite({ menu, handleclickRemove }: PropsValue) {
  return (
    <div className="w-full min-h-20 flex justify-between items-center text-white bg-neutral-800 p-4 rounded-lg">
      <div className="flex gap-4 items-center grow">
        <Link href={`/detail/${menu.id_menu}`}>
          <figure className="w-40 h-32">
            <img
              className="w-full h-full object-cover"
              src={menu.url}
              alt={menu.name}
            />
          </figure>
        </Link>
        <div>
          <Link href={`/detail/${menu.id_menu}`}>
            <h3 className="text-xl capitalize mb-4">{menu.name}</h3>
          </Link>
          <span>S/{menu.price}</span>
        </div>
      </div>
      <AddToFavorite menu={menu} />
    </div>
  );
}

export default CardFavorite;
