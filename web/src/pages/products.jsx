import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import ProductList from "../components/productsList";
import { CartContext } from "../context/cartContext";

export default function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <Box p={4} maxWidth="1000px" margin="0 auto">
      <ProductList addToCart={addToCart} />
    </Box>
  );
}
