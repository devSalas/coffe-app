"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { useSesion } from "@/global/sesion";
import Spinner from "@/components/icons/Spinner";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)

  const { registrarse } = useSesion();

  const showMessageRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const res = await  registrarse(formData);
    setLoading(false)
    if (res == null) {
      showMessageRef.current!.style.opacity = "1"
      const timeoutId = setTimeout(() => {
        showMessageRef.current!.style.opacity = "0"
        clearTimeout(timeoutId)
      }, 3000)

    }

  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="relative w-full max-w-md px-8">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <h1 className="text-second font-semibold text-center text-3xl">Registrate</h1>
        <Label>
        <span className="text-white/60 text-lg"> Nombre</span>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            classN={"h-14"}
            required={true}
          />
        </Label>

        <Label>
        <span className="text-white/60 text-lg"> Email</span>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            classN={"h-14"}
            required={true}

          />
        </Label>
        <Label>
          <span className="text-white/60 text-lg"> Contraseña</span>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            classN={"h-14"}
            required={true}
            minLength={8}
          />
        </Label>
        <Button classN="h-14 text-lg font-semibold">
        {(loading) 
            ? <Spinner/>
            : "Registrate"
            }
        </Button>
        <p className="text-end text-white text-lg">
          si ya tienes una cuenta{" "}
          <Link className="text-orange-600" href={"/login"}>
            Iniciar sesion
          </Link>{" "}
        </p>
      </form>
      <div ref={showMessageRef} className="relative opacity-0  w-full h-14 bg-red-700 rounded-md flex justify-center items-center mt-8">
        <p className=" text-center text-white">Usuario o contraseña incorrecta</p>
      </div>
    </div>
  );
}
