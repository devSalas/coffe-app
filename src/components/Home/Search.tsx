"use client";

import { useMenu } from "@/global/MenuContext";
import React from "react";

export default function Search() {
  const { search } = useMenu();

  const handleChange = (e: any) => {
    let term = e.target.value.trim();
    search(term);
  };

  return (
    <input
      onChange={handleChange}
      type="search"
      placeholder="buscar...."
      className="bg-third w-full rounded-md p-2"
    />
  );
}
