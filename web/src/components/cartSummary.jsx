import React, { useContext, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { CartContext } from "../context/cartContext";
import AlertMessage from "../utils/Alert";

export default function CartSummary({ total }) {
  const { resetCart } = useContext(CartContext);
  const [alert, setAlert] = useState(null);

  function handleCheckout() {
    if (total === 0) {
      setAlert({
        status: "warning",
        title: "Carrinho vazio",
        description: "Não existe nenhum produto no carrinho.",
      });
    } else {
      setAlert({
        status: "success",
        title: "Pedido finalizado!",
        description: "Seu pedido foi finalizado com sucesso!",
      });
      resetCart();
    }
  }

  return (
    <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
      {alert && (
        <AlertMessage
          status={alert.status}
          title={alert.title}
          description={alert.description}
          onClose={() => setAlert(null)}
        />
      )}
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
