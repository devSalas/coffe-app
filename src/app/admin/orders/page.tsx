"use client";

import React, { useState, useEffect } from "react";
import { getOrders } from "@/lib/data";
import { OrderI } from "@/lib/definitions";
import Table from "@/components/Table/Table";
import TableHead from "@/components/Table/TableHead";
import TableCell from "@/components/Table/TableCell";
import Header from "@/components/Header";

export default function Page() {
  const [orders, setOrders] = useState<OrderI[]>([]);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div>
      <Header title="Ordenes" />
      <section className="fadeIn overflow-x-scroll">
        <Table>
          <thead>
            <tr className="bg-orange-100">
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
