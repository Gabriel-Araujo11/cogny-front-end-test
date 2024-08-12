import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = () => {
    setCartItemsCount(cartItemsCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartItemsCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
