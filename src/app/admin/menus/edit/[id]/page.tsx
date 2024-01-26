"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import { getMenuById, getCategories, editMenu } from "@/lib/data";
import toast, { Toaster } from "react-hot-toast";
import { useSesion } from "@/global/sesion";
import { useParams } from "next/navigation";
import Header from "@/components/Admin/Header";
import { CategoryI, MenuI } from "@/lib/definitions";

export default function Page() {
  const [menu, setMenu] = useState<any>({
    name: "",
    url: "",
    description: "",
    price: 0,
    category_id: 0,
  });
  const [categories, setCategories] = useState<CategoryI[]>([]);

  const { token } = useSesion();
  const params = useParams();
  const id = Array.isArray(params) ? params[0].id : params.id;

  useEffect(() => {
    getMenuById(id).then((res) => {
      if (res) {
        setMenu(res);
      }
    });

    getCategories().then((res) => {
      if (res) {
        setCategories(res);
      }
    });
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newMenu = {
      name: menu.name,
      url: menu.url,
      description: menu.description,
      price: Number(menu.price),
      category_id: Number(menu.category_id),
    };

    await editMenu(id, newMenu, token);

    toast.success("menu guardado");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setMenu((prevData: any) => ({ ...prevData, [name]: value }));
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
            Url Image
            <Input
              type="text"
              name="url"
              value={menu.url}
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
