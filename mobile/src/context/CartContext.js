import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  function addToCart(quantity) {
    setCartItemsCount((prevCount) => prevCount + quantity);
  }

  function resetCart() {
    setCartItemsCount(0);
  }

  return (
    <CartContext.Provider value={{ cartItemsCount, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}
