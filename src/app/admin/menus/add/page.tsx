"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { addMenu, getCategories } from "@/api/fetch";
import toast, { Toaster } from "react-hot-toast";
import { useSesion } from "@/global/sesion";
import Link from "next/link";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";

export default function Page() {
  const [menu, setMenu] = useState({
    name: "",
    description: "",
    price: 0,
    category_id: 0,
  });
  const [categories, setCategories] = useState([]);
  const { token } = useSesion();

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { name, description, price, category_id } = e.target;

    const menu = {
      name: name.value,
      description: description.value,
      price: Number(price.value),
      category_id: Number(category_id.value),
    };

    const res = await addMenu(menu, token);
    console.log(res);

    toast.success("menu creado");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMenu((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="">
      <header className="flex justify-between items-center gap-4 py-2">
        <Link
          className="text-neutral-800 hover:text-orange-600 text-lg flex items-center gap-2 py-2 transition-colors"
          href={"/admin/menus"}
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
          Crear un menu
        </Link>
      </header>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={menu.name}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Descripcion
          <Textarea
            name="description"
            cols={30}
            rows={5}
            value={menu.description}
            onChange={handleChange}
          ></Textarea>
        </Label>
        <div className="grid grid-cols-2 gap-4">
          <Label>
            Precio
            <Input
              type="number"
              name="price"
              value={menu.price}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Categorias
            <Select
              name="category_id"
              value={menu.category_id}
              onChange={handleChange}
            >
              {categories?.map(({ id_category, name }: any) => (
                <option value={id_category} key={id_category}>
                  {name}
                </option>
              ))}
            </Select>
          </Label>
        </div>
        <Button>Crear menu</Button>
        <Toaster />
      </form>
    </div>
  );
}
