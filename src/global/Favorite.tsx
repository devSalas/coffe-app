"use client";
import { createContext, useState } from "react";

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorite, setFavorite] = useState([]);

  const addToFavorite = (menu) => {
    const productInCartIndex = favorite.findIndex(
      (item) => item.id_menu === product.id_menu
    );

    if (!(productInCartIndex >= 0))
      setFavorite((prevState) => [...prevState, menu]);
  };

  const removeToCart = (product) => {
    setFavorite((prev) =>
      prev.filter((item) => item.id_menu !== product.menu.id_menu)
    );
  };
  const clearFavorite = () => setFavorite([]);

  return (
    <FavoriteContext.Provider
      value={{ addToFavorite, removeToCart, favorite, clearFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
