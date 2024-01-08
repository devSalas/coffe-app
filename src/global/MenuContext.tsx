"use client";
import { getCategories, getMenus } from "@/lib/data";
import { CategoryI, MenuI } from "@/lib/definitions";
import { createContext, useContext, useState, useEffect } from "react";

const MenuContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

export const MenuProvider = ({ children }: Props) => {
  const [menus, setMenus] = useState<MenuI[]>([]);
  const [filteredMenus, setFilteredMenus] = useState<MenuI[]>([]);
  const [categories, setCategories] = useState<CategoryI[]>([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    getMenus().then((res) => {
      setMenus(res.data);
      setFilteredMenus(res.data);
    });
    getCategories().then((res: any) => {
      setCategories(res.data);
    });
  }, []);

  const filterByCategory = (category: string) => {
    if (category === "all") {
      setFilteredMenus(menus);
    } else {
      const result = menus?.filter((menu) => menu.category.name === category);
      setFilteredMenus(result);
    }

    setCategory(category);
  };

  const search = (term: string) => {
    if (term === "") return setFilteredMenus(menus);
    const result = menus?.filter(({ name }) => {
      return name.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredMenus(result);
  };

  return (
    <MenuContext.Provider
      value={{
        menus: filteredMenus,
        categories,
        filterByCategory,
        categorySelect: category,
        search,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export function useMenu() {
  const context = useContext(MenuContext);

  if (context == undefined) {
    throw new Error("useMenu must be used within a MenuProvidder");
  }
  return context;
}
