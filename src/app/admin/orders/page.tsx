import { getOrders } from "@/lib/data";
import React from "react";
import { OrderI } from "@/lib/definitions";
import Table from "@/components/Table/Table";
import TableHead from "@/components/Table/TableHead";
import TableCell from "@/components/Table/TableCell";

export default async function Page() {
  const res = await getOrders();

  const orders: OrderI[] = res.data;

  console.log(orders);

  return (
    <div>
      <h1 className="text-2xl py-4">Ordenes</h1>
      <section className="overflow-x-scroll">
        <Table>
          <thead>
            <tr className="bg-gray-100">
              <TableHead>ID</TableHead>
              <TableHead>Menu</TableHead>
              <TableHead>Usuario</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Total price</TableHead>
              <TableHead>state</TableHead>
              <TableHead>Payment method</TableHead>
            </tr>
          </thead>
          <tbody>
            {orders.map(({ id_order, menu, user }) => (
              <tr key={id_order} className="border-b">
                <TableCell>{id_order}</TableCell>
                <TableCell>{menu.name}</TableCell>
                <TableCell>{user.name}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
}
