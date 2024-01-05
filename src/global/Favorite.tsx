/* "use client";
import { MenuI } from "@/lib/definitions";
import { createContext, useState } from "react";

export const FavoriteContext = createContext({})

interface PropsValue{
  addToFavorite:()=>void
  removeToFavorite:()=>void
  favorite: MenuI[]
  clearFavorite: ()=>void
}

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorite, setFavorite] = useState<MenuI[]>([]);

  const addToFavorite = (menu:MenuI) : void => {
    console.log(menu, 11)
    const productInCartIndex = favorite.findIndex(item => item.id_menu === menu.id_menu)

    if (productInCartIndex == -1) setFavorite(prevState => ([...prevState, menu]))

  }

  const removeToFavorite = (menu:MenuI):void => {
    console.log(menu, 19)
    setFavorite(prev => prev.filter(item => item.id_menu !== menu.id_menu))
  }
  const clearFavorite = () => setFavorite([])


  return (
    <FavoriteContext.Provider value={{ addToFavorite, removeToFavorite, favorite, clearFavorite }: PropsValue}>
      {children}
    </FavoriteContext.Provider>
  )
}


export default FavoriteProvider;
 */
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
    console.log(menu, 11);
    const productInCartIndex = favorite.findIndex(
      (item) => item.id_menu === menu.id_menu
    );

    if (productInCartIndex === -1)
      setFavorite((prevState) => [...prevState, menu]);
  };

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