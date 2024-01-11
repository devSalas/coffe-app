"use client";

import React from "react";
import ArrowLeft from "../icons/ArrowLeft";
import { useRouter } from "next/navigation";

export default function Header({ title }: { title: string }) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <header className="flex items-center gap-4 py-4">
      <button
        className="text-orange-200 hover:text-orange-300 flex items-center gap-2"
        onClick={handleClick}
      >
        <ArrowLeft />
      </button>
      <h1 className="text-orange-200 text-lg pr-6 flex-1 text-center md:text-start">
        {title}
      </h1>
    </header>
  );
}
