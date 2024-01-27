import Counter from "@/components/Counter";
import { getMenuById } from "@/lib/data";

//counter context
import ButtonAddCart from "@/components/Detail/ButtonAddCart";
import AddToFavorite from "@/components/favorites/AddToFavorite";
import Link from "next/link";
import ArrowLeft from "@/components/icons/ArrowLeft";

export async function generateMetadata({ params }: any) {
  const menu = await getMenuById(params.id);

  return {
    title: `${menu?.name}`,
  };
}

export default async function MenuPage({ params }: { params: { id: string } }) {
  const menu = await getMenuById(params.id);

  if (!menu) return <div></div>;

  return (
    <div className=" flex flex-col gap-6">
      <div className="md:static fixed inset-0 -z-50">
        <img
          className="zoom-scroll md:rounded-3xl md:h-96 md:w-full object-cover"
          src={menu.url}
          alt={menu.name}
        />
      </div>
      <section className="md:static absolute inset-0 z-40 flex flex-col">
        {/* espacio en blanco */}
        <article className="aspect-video block md:hidden p-4">
          <Link
            className="w-10 h-10 rounded-full bg-white flex justify-center items-center"
            href={"/home"}
          >
            <ArrowLeft />
          </Link>
        </article>
        <div className="bg-black/80 backdrop-blur flex-1 p-4 rounded-t-3xl fadeIn grid md:grid-cols-2 gap-12">
          <article>
            <div className="flex justify-between">
              <h1 className="text-neutral-200 text-2xl">{menu.name}</h1>
              <AddToFavorite menu={menu} />
            </div>
            <p className="text-neutral-400 py-4">{menu.description}</p>
            <p className="text-neutral-400 py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              quisquam optio eveniet quam ducimus consectetur ea nulla dolor.
              Expedita aliquam itaque placeat, eveniet esse facere porro laborum
              tempore ullam facilis.
            </p>
          </article>
          <article>
            <div className="flex">
              <ButtonAddCart menu={menu} />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
