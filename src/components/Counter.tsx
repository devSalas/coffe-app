"use client";

import { useCounter } from "@/global/CounterContext";
import { clsx } from "clsx";

interface Props {
  size: string;
}

function Counter({ size = "small" }: Props) {
  const { counter, increment, decrement } = useCounter();

  return (
    <div className={"bg-second text-fourth flex items-center rounded-md"}>
      <button
        className={clsx("", {
          "py-1 px-3": size === "small",
          "py-2 px-4": size === "large",
        })}
        onClick={decrement}
      >
        −
      </button>
      <span
        className={clsx("", {
          "py-1 px-3": size === "small",
          "py-2 px-4": size === "large",
        })}
      >
        {counter}
      </span>
      <button
        className={clsx("", {
          "py-1 px-3": size === "small",
          "py-2 px-4": size === "large",
        })}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
