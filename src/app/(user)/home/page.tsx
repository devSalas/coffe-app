import Search from "@/components/Home/Search";
import UserCategory from "@/components/UserCategory";
import { getCategories, getMenus } from "@/lib/data";
import MenuCard from "@/components/Home/MenuCard";

export const metadata = {
  title: "Home",
  description: "Pagina de inicio",
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: { search: string; category: string };
}) {
  const search = searchParams.search || "";
  const category = searchParams.category || "";
  const menus = await getMenus({ search, category });
  const categories = await getCategories();

  return (
    <div className="flex flex-col gap-7 ">
      <Search />
      <UserCategory categories={categories} />

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {menus?.map((menu, i) => (
          <MenuCard key={menu.id_menu} menu={menu} delay={i} />
        ))}
      </ul>
    </div>
  );
}
