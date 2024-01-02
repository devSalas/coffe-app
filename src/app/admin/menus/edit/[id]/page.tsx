"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { getMenu, getCategories, editMenu } from "@/lib/data";
import toast, { Toaster } from "react-hot-toast";
import { useSesion } from "@/global/sesion";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Page() {
  const [menu, setMenu] = useState({
    name: "",
    description: "",
    price: 0,
    category_id: 0,
  });
  const [categories, setCategories] = useState([]);

  const { token } = useSesion();
  const params = useParams();
  const id = Array.isArray(params) ? params[0].id : params.id;

  useEffect(() => {
    getMenu(id).then((res) => {
      setMenu(res.data);
    });

    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newMenu = {
      name: menu.name,
      description: menu.description,
      price: Number(menu.price),
      category_id: Number(menu.category_id),
    };

    await editMenu(id, newMenu, token);

    toast.success("menu guardado");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMenu((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Header title="Editar" />
      <section className="fadeIn">
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
            <textarea
              className="bg-orange-100 focus:outline-1 focus:bg-orange-200 rounded py-3 px-4 outline-orange-300 hover:bg-orange-200"
              name="description"
              cols={30}
              rows={5}
              value={menu.description}
              onChange={handleChange}
            ></textarea>
          </Label>
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
            <select
              className="bg-orange-100 focus:outline-1 focus:bg-orange-200 rounded py-3 px-4 outline-orange-300 hover:bg-orange-200"
              name="category_id"
              value={menu.category_id}
              onChange={handleChange}
            >
              {categories?.map(({ id_category, name }: any) => (
                <option value={id_category} key={id_category}>
                  {name}
                </option>
              ))}
            </select>
          </Label>
          <Button>Guardar</Button>
          <Toaster />
        </form>
      </section>
    </>
  );
}
