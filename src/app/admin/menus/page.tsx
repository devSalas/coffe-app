import { getMenus } from "@/api/fetch";
import React from "react";
import { MenuI } from "@/types";
import Table from "@/components/Table/Table";
import TableHead from "@/components/Table/TableHead";
import TableCell from "@/components/Table/TableCell";
import Link from "next/link";

export default async function Page() {
  const res = await getMenus();

  const menus: MenuI[] = res.data;

  // console.log(menus);

  return (
    <div>
      <h1 className="text-2xl py-4">Menus</h1>
      <Link className="text-orange-500" href={"/admin/menus/add"}>
        Crea un menu
      </Link>
      <section>
        <Table>
          <thead>
            <tr className="bg-gray-100">
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
            </tr>
          </thead>
          <tbody>
            {menus.map(({ id_menu, name, description, price }) => (
              <tr key={id_menu} className="border-b">
                <TableCell>{id_menu}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>{price}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
}
