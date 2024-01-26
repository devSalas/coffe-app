"use client";

import { useMenu } from "@/global/MenuContext";
import React from "react";
import SearchIcon from "../icons/Search";

export default function Search() {
  const { search } = useMenu();

  const handleChange = (e: any) => {
    let term = e.target.value.trim();
    search(term);
  };

  return (
    <div className="relative">
      <input
        onChange={handleChange}
        type="search"
        id="search"
        placeholder="buscar menu preferido ..."
        className="bg-third text-white w-full rounded-full p-3 pl-12"
      />
      <label htmlFor="search" className="absolute left-4 top-0 h-full flex items-center ">
        <SearchIcon/>
      </label>
    </div>

  );
}
