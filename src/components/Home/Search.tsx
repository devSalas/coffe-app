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
    <div className="relative">
      <label htmlFor="search">
        <svg className="absolute top-0 left-0 h-full py-2 px-4 text-white/50 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
        </svg>

      </label>
      <input
        id="search"
        onChange={handleChange}
        type="search"
        placeholder="buscar..."
        className="bg-neutral-800/80 text-white backdrop-blur hover:bg-neutral-800 focus:bg-neutral-800 outline-none w-full rounded-full py-3 pr-6 pl-14"
      />
    </div>
  );
}
