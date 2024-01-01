"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { addMenu, getCategories } from "@/api/fetch";
import { recuperarToken } from "@/lib/token";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  name: string;
  description: string;
  price: number;
  category_id: number | null;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    price: 0,
    category_id: null,
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      // console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* const token = recuperarToken();

    console.log(formData);
    const res = await addMenu(formData, token);
    console.log(res); */
    toast.success("menu creado");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(formData);

  return (
    <div className="">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <h1 className="text-neutral-800 text-center text-2xl">Crear un menu</h1>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Descripcion
          <textarea
            className="bg-orange-100 p-2 rounded"
            name="description"
            id=""
            cols={30}
            rows={5}
            onChange={handleInputChange}
          >
            {formData.description}
          </textarea>
        </Label>
        <Label>
          Precio
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Categorias
          <select className="p-2 border" name="category">
            {categories?.map(({ id_category, name }: any) => (
              <option value={id_category} key={id_category}>
                {name}
              </option>
            ))}
          </select>
        </Label>
        <Button>Crear menu</Button>
        <Toaster />
      </form>
    </div>
  );
}
