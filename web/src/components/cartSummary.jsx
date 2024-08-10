import React, { useContext } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { CartContext } from "../context/cartContext";

export default function CartSummary({ total }) {
  const { resetCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("Pedido finalizado!");
    resetCart();
  };

  return (
    <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
      <Text fontWeight="bold">Total: R${total}</Text>
      <Button
        colorScheme="teal"
        mt={4}
        onClick={handleCheckout}
        _hover={{ bg: "#c62c4a" }}
        bg="#F8375D"
      >
        FINALIZAR PEDIDO
      </Button>
    </Box>
  );
}
