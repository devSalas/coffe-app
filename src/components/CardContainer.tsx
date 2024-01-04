import CardMenu from "./CardMenu";
import { MenuI } from "@/lib/definitions";

function CardContainer({ menus }: { menus: MenuI[] }) {
  console.log(menus);
  return (
    <div className="grid grid-cols-responsive gap-2 py-4">
      {menus.map((menu) => (
        <CardMenu key={menu.id_menu} menu={menu} />
      ))}
    </div>
  );
}

export default CardContainer;
