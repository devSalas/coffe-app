import React from "react";
import Bars from "./icons/Bars";
import BellIcon from "./icons/BellIcon";
import { dancingScript } from "@/app/fonts";

export default function HeaderHome() {
  return (
    <header className="flex justify-between py-4 bg-black">
      <button className="text-neutral-500">
        <Bars />
      </button>
      <h2 className={dancingScript.className + " text-orange-500 text-2xl"}>
        Spresso
      </h2>
      <button className="text-neutral-500">
        <BellIcon />
      </button>
    </header>
  );
}
