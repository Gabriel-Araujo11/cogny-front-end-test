import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  function addToCart(product, quantity) {
    // setCartItemsCount((prevCount) => prevCount + quantity);

    setCartItemsCount((prevItems) => {
      const itemExists = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (itemExists) {
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity } : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
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
