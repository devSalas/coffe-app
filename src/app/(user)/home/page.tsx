import Menu from "@/components/Menu";
import { getCategories, getMenus } from "@/lib/data";
import HeaderHome from "@/components/HeaderHome";

async function Home() {
  const { data: categories } = await getCategories();
  console.log(categories);
  const { data: menus } = await getMenus();

  return (
    <div className="w-full sm:flex sm:h-screen sm:py-4  ">
      <div className="grow sm:px-4">
        <HeaderHome />
        <div className="mb-4">
          <h2 className="text-2xl">Bienvenido/a</h2>
        </div>
        <Menu menus={menus} categories={categories} />
      </div>
    </div>
  );
}

export default Home;
