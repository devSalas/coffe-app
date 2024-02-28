"use client";

import CardFavorite from "@/components/favorites/CardFavorite";
import useFavorite from "@/hooks/useFavorite";
import { MenuI } from "@/lib/definitions";

function Favorite() {
  const { favorites } = useFavorite();

  return (
    <div className="favorito sm:flex sm:flex-col  sm:gap-3 w-full">
      <h2 className="text-2xl text-neutral-200">Comidas Favoritas</h2>
      <ul className="grid lg:grid-cols-2 gap-3">
        {favorites.length > 0 ? (
          favorites?.map((item: MenuI) => (
            <CardFavorite key={item.id_menu} menu={item} />
          ))
        ) : (
          <div className="w-full text-sm bg-slate-700 text-white p-4 rounded-lg">
            No hay Favoritos 😥
          </div>
        )}
      </ul>
    </div>
  );
}

export default Favorite;
