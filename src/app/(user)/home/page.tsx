import Menu from "@/components/Menu";
import Navbar from "@/components/UserNavbar";
import { getCategories, getMenus } from "@/lib/data";
import HeaderHome from "@/components/HeaderHome";

async function Home() {
  const { data: categories } = await getCategories();
  console.log(categories);
  const { data: menus } = await getMenus();

  return (
    <div className="w-full">
      <HeaderHome />
      <div className="mb-4">
        <h2 className="text-2xl">Bienvenido/a</h2>
      </div>
      <Menu menus={menus} categories={categories} />
      <Navbar />
    </div>
  );
}

export default Home;
