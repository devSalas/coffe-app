"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { useSesion } from "@/global/sesion";

interface FormData {
  email: string;
  password: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const { iniciarSesion } = useSesion();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    iniciarSesion(formData);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <h1 className="text-neutral-800 text-center text-2xl">Login</h1>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Contraseña
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Label>
        <Button>Iniciar sesion</Button>
        <p>
          no tienes una cuenta?{" "}
          <Link className="text-orange-600" href={"/signup"}>
            Registrate
          </Link>
        </p>
      </form>
    </div>
  );
}
