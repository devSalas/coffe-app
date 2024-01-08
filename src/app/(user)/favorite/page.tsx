"use client";

import CardFavorite from "@/components/favorites/CardFavorite";
import ArrowLeft from "@/components/icons/ArrowLeft";
import useFavorite from "@/hooks/useFavorite";
import { MenuI } from "@/lib/definitions";
import Link from "next/link";

function Favorite() {
  const { favorites, removeToFavorite } = useFavorite();

  const handleclickRemove = (menu: MenuI) => {
    if (menu != undefined) {
      removeToFavorite(menu);
    }
  };

  return (
    <>
      <section className="flex items-center gap-2 text-second pb-8">
        <Link href="/home" className="md:hidden">
          <ArrowLeft />
        </Link>
        <h2 className="text-2xl">Comidas Favoritas</h2>
      </section>
      <ul className="flex flex-col gap-3">
        {favorites.length > 0 ? (
          favorites?.map((item: MenuI) => (
            <CardFavorite
              key={item.id_menu}
              menu={item}
              handleclickRemove={handleclickRemove}
            />
          ))
        ) : (
          <div className="w-full text-sm bg-slate-700 text-white p-4 rounded-lg">
            No hay Favoritos 😥
          </div>
        )}
      </ul>
    </>
  );
}

export default Favorite;
