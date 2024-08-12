import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItemsCount, setCartItemsCount] = useState();

  function addToCart() {
    setCartItemsCount(cartItemsCount + 1);
  }

  function resetCart() {
    setCartItemsCount("");
  }

  return (
    <CartContext.Provider value={{ cartItemsCount, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}
