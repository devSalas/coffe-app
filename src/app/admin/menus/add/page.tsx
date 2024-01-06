"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { addMenu, getCategories } from "@/lib/data";
import toast, { Toaster } from "react-hot-toast";
import { useSesion } from "@/global/sesion";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import Header from "@/components/Header";

export default function Page() {
  const [menu, setMenu] = useState({
    name: "",
    url: "",
    description: "",
    price: 1,
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

    const newMenu = {
      name: menu.name,
      url: menu.url,
      description: menu.description,
      price: Number(menu.price),
      category_id: Number(menu.category_id),
    };

    const res = await addMenu(newMenu, token);
    console.log(res);

    toast.success("menu creado");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMenu((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="">
      <Header title="Añadir Menu" />
      <form className="fadeIn flex flex-col gap-6" onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={menu.name}
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Url Image
          <Input
            type="text"
            name="url"
            value={menu.url}
            required
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
            required
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
              min="1"
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
