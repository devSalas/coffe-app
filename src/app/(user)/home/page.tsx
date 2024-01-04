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
        <p>Hola, Juana</p>
        <p>Bienvenido de Nuevo</p>
      </div>
      <div className="mb-4  ">
        <input
          type="text"
          placeholder="buscador...."
          className="bg-second w-full rounded-md p-2"
        />
      </div>
      <Menu menus={menus} categories={categories} />
      <Navbar />
    </div>
  );
}

export default Home;
