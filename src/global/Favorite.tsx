"use client";
import { createContext, useState } from "react";

export const FavoriteContext = createContext({})

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorite, setFavorite] = useState([]);

  /*   const addToFavorite = (menu) => {
      const productInCartIndex = favorite.findIndex(
        (item) => item.id_menu === product.id_menu
      ); */

  const addToFavorite = (menu) => {
    console.log(menu, 11)
    const productInCartIndex = favorite.findIndex(item => item.id_menu === menu.id_menu)

    if (productInCartIndex == -1) setFavorite(prevState => ([...prevState, menu]))

  }

  const removeToFavorite = menu => {
    console.log(menu, 19)
    setFavorite(prev => prev.filter(item => item.id_menu !== menu.id_menu))
  }
  const clearFavorite = () => setFavorite([])


  return (
    <FavoriteContext.Provider value={{ addToFavorite, removeToFavorite, favorite, clearFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}


export default FavoriteProvider;
