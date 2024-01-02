"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { addCategory } from "@/lib/data";
import toast, { Toaster } from "react-hot-toast";
import { useSesion } from "@/global/sesion";
import Header from "@/components/Header";

export default function Page() {
  const [category, setCategory] = useState({
    name: "",
  });
  const { token } = useSesion();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(category);
    await addCategory(category, token);
    toast.success("menu creado");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCategory((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="">
      <Header title="Añadir Categoria" />
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
        <Button>Crear categoria</Button>
        <Toaster />
      </form>
    </div>
  );
}
