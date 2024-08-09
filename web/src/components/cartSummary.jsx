import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

export default function CartSummary({ total }) {
  const handleCheckout = () => {
    alert("Pedido finalizado!");
  };

  return (
    <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
      <Text fontWeight="bold">Total: ${total}</Text>
      <Button colorScheme="teal" mt={4} onClick={handleCheckout}>
        Finalizar pedido
      </Button>
    </Box>
  );
}
