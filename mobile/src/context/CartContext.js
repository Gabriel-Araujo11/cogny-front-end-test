import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItemsCount, setCartItemsCount] = useState([]);

  function addToCart(product) {
    setCartItemsCount((prevCount) => [...prevCount, product]);
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
