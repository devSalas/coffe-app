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
      <section className="fadeIn hidden md:block">
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
            {orders.map(
              ({
                id_order,
                menu,
                user,
                amount,
                order_date,
                total_price,
                state,
                payment_method,
              }) => (
                <tr key={id_order} className="border-b">
                  <TableCell>{id_order}</TableCell>
                  <TableCell>{menu.name}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{amount}</TableCell>
                  <TableCell>{order_date}</TableCell>
                  <TableCell>{total_price}</TableCell>
                  <TableCell>
                    <span className="text-sm bg-orange-400 py-1 px-3 rounded-full">
                      {state}
                    </span>
                  </TableCell>
                  <TableCell>{payment_method}</TableCell>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </section>
      <section className="md:hidden">
        <ul className="flex flex-col gap-4">
          {orders.map(
            (
              {
                id_order,
                menu,
                user,
                amount,
                order_date,
                total_price,
                state,
                payment_method,
              },
              i
            ) => (
              <li
                key={id_order}
                className="fadeIn p-4 bg-orange-100 rounded-xl flex flex-col gap-4"
                style={{ animationDelay: `.${i}s` }}
              >
                <header className="flex justify-between">
                  <h4 className="text-xl text-orange-800">{user.name}</h4>
                  <span className="bg-orange-400 text-orange-900 py-1 px-3 rounded-full text-sm">
                    {state}
                  </span>
                </header>
                <p className="text-orange-900">
                  {menu.name} S/{menu.price} x {amount} = S/{total_price}
                </p>
                <p className="text-sm text-orange-700">{order_date}</p>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}
