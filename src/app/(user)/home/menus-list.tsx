import { getMenus } from "@/lib/data";
import MenuCard from "@/components/Home/MenuCard";

interface MenusListProps {
  search: string;
  category: string;
}

export default async function MenusList({ search, category }: MenusListProps) {
  const menus = await getMenus({ search, category });

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {menus?.map((menu, i) => (
        <MenuCard key={menu.id_menu} menu={menu} delay={i} />
      ))}
    </ul>
  );
}
