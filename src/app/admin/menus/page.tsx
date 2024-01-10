"use client";

import { getMenus, deleteMenu } from "@/lib/data";
import React, { useState, useEffect } from "react";
import { MenuI } from "@/lib/definitions";
import Table from "@/components/Table/Table";
import TableHead from "@/components/Table/TableHead";
import TableCell from "@/components/Table/TableCell";
import Link from "next/link";
import { useSesion } from "@/global/sesion";
import toast, { Toaster } from "react-hot-toast";
import Header from "@/components/Admin/Header";
import Plus from "@/components/icons/Plus";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const [menus, setMenus] = useState<MenuI[]>([]);

  const { token } = useSesion();

  const seachParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    getMenus(seachParams.get("search") ?? "").then((res) => {
      setMenus(res.data);
    });
  }, []);

  const handleClick = async (menuId: any) => {
    await deleteMenu(menuId, token);

    const newMenus = menus.filter((menu) => menu.id_menu !== menuId);
    setMenus(newMenus);

    toast.success("menu eliminado");
  };

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(seachParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    router.replace(`${pathname}?${params.toString()}`);

    getMenus(seachParams.get("search") ?? "").then((res) => {
      setMenus(res.data);
    });
  };

  return (
    <>
      <Header title="Menus" />
      <div className="flex gap-2 py-2">
        <input
          className="w-full p-2 border"
          type="search"
          placeholder="Search..."
          defaultValue={seachParams.get("search")?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Link
          className="bg-orange-300 hover:bg-orange-200 text-orange-800 text-sm py-2 px-3 rounded transition-colors flex items-center gap-2"
          href={"/admin/menus/add"}
        >
          Añadir
          <Plus />
        </Link>
      </div>
      <section>
        <section className="fadeIn hidden md:block">
          <Table>
            <thead>
              <tr className="bg-orange-100">
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Price</TableHead>
                <TableHead></TableHead>
              </tr>
            </thead>
            <tbody>
              {menus?.map(({ id_menu, name, description, category, price }) => (
                <tr key={id_menu} className="border-b">
                  <TableCell>{id_menu}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>S/{price}</TableCell>
                  <TableCell>
                    <div className="flex md:flex-row flex-col gap-1">
                      <Link
                        className="p-2 text-sm text-center text-orange-800 hover:underline rounded"
                        href={`/admin/menus/edit/${id_menu}`}
                      >
                        Editar
                      </Link>
                      <button
                        className="bg-red-400 text-sm hover:bg-red-500 p-2 text-white rounded"
                        onClick={() => handleClick(id_menu)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
        <section className="md:hidden">
          <ul className="flex flex-col gap-4">
            {menus?.map(({ id_menu, name, description, price }, i) => (
              <li
                key={id_menu}
                className="bg-orange-100 p-4 rounded-lg h-40 flex flex-col gap-2 fadeIn"
                style={{ animationDelay: `.${i}s` }}
              >
                <header className="flex justify-between text-orange-800">
                  <h4 className="text-lg">{name}</h4>
                  <p>S/ {price}</p>
                </header>
                <p className="flex-1 text-sm text-orange-600">{description}</p>
                <div className="flex justify-end gap-2">
                  <Link
                    className="p-2 text-sm text-center text-orange-800 hover:underline rounded"
                    href={`/admin/menus/edit/${id_menu}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="bg-red-400 text-sm hover:bg-red-500 p-2 text-white rounded"
                    onClick={() => handleClick(id_menu)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
            {menus.length === 0 && (
              <>
                <li className="bg-orange-100 p-4 rounded-lg animate-pulse h-40"></li>
                <li className="bg-orange-100 p-4 rounded-lg animate-pulse h-40"></li>
                <li className="bg-orange-100 p-4 rounded-lg animate-pulse h-40"></li>
              </>
            )}
          </ul>
        </section>
        <Toaster />
      </section>
    </>
  );
}
