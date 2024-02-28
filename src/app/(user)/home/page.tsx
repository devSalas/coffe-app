import Search from "@/components/Home/Search";
import MenusList from "./menus-list";
import { Suspense } from "react";
import CategoriesList from "./categories-list";

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

  return (
    <div className="flex flex-col gap-7 ">
      <Search />
      <Suspense
        key={"categories"}
        fallback={
          <div className="flex gap-2 overflow-x-auto">
            <div className="bg-neutral-800 w-20 h-10 rounded-full "></div>
            <div className="bg-neutral-800 w-20 h-10 rounded-full "></div>
            <div className="bg-neutral-800 w-20 h-10 rounded-full "></div>
          </div>
        }
      >
        <CategoriesList />
      </Suspense>

      <Suspense
        key={"menus"}
        fallback={
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-neutral-800 aspect-[4/3] rounded-3xl fadeIn animate-pulse"></div>
            <div className="bg-neutral-800 aspect-[4/3] rounded-3xl fadeIn animate-pulse"></div>
            <div className="bg-neutral-800 aspect-[4/3] rounded-3xl fadeIn animate-pulse"></div>
          </ul>
        }
      >
        <MenusList search={search} category={category} />
      </Suspense>
    </div>
  );
}
