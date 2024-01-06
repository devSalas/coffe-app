"use client";

import { useState } from "react";
import CardContainer from "./CardContainer";
import UserCategory from "./UserCategory";
import useSearch from "@/hooks/useSearch";

import { MenuI, CategoryI } from "@/lib/definitions";

function Menu({ menus, categories, }: {
  menus: MenuI[]; categories: CategoryI[];
}) {
  const { searchTerm, data, handleSearchChange } = useSearch(menus);
  const [filters, setFilter] = useState({
    category: "all",
  });
  const handleClick = (categoryName: any) => {
    setFilter((prev) => ({ ...prev, category: categoryName }));
  };

  const filterMenu = (menus: MenuI[]) => {
    console.log(filters.category);
    return menus.filter((menu) => {
      if (filters.category == "all") {
        return menu;
      }
      return menu.category.name == filters.category;
    });
  };
  const filteredMenus = filterMenu(data);

  const modifyCategories = [{ name: "all" }, ...categories];
  return (
    <>
      <div className="mb-4  ">
        <input
          onChange={handleSearchChange}
          value={searchTerm}
          type="text"
          placeholder="buscar...."
          className="bg-third w-full rounded-md p-2"
        />
      </div>
      <div className="flex gap-4 overflow-hidden">
        <UserCategory
          categories={modifyCategories}
          handleClickCategory={handleClick}
        />
      </div>
      <CardContainer menus={filteredMenus} />
    </>
  );
}

export default Menu;
