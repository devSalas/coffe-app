import { getCategories } from "@/api/fetch";
import React from "react";
import { CategoryI } from "@/types";
import Table from "@/components/Table/Table";
import TableHead from "@/components/Table/TableHead";
import TableCell from "@/components/Table/TableCell";

export default async function Page() {
  const res = await getCategories();

  const categories: CategoryI[] = res.data;

  // console.log(categories);

  return (
    <div>
      <h1 className="text-2xl py-4">Categorias</h1>
      <section>
        <Table>
          <thead>
            <tr className="bg-gray-100">
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
            </tr>
          </thead>
          <tbody>
            {categories.map(({ id_category, name }) => (
              <tr key={id_category} className="border-b">
                <TableCell>{id_category}</TableCell>
                <TableCell>{name}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
}
