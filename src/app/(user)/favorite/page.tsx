"use client";

import CardFavorite from "@/components/CardFavorite";
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
      <div className="grow p-4">
        <div className=" flex justify-center items-center text-center relative mb-8">
          <Link
            href="/home"
            className="w-8 absolute left-0 rounded-full aspect-square bg-white sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
          </Link>
          <h2 className="text-second text-xl">Favorite</h2>
        </div>
        <div className="flex flex-col gap-4">
          {favorites.length > 0 ? (
            favorites?.map((item: MenuI) => (
              <CardFavorite
                key={item.id_menu}
                menu={item}
                handleclickRemove={handleclickRemove}
              />
            ))
          ) : (
            <div className="w-full  text-sm  bg-slate-700 text-white p-4 rounded-lg">
              No hay Favoritos 😥
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Favorite;
