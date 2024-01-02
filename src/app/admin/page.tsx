import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <header>
        <h1 className="text-2xl text-center text-orange-800 py-4">Dashboard</h1>
      </header>
      <section className="fadeIn">
        <nav className="grid grid-cols-2 gap-4">
          <Link href={"/admin/menus"}>
            <div className="aspect-square flex justify-center items-center bg-orange-100 hover:bg-orange-200 rounded-2xl transition-colors">
              <h2 className="text-2xl text-orange-800">Menus</h2>
            </div>
          </Link>
          <Link className="text-orange-600" href={"/admin/orders"}>
            <div className="aspect-square flex justify-center items-center bg-orange-100 hover:bg-orange-200 rounded-2xl transition-colors">
              <h2 className="text-2xl text-orange-800">Ordenes</h2>
            </div>
          </Link>
          <Link className="text-orange-600" href={"/admin/categories"}>
            <div className="aspect-square flex justify-center items-center bg-orange-100 hover:bg-orange-200 rounded-2xl transition-colors">
              <h2 className="text-2xl text-orange-800">Categorias</h2>
            </div>
          </Link>
        </nav>
      </section>
    </>
  );
}
