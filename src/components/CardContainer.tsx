"use client";

import { MenuI } from "@/lib/definitions";
import CardMenu from "./CardMenu";
import { useMenu } from "@/global/MenuFilterContext";

function CardContainer() {
  const { menus } = useMenu();

  if (menus.length === 0)
    return (
      <div className="flex gap-2 py-4">
        <div className="bg-neutral-600 rounded animate-pulse w-40 h-40"></div>
        <div className="bg-neutral-600 rounded animate-pulse w-40 h-40"></div>
        <div className="bg-neutral-600 rounded animate-pulse w-40 h-40"></div>
      </div>
    );

  return (
    <div className="grid grid-cols-responsive gap-2 py-4">
      {menus.map((menu: MenuI) => (
        <CardMenu key={menu.id_menu} menu={menu} />
      ))}
    </div>
  );
}

export default CardContainer;
