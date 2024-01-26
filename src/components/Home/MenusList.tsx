"use client";

import { MenuI } from "@/lib/definitions";
import MenuCard from "./MenuCard";
import { useMenu } from "@/global/MenuContext";

function CardContainer() {
  const { menus } = useMenu();

  if (menus.length === 0)
    return (
      <div className="grid md:grid-cols-3 gap-3 py-4">
        <div className="bg-neutral-600 rounded-xl animate-pulse h-52"></div>
        <div className="bg-neutral-600 rounded-xl animate-pulse h-52"></div>
        <div className="bg-neutral-600 rounded-xl animate-pulse h-52"></div>
      </div>
    );

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-4">
      {menus.map((menu: MenuI, i: number) => (
        <MenuCard key={menu.id_menu} menu={menu} delay={i} />
      ))}
    </ul>
  );
}

export default CardContainer;
