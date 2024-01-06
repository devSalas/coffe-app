"use client";
import Counter from "@/components/Counter";
import useCart from "@/hooks/useCart";
import useCounter from "@/hooks/useCounter";
import { getMenu } from "@/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Loading from "@/components/Loading";
import useFavorite from "@/hooks/useFavorite";
import { MenuI } from "@/lib/definitions";
import Navbar from "@/components/UserNavbar";

function MenuId() {
  const params = useParams();
  const [menu, setMenu] = useState<MenuI>();
  const { counter, increaseCounter, decreaseCounter, setNumberToCounter } =
    useCounter();

  const { cart, addToCart } = useCart();
  const { favorite, addToFavorite } = useFavorite()
  const id = Array.isArray(params) ? params[0].id : params.id;

  useEffect(() => {
    const getData = async () => {
      const res = await getMenu(id);
      console.log(res);
      const menuFound = cart.find(
        (item: any) => item.id_menu == res.data.id_menu
      );
      if (menuFound) {
        console.log(menuFound.quantity);
        setNumberToCounter(menuFound.quantity);
      }
      setMenu(res.data);
    };
    getData();
  }, []); 

  const handleclickFavorite = () => {
    if (menu != undefined) addToFavorite(menu)
  }

  const handleclick = () => {
    if (menu != undefined) addToCart(menu, counter)

  };

  if (menu == null) return <Loading />;

  return (
    <div className="flex ">
      <Navbar/>
      <div className="absolute left-0 right-0  w-screen min-h-full sm:relative  sm:min-h-max flex flex-col bg-black sm:p-4">
        <figure className="relative w-full mb-4 ">
          <div className="absolute w-full flex  justify-between px-4 py-6 ">
            <Link
              href="/home"
              className="w-8 rounded-full aspect-square bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
              </svg>
            </Link>
            <button onClick={handleclickFavorite} className={`${favorite.includes(menu) ?'bg-blue-500' :""} w-8 rounded-full aspect-square bg-white`}>
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
              </svg>
            </button>
          </div>
          <img
            className="sm:m-auto"
            src="https://i.pinimg.com/564x/07/cf/ab/07cfab2d935720548b47829ff0026f8f.jpg"
            alt={menu.name}
          />
        </figure>
        <div className="flex justify-between p-4">
          <h2 className="text-fourth"> {menu.name}</h2>
          <Counter
            counter={counter}
            increaseCounter={increaseCounter}
            decreaseCounter={decreaseCounter}
            size="tall"
          />
        </div>

        <div className="overflow-hidden ">
          <h3 className="ml-4 text-fourth">Descripcion</h3>
          <p className="p-4  text-sm  text-slate-400 ">
            {menu.description || "no hay informacion"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime itaque corporis non labore rerum delectus nobis placeat porro, iste, deleniti nisi est? Laudantium illo architecto mollitia ad, ex laborum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, facere nobis! Exercitationem nihil sed vel enim maxime temporibus consectetur, voluptates ipsa similique ipsum excepturi nam cupiditate id sit aperiam. Ab.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae excepturi nam ratione, hic illum commodi amet laudantium. Pariatur quos ipsam mollitia aspernatur deserunt impedit ab sapiente doloremque consequuntur voluptate!
          </p>
        </div>

        <div className=" p-4 flex items-end w-full gap-2 sm:gap-8 relative bottom-0 text-fourth grow ">
          <p className="">
            <span className="block text-xs align-bottom sm:text-base">Precio</span>
            <span className="pl-3 sm:text-lg">s/{menu.price || 0}</span>
          </p>
          <Link
            onClick={handleclick}
            href="/cart"
            className="text-fourth bg-second rounded-lg py-4 text-center grow"
          >
            Agregar a carrito
          </Link>
        </div>
      </div>
    </div>

  );
}

export default MenuId;
