"use client";

import { getMenus, deleteMenu } from "@/api/fetch";
import React, { useState, useEffect } from "react";
import { MenuI } from "@/types";
import Table from "@/components/Table/Table";
import TableHead from "@/components/Table/TableHead";
import TableCell from "@/components/Table/TableCell";
import Link from "next/link";
import { useSesion } from "@/global/sesion";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [menus, setMenus] = useState<MenuI[]>([]);

  const { token } = useSesion();

  useEffect(() => {
    getMenus().then((res) => {
      setMenus(res.data);
    });
  }, []);

  const handleClick = async (menuId: any) => {
    await deleteMenu(menuId, token);

    const newMenus = menus.filter((menu) => menu.id_menu !== menuId);

    setMenus(newMenus);

    toast.success("menu eliminado");
  };

  return (
    <div>
      <header className="flex justify-between items-center gap-4 py-2">
        <Link
          className="text-orange-800 hover:text-orange-600 text-lg flex items-center gap-2 py-2 transition-colors"
          href={"/admin"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Menus
        </Link>
        <Link
          className="bg-orange-300 hover:bg-orange-400 text-orange-800 text-sm py-2 px-3 rounded transition-colors"
          href={"/admin/menus/add"}
        >
          Crea un menu
        </Link>
      </header>
      <section className="hidden md:block">
        <Table>
          <thead>
            <tr className="bg-orange-100">
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Acciones</TableHead>
            </tr>
          </thead>
          <tbody>
            {menus?.map(({ id_menu, name, description, price }) => (
              <tr key={id_menu} className="border-b">
                <TableCell>{id_menu}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>S/{price}</TableCell>
                <TableCell>
                  <div className="flex md:flex-row flex-col gap-1">
                    <Link
                      className="bg-neutral-400 p-2 text-center text-white rounded"
                      href={`/admin/menus/edit/${id_menu}`}
                    >
                      Editar
                    </Link>
                    <button
                      className="bg-red-500 p-2 text-white rounded"
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
          {menus?.map(({ id_menu, name, description, price }) => (
            <li
              key={id_menu}
              className="bg-orange-100 p-4 rounded-lg h-40 flex flex-col gap-2"
            >
              <header className="flex justify-between text-orange-800">
                <h4 className="text-lg">{name}</h4>
                <p>S/ {price}</p>
              </header>
              <p className="flex-1 text-sm text-orange-600">{description}</p>
              <div className="flex justify-end gap-2">
                <Link
                  className="p-2 text-center text-orange-800 hover:underline rounded"
                  href={`/admin/menus/edit/${id_menu}`}
                >
                  Editar
                </Link>
                <button
                  className="bg-red-400 hover:bg-red-500 p-2 text-white rounded"
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
    </div>
  );
}
