"use client";

import { deleteCategory, getCategories } from "@/lib/data";
import React, { useState, useEffect } from "react";
import { CategoryI } from "@/lib/definitions";
import Table from "@/components/Table/Table";
import TableHead from "@/components/Table/TableHead";
import TableCell from "@/components/Table/TableCell";
import Header from "@/components/Admin/Header";
import Link from "next/link";
import Plus from "@/components/icons/Plus";
import { useSesion } from "@/global/sesion";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [categories, setCategories] = useState<CategoryI[]>([]);

  const { token } = useSesion();
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleClick = async (categoryId: any) => {
    await deleteCategory(categoryId, token);

    const newCategories = categories.filter(
      (c) => c.id_category !== categoryId
    );
    setCategories(newCategories);

    toast.success("menu eliminado");
  };

  return (
    <div>
      <Header title="Categorias" />
      <div className="flex justify-end py-2">
        <Link
          className="bg-orange-300 hover:bg-orange-200 text-orange-800 text-sm py-2 px-3 rounded transition-colors flex items-center gap-2"
          href={"/admin/categories/add"}
        >
          Añadir
          <Plus />
        </Link>
      </div>
      <section className="fadeIn">
        <Table>
          <thead>
            <tr className="bg-orange-100">
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead></TableHead>
            </tr>
          </thead>
          <tbody>
            {categories?.map(({ id_category, name }) => (
              <tr key={id_category} className="border-b">
                <TableCell>{id_category}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>
                  <div>
                    <Link
                      className="p-2 text-sm text-center text-orange-800 hover:underline rounded"
                      href={`/admin/categories/edit/${id_category}`}
                    >
                      Editar
                    </Link>
                    <button
                      className="bg-red-400 text-sm hover:bg-red-500 p-2 text-white rounded"
                      onClick={() => handleClick(id_category)}
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
      <Toaster />
    </div>
  );
}
