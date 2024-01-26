"use client";

import React from "react";
import { dancingScript, PoppinsFont} from "@/app/fonts";
import ArrowLeft from "./icons/ArrowLeft";
import { useRouter } from "next/navigation";

export default function HeaderHome() {
  const router = useRouter();

  /* const handleClick = () => {
    router.back();
  }; */

  return (
    <header className="py-4 md:py-8 bg-black w-full z-50">
      {/* <button className="absolute md:hidden left-2 top-2" onClick={handleClick}>
        <ArrowLeft />
      </button> */}
      <div className="">
        <h2
          className={
            PoppinsFont.className +
            " text-second  text-3xl md:text-4xl md:max-w-7xl md:m-auto  text-center mt-5 "
          }
        >
          Cafeteria Empresarial
        </h2>
      </div>
    </header>
  );
}
