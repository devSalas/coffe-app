import Counter from "@/components/Counter";
import { getMenu } from "@/lib/data";
import Link from "next/link";

//counter context
import ButtonAddCart from "../../../../components/Detail/ButtonAddCart";
import AddToFavorite from "../../../../components/favorites/AddToFavorite";

export async function generateMetadata({ params }: any) {
  const { data: menu } = await getMenu(params.id);

  return {
    title: `${menu.name}`,
  };
}

async function MenuId({ params }: any) {
  const { data: menu } = await getMenu(params.id);

  console.log("--> menu", menu);

  return (
    <>
      <section className="grid md:grid-cols-2 gap-8">
        <figure>
          <img
            className="w-full h-full object-contain object-top"
            src={menu.url}
            alt={menu.name}
          />
        </figure>

        <section className="flex flex-col gap-4">
          <header className="flex justify-between items-center ">
            <h2 className="text-fourth text-2xl">{menu.name}</h2>
            <AddToFavorite menu={menu} />
          </header>

          <h3 className="text-fourth">Descripcion</h3>
          <p className="text-sm text-neutral-400">{menu.description}</p>
          <p className="text-sm text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            maxime itaque corporis non labore rerum delectus nobis placeat
            porro, iste, deleniti nisi est? Laudantium illo architecto mollitia
            ad, ex laborum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <div className="flex gap-3 items-center">
            <p className="text-neutral-300">Cantidad:</p>
            <Counter size="large" />
          </div>

          <div className="flex gap-3">
            <p className="text-fourth">
              <span className="block text-xs align-bottom sm:text-base">
                Precio
              </span>
              <span className="pl-3 sm:text-lg">s/{menu.price || 0}</span>
            </p>

            <ButtonAddCart menu={menu} />
          </div>
        </section>
      </section>
    </>
  );
}

export default MenuId;
