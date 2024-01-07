"use client";
import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

export const CounterProvider = ({ children }: Props) => {
  const [counter, setCounter] = useState(1);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter > 1 ? counter - 1 : 1);
  const reset = () => setCounter(1);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export function useCounter() {
  const context = useContext(CounterContext);

  if (context == undefined) {
    throw new Error("useCounter must be used within a CounterProvidder");
  }
  return context;
}
