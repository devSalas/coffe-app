import React from "react";
import Bars from "./icons/Bars";
import BellIcon from "./icons/BellIcon";

export default function HeaderHome() {
  return (
    <header className="flex justify-between py-4 bg-black">
      <button className="text-neutral-500">
        <Bars />
      </button>
      <h2 className="text-neutral-500">Spresso</h2>
      <button className="text-neutral-500">
        <BellIcon />
      </button>
    </header>
  );
}
