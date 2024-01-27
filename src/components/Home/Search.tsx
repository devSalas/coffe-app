"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChange = (e: any) => {
    let term = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    router.replace(`/home?${params}`);
  };

  return (
    <input
      onChange={handleChange}
      type="search"
      placeholder="buscar..."
      className="bg-neutral-800/80 text-white backdrop-blur hover:bg-neutral-800 focus:bg-neutral-800 outline-none w-full rounded-full py-3 px-6"
    />
  );
}
