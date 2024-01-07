import React from "react";
import BellIcon from "./icons/BellIcon";
import { dancingScript } from "@/app/fonts";
import Sidebar from "./Sidebar";

export default function HeaderHome() {
  return (
    <header className="flex justify-between py-4 bg-black">
      <button className="text-neutral-500">
        <Sidebar/>
      </button>
      <h2 className={dancingScript.className + " text-second text-2xl "}>
        Spresso
      </h2>
      <button className="text-neutral-500">
        <BellIcon />
      </button>
    </header>
  );
}
