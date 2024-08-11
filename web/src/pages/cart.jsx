import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import CartSummary from "../components/cartSummary";
import { CartContext } from "../context/cartContext";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );

  return (
    <Box p={4} maxWidth="1000px" margin="0 auto" bg="white" color="black">
      <CartSummary cartItems={cartItems} total={total} />
    </Box>
  );
}
