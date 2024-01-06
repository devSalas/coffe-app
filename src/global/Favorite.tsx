"use client";
import { MenuI } from "@/lib/definitions";
import { createContext, ReactNode, useState, FC } from "react";

export const FavoriteContext = createContext<PropsValue>({
  addToFavorite: () => { },
  removeToFavorite: () => { },
  favorite: [],
  clearFavorite: () => { },
});

interface PropsValue {
  addToFavorite: (menu: MenuI) => void;
  removeToFavorite: (menu: MenuI) => void;
  favorite: MenuI[];
  clearFavorite: () => void;
}

const FavoriteProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [favorite, setFavorite] = useState<MenuI[]>([]);

  const addToFavorite = (menu: MenuI): void => {
    const productInCartIndex = favorite.findIndex(
      (item) => item.id_menu === menu.id_menu
    );

    if (productInCartIndex === -1) return setFavorite((prevState) => [...prevState, menu]);
     removeToFavorite(menu)
  }

  const removeToFavorite = (menu: MenuI): void => {
    setFavorite((prev) => prev.filter((item) => item.id_menu !== menu.id_menu));
  };

  const clearFavorite = (): void => setFavorite([]);

  return (
    <FavoriteContext.Provider
      value={{ addToFavorite, removeToFavorite, favorite, clearFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;