"use client";
import { MenuI } from "@/lib/definitions";
import { createContext, ReactNode, useState, FC } from "react";

export const FavoriteContext = createContext<PropsValue | undefined>(undefined);

interface PropsValue {
  addToFavorite: (menu: MenuI) => void;
  removeToFavorite: (menu: MenuI) => void;
  favorites: MenuI[];
  isFavorite: (id: number) => Boolean;
  clearFavorite: () => void;
}

const FavoriteProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<MenuI[]>([]);

  const addToFavorite = (menu: MenuI) => {
    const productInCartIndex = favorites.findIndex(
      (item) => item.id_menu === menu.id_menu
    );

    if (productInCartIndex === -1)
      return setFavorites((prevState) => [...prevState, menu]);
    removeToFavorite(menu);
  };

  const removeToFavorite = (menu: MenuI) => {
    setFavorites((prev) =>
      prev.filter((item) => item.id_menu !== menu.id_menu)
    );
  };

  const clearFavorite = () => setFavorites([]);

  const isFavorite = (id: number): boolean => {
    return favorites.some((favorite) => favorite.id_menu === id);
  };

  return (
    <FavoriteContext.Provider
      value={{
        addToFavorite,
        removeToFavorite,
        favorites,
        clearFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
