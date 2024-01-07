"use client";

import { useMenu } from "@/global/MenuFilterContext";
import { CategoryI } from "@/lib/definitions";

function UserCategory() {
  const { filterByCategory, categorySelect, categories } = useMenu();

  if (categories.length === 0)
    return (
      <>
        <div className="bg-neutral-600 h-8 w-16 rounded-full animate-pulse"></div>
        <div className="bg-neutral-600 h-8 w-16 rounded-full animate-pulse"></div>
        <div className="bg-neutral-600 h-8 w-16 rounded-full animate-pulse"></div>
      </>
    );

  return categories.map(({ id_category, name }: CategoryI) => (
    <div
      onClick={() => filterByCategory(name)}
      key={id_category}
      className={`bg-${
        categorySelect === name ? "second" : "third"
      } text-fourth py-1 px-6 rounded-2xl cursor-pointer `}
    >
      {name}
    </div>
  ));
}

export default UserCategory;
