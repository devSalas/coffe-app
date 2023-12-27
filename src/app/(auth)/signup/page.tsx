"use client";
import React, { useState } from "react";
import { signup } from "@/api/fetch";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function page() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginSuccess = await signup(formData);

    if (loginSuccess) {
      router.push("/");
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <h1 className="text-neutral-800 text-center text-2xl">Signup</h1>
        <Label>
          Nombre
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Label>

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
        <Button>Registrarse</Button>
        <p>
          si ya tienes una cuenta{" "}
          <Link className="text-orange-600" href={"/login"}>
            Iniciar sesion
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
