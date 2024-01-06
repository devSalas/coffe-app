import Image from "next/image";
import Link from "next/link";
import { MenuI } from "@/lib/definitions";

function CardMenu({ menu }: { menu: MenuI }) {
  return (
    <Link
      href={`../detail/${menu.id_menu}`}
      className="min-h-40 aspect-[4/5] bg-third text-fourth rounded-xl grid grid-rows-5 overflow-hidden"
    >
      <figure className="w-full h-full flex justify-center items-center row-span-3">
        <Image
          className="w-full "
          src="/icono_menu.png"
          alt="image"
          width={50}
          height={50}
        />
      </figure>
      <div className="flex items-center justify-between gap-4 p-4 row-span-2">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">{menu.name}</p>
          <p className="text-xs font-light">S/ {menu.price}</p>
        </div>

        <div className=" ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7 bg-second text-fourth p-1 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default CardMenu;
