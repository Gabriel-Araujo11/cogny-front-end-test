import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product, quantity) {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (itemExists) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  }

  function updateQuantity(productId, quantity) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function resetCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
