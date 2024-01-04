import { useContext } from "react";
import { CartContext } from "@/global/Cart";
function useCart() {
  const context = useContext(CartContext);

  if (context == undefined) {
    throw new Error("useCart must be used within a CartProvidder");
  }
  return context;
}

export default useCart;
