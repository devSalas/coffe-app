
import CardContainer from "@/components/CardContainer";
import Menu from "@/components/Menu";
import UserCategory from "@/components/UserCategory";
import Navbar from "@/components/UserNavbar";
import WelcomeUser from "@/components/WelcomeUser";
import Bell from "@/components/icons/Bell";
import MenuIcon from "@/components/icons/MenuIcon";
import { getCategories, getMenus } from "@/lib/data";

async function Home() {

    const {data:categories} = await getCategories()
    console.log(categories)
    const{data:menus} = await getMenus()

    return ( 
        <div className="py-4 w-full h-screen">
            <header className="flex justify-between mb-4">
                <MenuIcon/>
                <div>
                    SPRESSO
                </div>
                <Bell/>
            </header>
            <div className="mb-4">
                <p>Hola, Juana</p>
                <p>Bienvenido de Nuevo</p>
            </div>
            <div className="mb-4  ">
                <input type="text" placeholder="buscador...." className="bg-second w-full rounded-md p-2" />
            </div>
            <Menu menus={menus} categories={categories}/>
            <Navbar/>
        </div>
     );
}

export default Home;