import Counter from "@/components/Counter";
import { getMenu } from "@/lib/data";
import Link from "next/link";

//counter context
import ButtonAddCart from "./ButtonAddCart";
import AddToFavorite from "./AddToFavorite";

async function MenuId({ params }: any) {
  const { data: menu } = await getMenu(params.id);

  console.log("--> menu", menu);

  return (
    <section className="flex sm:pt-4">
      <section className="relative md:flex ">
        <header className="absolute top-0 left-0 w-full flex justify-between p-4">
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
          <AddToFavorite menu={menu} />
        </header>

        <figure className="sm:max-w-96 flex justify-center items-center">
          <img className="sm:m-auto" src={menu.url} alt={menu.name} />
        </figure>

        <section className="md:w-96 md:py-16">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-fourth text-2xl">{menu.name}</h2>
            <Counter size="large" />
          </div>

          <div className="">
            <h3 className="ml-4 text-fourth">Descripcion</h3>
            <p className="p-4  text-sm  text-slate-400 ">
              {menu.description || "no hay informacion"}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              maxime itaque corporis non labore rerum delectus nobis placeat
              porro, iste, deleniti nisi est? Laudantium illo architecto
              mollitia ad, ex laborum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam, facere nobis! Exercitationem nihil sed
              vel enim maxime temporibus consectetur, voluptates ipsa similique
              ipsum excepturi nam cupiditate id sit aperiam. Ab. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Et molestiae
              excepturi nam ratione, hic illum commodi amet laudantium. Pariatur
              quos ipsam mollitia aspernatur deserunt impedit ab sapiente
              doloremque consequuntur voluptate!
            </p>
          </div>

          <div className=" p-4 flex items-end w-full gap-2 sm:gap-8 relative bottom-0 text-fourth grow ">
            <p className="">
              <span className="block text-xs align-bottom sm:text-base">
                Precio
              </span>
              <span className="pl-3 sm:text-lg">s/{menu.price || 0}</span>
            </p>

            <ButtonAddCart menu={menu} />
          </div>
        </section>
      </section>
    </section>
  );
}

export default MenuId;
