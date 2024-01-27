"use client";

import Link from "next/link";
import { CategoryI } from "@/lib/definitions";
import { useSearchParams } from "next/navigation";

function UserCategory({ categories }: { categories: CategoryI[] | null }) {
  const searchParams = useSearchParams();

  /* if (categories.length === 0)
    return (
      <>
        <div className="bg-neutral-600 h-8 w-16 rounded-full animate-pulse"></div>
        <div className="bg-neutral-600 h-8 w-16 rounded-full animate-pulse"></div>
        <div className="bg-neutral-600 h-8 w-16 rounded-full animate-pulse"></div>
      </>
    ); */

  return (
    <div className="flex gap-2 overflow-x-scroll">
      <Link
        href={`/home`}
        className={`bg-${
          searchParams.getAll("category").length === 0 ? "second" : "third"
        } text-fourth py-2 px-6 rounded-full`}
      >
        all
      </Link>
      {categories?.map(({ id_category, name }) => (
        <Link
          key={id_category}
          href={`?category=${name}`}
          className={`bg-${
            searchParams.get("category") === name ? "second" : "third"
          } text-fourth py-2 px-6 rounded-full`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}

export default UserCategory;
