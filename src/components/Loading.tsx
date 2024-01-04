import React from "react";
import { dancingScript } from "@/app/fonts";

export default function Loading() {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <h1
        className={
          dancingScript.className + " text-orange-500 text-6xl animate-pulse"
        }
      >
        Spresso
      </h1>
    </div>
  );
}
