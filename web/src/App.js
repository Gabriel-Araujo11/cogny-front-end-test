import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/products";
import Header from "./components/header";
import Cart from "./pages/cart";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
