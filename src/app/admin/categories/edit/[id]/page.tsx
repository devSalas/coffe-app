"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import { getCategories, editCategory } from "@/lib/data";
import toast, { Toaster } from "react-hot-toast";
import { useSesion } from "@/global/sesion";
import Header from "@/components/Admin/Header";
import { useParams } from "next/navigation";

export default function Page() {
  const [category, setCategory] = useState({
    name: "",
  });
  const { token } = useSesion();
  const params = useParams();
  const id = Array.isArray(params) ? params[0].id : params.id;

  useEffect(() => {
    getCategories().then((res) => {
      const result = res.data.find((c: any) => c.id_category === Number(id));
      setCategory(result);
    });
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newCategory = {
      name: category.name,
    };
    await editCategory(id, newCategory, token);
    toast.success("categoria editada");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCategory((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="">
      <Header title="Editar Categoria" />
      <form className="fadeIn flex flex-col gap-6" onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={category.name}
            required
            onChange={handleChange}
          />
        </Label>
        <Button>Guardar</Button>
        <Toaster />
      </form>
    </div>
  );
}
