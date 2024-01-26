import Link from "next/link";

export default function Page() {
  return (
    <>
      <header>
        <h1 className="text-2xl text-center md:text-start text-orange-200 py-4">
          Dashboard
        </h1>
      </header>
      <section className="fadeIn">
        <nav className="flex flex-col md:flex-row gap-4">
          <Link href={"/admin/menus"}>
            <div className="p-8 md:p-16 h-full flex justify-center items-center bg-orange-200 hover:bg-orange-300 rounded-2xl transition-colors">
              <h2 className="text-3xl text-orange-800">Menus</h2>
            </div>
          </Link>
          <Link href={"/admin/orders"}>
            <div className="p-8 md:p-16 h-full flex justify-center items-center bg-green-200 hover:bg-green-300 rounded-2xl transition-colors">
              <h2 className="text-3xl text-green-800">Ordenes</h2>
            </div>
          </Link>
          <Link href={"/admin/categories"}>
            <div className="p-8 md:p-16 h-full flex justify-center items-center bg-rose-200 hover:bg-rose-300 rounded-2xl transition-colors">
              <h2 className="text-3xl text-rose-800">Categorias</h2>
            </div>
          </Link>
          <Link href={"/home"}>
            <div className="p-8 md:p-16 h-full flex justify-center items-center bg-lime-200 hover:bg-lime-300 rounded-2xl transition-colors">
              <h2 className="text-3xl text-lime-800">Panel Cliente</h2>
            </div>
          </Link>
        </nav>
      </section>
    </>
  );
}
